(function() {
  'use strict';

  window.addEventListener('load', function() {
    var sections = document.getElementsByClassName('section-header');
    var i;

    function expand(event) {
      var section = event.target.parentElement;
      var content = section.getElementsByClassName('content');
      var j;

      for (j = 0; j < content.length; j++) {
        if (content[j].clientHeight) {
          content[j].style.maxHeight = 0;
        } else {
          content[j].style.maxHeight = content[j].scrollHeight + 'px';
        }
      }
    }

    for (i = 0; i < sections.length; i++) {
      sections[i].addEventListener('click', expand);
    }
  });
})();
