var submit = document.getElementsByClassName('canvas-submit')[0],
    originParts = document.referrer.split('/'),
    origin = originParts[0] + '//' + originParts[2],
    sendMessage = function () {
      window.parent.postMessage('submitted', origin);
      console.log('message sent');
      console.log(origin);
    };
submit.addEventListener('canvas_submit', sendMessage);
