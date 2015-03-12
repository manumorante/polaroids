console.clear();
/**
 * Success! Use the userId and token listed below to get your images:
 * userId: 2421015
 * accessToken: 2421015.467ede5.e755965e4bdc46de9e68c033c062974e 
 * http://instafeedjs.com/
 */
 
new Instafeed({
  target: 'polaroids',
  get: 'tagged',
  tagName: 'nexdoormodel',
  clientId: '63ed1aa8d96145a5b4e0c0919967aa7c',
  limit: 35,
  sortBy: 'most-liked',
  resolution: 'standard_resolution',
  template: '<div class="polaroid"><div class="caption">{{caption}}</div><img src="{{image}}" /></div>'
}).run();

$(document).ready(function() {
  $(document).on('click', '#polaroids div', function(){
    $('#polaroids div').removeClass('active');
    $(this).addClass('active');
  });
});