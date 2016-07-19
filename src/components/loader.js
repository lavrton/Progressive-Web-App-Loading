const queue = [];
const delay = 300;

let isWaiting = false;


function requestLoad() {
    if (isWaiting) {
      return;
    }
    if (!queue.length) {
      return;
    }
    const loader = queue.pop();
    isWaiting = true;
    loader(() => {
      setTimeout(() => {
        isWaiting = false;
        requestLoad();
      }, delay)
    });
}

export default function sceduleLoad(loader) {
  queue.push(loader);
  requestLoad();
}
