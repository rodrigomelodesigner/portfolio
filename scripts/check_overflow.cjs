const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'edge-debug-'));
const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless',
  '--disable-gpu',
  '--remote-debugging-port=9223',
  '--user-data-dir=' + tmpDir,
  '--window-size=390,844',
  'http://localhost:4173/'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://127.0.0.1:9223/json');
    const tabs = await res.json();
    const tab = tabs.find(t => t.url.includes('4173'));
    if (!tab) {
      console.log('No tab found');
      edge.kill();
      return;
    }

    const ws = new WebSocket(tab.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            (() => {
              const winWidth = window.innerWidth;
              const docWidth = document.documentElement.scrollWidth;
              const bodyWidth = document.body.scrollWidth;
              const overflowing = [];
              document.querySelectorAll('*').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.right > winWidth + 1) {
                  overflowing.push({
                    tag: el.tagName,
                    id: el.id,
                    className: el.className,
                    right: rect.right,
                    width: rect.width,
                    text: (el.innerText || '').slice(0, 30)
                  });
                }
              });
              return { winWidth, docWidth, bodyWidth, overflowingCount: overflowing.length, samples: overflowing.slice(0, 10) };
            })()
          `,
          returnByValue: true
        }
      }));
    };
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 1) {
        console.log('OVERFLOW_RESULT:', JSON.stringify(msg.result.result.value, null, 2));
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
