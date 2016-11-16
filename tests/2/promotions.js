var parentURL = (parent !== window) ? document.referrer : document.location,
    origin = parentURL,
    submit = document.getElementsByClassName('canvas-submit')[0],
    sendMessage = function () {
      window.parent.postMessage('submitted', origin);
      console.log('message sent');
    };
submit.addEventListener('click', sendMessage);
