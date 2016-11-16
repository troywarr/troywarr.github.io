$('form').submit(function () {
  var originParts = document.referrer.split('/'),
      origin = originParts[0] + '//' + originParts[2];
  window.parent.postMessage('submitted', origin);
  console.log('message sent');
  console.log(origin);
});
