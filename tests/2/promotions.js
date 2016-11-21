(function() {

  var origin = decodeURIComponent(location.search.slice(1)).split('&')[0];

  // notify parent window of form submit

  $('form').submit(function () {
    var $submitIcon = $('.canvas-submit-icon'), // submit button in Promotions form
        checkSubmitIcon = function () {
          if ($submitIcon.css('display') !== 'none') { // if submit loader is showing
            clearInterval(interval); // stop checking
            top.postMessage('submitted', origin); // send success message to parent page
          }
        },
        interval = setInterval(checkSubmitIcon, 200); // check every 1/5th second

    checkSubmitIcon(); // check initially
    setTimeout(function () { // check for up to 2 seconds
      clearInterval(interval);
    }, 2000);
  });

  // GA tracking

  $('input[name="field_4"]').on('click', function (event) { // track submit button click (11 - #3)
    top.postMessage('tracking|sharePhoto,upload,click', origin);
  });

  $('input[name="field_0"]').one('keypress', function (event) { // track submit button click (12 - #2)
    top.postMessage('tracking|sharePhoto,nativeType,firstName', origin);
  });

  $('input[name="field_1"]').one('keypress', function (event) { // track submit button click (12 - #2)
    top.postMessage('tracking|sharePhoto,nativeType,lastName', origin);
  });

  $('textarea[name="field_3"]').one('keypress', function (event) { // track submit button click (12 - #3)
    top.postMessage('tracking|sharePhoto,nativeType,body', origin);
  });

  $('.canvas-submit').on('click', function (event) { // track submit button click (12 - #5)
    top.postMessage('tracking|sharePhoto,nativeShare,submit', origin);
  });

}());
