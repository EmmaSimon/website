window.addEventListener('load', () => {
  let sections = document.getElementsByClassName('section-header');
  let setHeight = element => {
    let {clientHeight, scrollHeight, style} = element;
    style.maxHeight = clientHeight ? 0 : `${scrollHeight}px`;
  };

  [...sections].forEach(section => section.addEventListener('click', () => {
    let content = section.parentElement.getElementsByClassName('content');
    [...content].forEach(setHeight);
  }));
});
