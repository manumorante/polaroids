console.clear();
/**
 * Success! Use the userId and token listed below to get your images:
 * userId: 2421015
 * accessToken: 2421015.467ede5.e755965e4bdc46de9e68c033c062974e 
 * http://instafeedjs.com/
 */
 
new Instafeed({
  target: 'polaroids',
//  get: 'tagged',
  get: 'user',
//  tagName: 'nexdoormodel',
  userId: 2421015,
  clientId: '63ed1aa8d96145a5b4e0c0919967aa7c',
  accessToken: '2421015.467ede5.e755965e4bdc46de9e68c033c062974e',
  limit: 35,
  sortBy: 'most-liked',
  resolution: 'standard_resolution',
  template: '<div class="polaroid"><a class="close" href="#">Close</a><div class="caption"><p>{{caption}}</p></div><div class="image"><img src="{{image}}" /></div></div>'
}).run();


$(document).ready(function() {

  var $body = $('body'),
      $polaroids = $('#polaroids');

  // Polaroid click
  $(document).on('click', '#polaroids .image', function(){
    $('#polaroids .polaroid').removeClass('active');
    $(this).closest('.polaroid').addClass('active');
    watching(true);
  });

  // Polaroid close
  $(document).on('click', '#polaroids .close', function(){
    watching(false);
  });

  // Polaroid close
  $(document).on('click', '#modal', function(){
    watching(false);
  });

  // Actived polaroid
  var watching = function(state){
    if(state) {
      $body.addClass('watching');
    } else {
      $body.removeClass('watching');
      $('.polaroid', $polaroids).removeClass('active');
    }
  }




});