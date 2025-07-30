// Web Worker
const worker = new Worker('worker.js');

self.onmessage = function(e) {
  const input = e.data;
  const output = input * 2;
  self.postMessage(output); // Send result back
};

function sendToWorker() {
  const num = document.getElementById('numberInput').value;
  worker.postMessage(Number(num)); // Send data to worker
}

worker.onmessage = function(e) {
  document.getElementById('result').innerText = e.data;
};
