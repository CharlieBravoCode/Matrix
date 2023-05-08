chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('matrix.html', {
    'outerBounds': {
      'width': 2560,
      'height': 1440
    },
    'resizable': true
  });
});
