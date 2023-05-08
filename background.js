function setWindowSize(window) {
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;

  var width = Math.round(screenWidth * 0.8);
  var height = Math.round(screenHeight * 0.8);

  window.outerBounds.width = width;
  window.outerBounds.height = height;
}

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('matrix.html', {
    'resizable': true,
    'outerBounds': {
      'minWidth': 300,
      'minHeight': 200
    }
  }, function(window) {
    setWindowSize(window);
  });
});
