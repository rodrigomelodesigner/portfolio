const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-mobile-'));
const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9224',
  '--user-data-dir=' + tmpDir,
  'http://localhost:4173/'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://127.0.0.1:9224/json');
    const tabs = await res.json();
    const tab = tabs.find(t => t.url.includes('4173'));
    if (!tab) {
      console.log('No tab found');
      edge.kill();
      return;
    }

    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    let step = 0;

    ws.onopen = () => {
      // 1. Set device metrics override to iPhone 13/14 (390 x 844)
      ws.send(JSON.stringify({
        id: 1,
        method: 'Emulation.setDeviceMetricsOverride',
        params: {
          width: 390,
          height: 844,
          deviceScaleFactor: 2,
          mobile: true
        }
      }));
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 1) {
        // 2. Wait a tick and capture screenshot
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 2,
            method: 'Page.captureScreenshot',
            params: {
              format: 'png',
              captureBeyondViewport: false
            }
          }));
        }, 1000);
      } else if (msg.id === 2) {
        const buffer = Buffer.from(msg.result.data, 'base64');
        const outPath = path.resolve(__dirname, '..', 'screenshots_review', '02_home_mobile.png');
        fs.writeFileSync(outPath, buffer);
        console.log('Saved 02_home_mobile.png successfully, size:', buffer.length);
        ws.close();
        edge.kill();
        process.exit(0);
      }
    };
  } catch (err) {
    console.error('Error:', err);
    edge.kill();
    process.exit(1);
  }
}, 3000);
