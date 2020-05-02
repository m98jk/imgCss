function imgCss(opt) {
  let imgs = document.querySelectorAll('.shadow');

  if (opt.shadow_type === 'hard') {
    opt.shadow_type = '0px';
  } else {
    opt.shadow_type = '15px';
  }
  if (opt.bgColor == 'red') {
    opt.bgColor == '#E91E63';
  } else {
    opt.bgColor == '#673AB7';
  }
  imgs.forEach((img) => {
    img.style.boxShadow = `10px 10px ${opt.shadow_type} 1px rgba(0,0,0,0.12)`;
    img.style.backgroundColor = `${opt.bgColor}`;
    if (opt.padding) {
      img.style.padding = '1em';
    }
  });
}

module.exports.imgCss = imgCss;
