(function() {
  'use strict';

  // Initialize
  window.addEventListener('load', function() {
    var sections = document.getElementsByClassName('section-header');
    for (var i = 0; i < sections.length; i++) {
      sections[i].addEventListener('click', function(event) {
        var section = event.target.parentElement;
        var content = section.getElementsByClassName('content');

        for (var i = 0; i < content.length; i++) {
          if (content[i].clientHeight) {
            content[i].style.maxHeight = 0;
          } else {
            content[i].style.maxHeight = content[i].scrollHeight + 'px';
          }
        }
      });
    }
  });
})();
