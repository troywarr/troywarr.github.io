$('form').submit(function () {

  var originParts = document.referrer.split('/'), // URL of parent page
      origin = originParts[0] + '//' + originParts[2],
      $submitIcon = $('.canvas-submit-icon'), // submit button in Promotions form
      checkSubmitIcon = function () {
        if ($submitIcon.css('display') === 'block') { // if submit loader is showing
          clearInterval(interval); // stop checking
          window.parent.postMessage('submitted', origin); // send success message to parent page
          console.log('message sent');
          console.log(origin);
        }
      },
      interval = setInterval(checkSubmitIcon, 100); // check every 1/10th second

  checkSubmitIcon(); // check initially
  setTimeout(function () { // check for up to 2 seconds
    clearInterval(interval);
  }, 2000);

});
