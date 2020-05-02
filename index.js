function imgCss(opt) {
  let imgs = document.querySelectorAll(".shadow");

  if (opt.shadow_type === "hard") {
    opt.shadow_type = "0px";
  } else {
    opt.shadow_type = "15px";
  }
  imgs.forEach((img) => {
    img.style.boxShadow = `10px 10px ${opt.shadow_type} 1px rgba(0,0,0,0.12)`;

    if (opt.padding) {
      img.style.padding = "1em";
    }
  });
}

module.exports.imgCss = imgCss;
