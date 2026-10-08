const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const pages = [
  { name: '01_home_desktop.png', url: 'http://localhost:4173/', width: 1440, height: 1080, mobile: false },
  { name: '02_home_mobile.png', url: 'http://localhost:4173/', width: 390, height: 844, mobile: true },
  { name: '03_work_desktop.png', url: 'http://localhost:4173/work', width: 1440, height: 1080, mobile: false },
  { name: '04_case_artilheiro_desktop.png', url: 'http://localhost:4173/work/artilheiro-da-casa', width: 1440, height: 1200, mobile: false },
  { name: '05_case_bolao_desktop.png', url: 'http://localhost:4173/work/bolao-da-copa', width: 1440, height: 1200, mobile: false },
  { name: '06_case_saida_desktop.png', url: 'http://localhost:4173/work/limites-prudenciais', width: 1440, height: 1200, mobile: false },
  { name: '07_about_desktop.png', url: 'http://localhost:4173/about', width: 1440, height: 1080, mobile: false },
  { name: '08_contact_desktop.png', url: 'http://localhost:4173/contact', width: 1440, height: 1080, mobile: false },
  { name: '09_case_artilheiro_mobile.png', url: 'http://localhost:4173/work/artilheiro-da-casa', width: 390, height: 844, mobile: true },
];

const outDir = path.resolve(__dirname, '..', 'screenshots_review');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-all-'));
const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9225',
  '--user-data-dir=' + tmpDir,
  'http://localhost:4173/'
]);

async function run() {
  await new Promise(r => setTimeout(r, 2000));
  const res = await fetch('http://127.0.0.1:9225/json');
  const tabs = await res.json();
  const tab = tabs.find(t => t.url.includes('4173'));
  if (!tab) {
    console.error('No tab found');
    edge.kill();
    return;
  }

  const ws = new WebSocket(tab.webSocketDebuggerUrl);

  let idCounter = 1;
  const send = (method, params = {}) => {
    return new Promise((resolve) => {
      const id = idCounter++;
      const handler = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === id) {
          ws.removeEventListener('message', handler);
          resolve(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  ws.onopen = async () => {
    console.log('Connected to CDP websocket');
    for (const p of pages) {
      console.log(`Capturing ${p.name}...`);
      await send('Page.navigate', { url: p.url });
      await new Promise(r => setTimeout(r, 1200));

      await send('Emulation.setDeviceMetricsOverride', {
        width: p.width,
        height: p.height,
        deviceScaleFactor: p.mobile ? 2 : 1,
        mobile: p.mobile
      });
      await new Promise(r => setTimeout(r, 800));

      const screenshot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
      const buffer = Buffer.from(screenshot.data, 'base64');
      fs.writeFileSync(path.join(outDir, p.name), buffer);
      console.log(`  ✓ Saved ${p.name} (${buffer.length} bytes)`);
    }

    console.log('All screenshots captured successfully!');
    ws.close();
    edge.kill();
    process.exit(0);
  };
}

run().catch(err => {
  console.error(err);
  edge.kill();
  process.exit(1);
});
