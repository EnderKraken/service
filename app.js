onmessage = function(e) {
    postMessage('whats up?');
    console.log(e.data);
}