$(document).ready(function() {
  $('#menu-right').fix({
    container : 'fix-container-right',
    content : 'fix-content-right',
    class : 'fix-right',
    top : $('.ls-topbar').height() + 'px'
  });
  $('#menu-left').fix({
    container : 'fix-container-left',
    content : 'fix-content-left',
    class : 'fix-left',
    top : $('.ls-topbar').height() + 'px'
  });
});
