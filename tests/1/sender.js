var submit = document.getElementsByClassName('canvas-submit')[0],
    sendMessage = function () {
      window.parent.postMessage('Hello from form!', 'http://s.codepen.io');
      console.log('message sent');
    };
submit.addEventListener('click', sendMessage);
