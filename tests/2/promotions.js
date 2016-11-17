$('form').submit(function () {

  var origin = decodeURIComponent(location.search.slice(1)).split('&')[0],
      $submitIcon = $('.canvas-submit-icon'), // submit button in Promotions form
      checkSubmitIcon = function () {
        console.log(2);
        console.log($submitIcon.css('display'));
        if ($submitIcon.css('display') !== 'none') { // if submit loader is showing
          console.log(origin);
          clearInterval(interval); // stop checking
          top.postMessage('submitted', origin); // send success message to parent page
          console.log('message sent');
        }
      },
      interval = setInterval(checkSubmitIcon, 200); // check every 1/5th second

  console.log(1);
  console.log(location);
  console.log(origin);

  checkSubmitIcon(); // check initially
  setTimeout(function () { // check for up to 2 seconds
    clearInterval(interval);
  }, 2000);

});
