console.clear();

var feed, $body, $polaroids, $polaroid;

var log = function(log){
  if(debugging)
    console.log(log);
};


/**
 * Loading
 */
var loading = function(state){
  var $loading = $('#loading');
  if(state){
    $body.addClass('loading');
    modal(true);
    log("Loading...");

  } else {
    $body.removeClass('loading');
    modal(false);
    log("Loaded");
  }
};


/**
 * Modal window
 */
var modal = function(state){
  if(state){
    $body.addClass('modal');
    log("modal visible");

  } else {
    $body.removeClass('modal');
    log("modal hidden");
  }
};

/**
 * Before
 */
var onBefore = function(){
  log('onBefore');
  loading(true);
};

/**
 * Success
 * @param data
 */
var onSuccess = function(data){
  log('onSuccess');
  loading(false);
};

$(document).ready(function() {

  $body = $('body');
  $polaroids = $('#polaroids');
  $polaroid = $('.polaroid', $polaroids);

  // Polaroid click
  $(document).on('click', '#polaroids .image', function(){
    $polaroid.removeClass('active');
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
      modal(true);
    } else {
      $body.removeClass('watching');
      modal(false);
      $('.polaroid', $polaroids).removeClass('active');
    }
  };

  /**
   *Instafeed
   */

  feed = new Instafeed({
    target:       'polaroids', // ID element in html
    get:          config_get,
    tagName:      config_tagName,
    userId:       config_userId,
    clientId:     '63ed1aa8d96145a5b4e0c0919967aa7c',
    accessToken:  '2421015.467ede5.e755965e4bdc46de9e68c033c062974e',
    limit:        config_limit,
    sortBy:       config_sortBy,
    resolution:   'standard_resolution',
    template: '<div class="polaroid"><a class="close" href="#">Close</a><div class="caption"><p>{{caption}}</p></div><div class="image"><img src="{{image}}" /></div></div>',

    // every time we load more, run this function
    after: function() {
      // disable button if no more results to load
      if (!this.hasNext()) {
        loadButton.setAttribute('disabled', 'disabled');
      }
    },

    before: function() { onBefore(); },
    success: function(data) { onSuccess(data); }

  });

  /**
   * Pagination
   */
  var loadButton = document.getElementById('load-more');
  loadButton.addEventListener('click', function() {
    feed.next();
  });


  // run
  feed.run();

});


