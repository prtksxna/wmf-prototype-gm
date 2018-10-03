$( function () {
  $('#download-report').on('click', function () {
    var $btn = $(this).text('Generating report…');
    this.disabled = true;
  });
  $('#wikitext-report').on('click', function () {
    var $btn = $(this).text('Generating report…');
    this.disabled = true;
  });

})
