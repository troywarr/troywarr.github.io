$('form').submit(function () {

  var originParts = decodeURIComponent(location.search.slice(1)).split('/'),
      origin = `${originParts[0]}//${originParts[2]}`,
      $submitIcon = $('.canvas-submit-icon'), // submit button in Promotions form
      checkSubmitIcon = function () {
        console.log(2);
        if ($submitIcon.css('display') === 'block') { // if submit loader is showing
          console.log(origin);
          clearInterval(interval); // stop checking
          top.postMessage('submitted', origin); // send success message to parent page
          console.log('message sent');
        }
      },
      interval = setInterval(checkSubmitIcon, 100); // check every 1/10th second

  console.log(1);
  console.log(location);
  console.log(origin);

  checkSubmitIcon(); // check initially
  setTimeout(function () { // check for up to 2 seconds
    clearInterval(interval);
  }, 2000);

});
