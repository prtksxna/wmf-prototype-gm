$( function () {
  $('#download-report').on('click', function () {
    var $btn = $(this).text('Generating report…');
    this.disabled = true;

    $('.modal-body').empty();
    $status = $('<p>').text( 'Generating report…').addClass('p-status');
    $progress = $('<div>').addClass('progress');
    $progressBar = $('<div>')
      .attr( 'class', 'progress-bar progress-bar-striped active p-progress' )
      .css( 'width', '10%')
      .appendTo( $progress );
    $('.modal-body').append( $status, $progress );


    updateIn = function (ms, status, progress) {
      window.setTimeout( function () {
        $('.p-status').text( status );
        $('.p-progress').css('width', progress+ '%');
      }, ms)
    }
    updateIn( 2000, 'Gathering contributions…', 30);
    updateIn( 5000, 'Calculating impact…', 50);
    updateIn( 6000, 'Calculating participation…', 70);
    updateIn( 9000, 'Gathering per-wiki metrics…', 90);
    updateIn( 12000, 'Creating downloadable file…', 100);

    window.setTimeout( function () {
      $('.p-status').html( 'Your download should start automactically. <a href="#">Click here</a> if it hasn\'t.' );
      $('.progress').remove();
      $btn.text('Report ready')
    }, 15000)

  });
  $('#wikitext-report').on('click', function () {
    var $btn = $(this).text('Generating report…');
    this.disabled = true;
  });

})
