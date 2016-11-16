var origin = (parent !== window) ? document.referrer : document.location,
    submit = document.getElementsByClassName('canvas-submit')[0],
    sendMessage = function () {
      window.parent.postMessage('submitted', origin);
      console.log('message sent');
      console.log(origin);
    };
submit.addEventListener('click', sendMessage);
