var body, html, sliderBody, btnLeft, btnRight, i, parts,
    vHeight, vWidth, slide, slideBlock, slides
//Variable definitions
var i = 0,
    parts = 3,

    //Main html elements
    body = document.body,
    html = document.element,


    sliderBody = _id("slider"),
    btnLeft = _id("btn-left"),
    btnRight = _id("btn-right"),

    transitionTime = 1;

    //viewport Height and Width
    vHeight = window.innerHeight,
    vWidth = window.innerWidth,

window.onload = function(){
  prats = parts;
  if(vWidth < 640){
    parts = 1
  } else (parts = prats)
}      
    urls = ["http://cs626524.vk.me/v626524202/1d47/o33_EJR640E.jpg",
            "http://cs631322.vk.me/v631322202/23952/PJMaDOn6as4.jpg",
            "http://cs627529.vk.me/v627529202/3c7d4/ST7Ia7JC_lo.jpg",
            "http://cs630117.vk.me/v630117202/22b1f/ILT1HdQZoqk.jpg",
            "http://cs629301.vk.me/v629301202/4ac5e/u1Ed3_qEn-g.jpg",
            ];

window.addEventListener("resize", function(){
  vHeight = window.innerHeight;
  vWidth = window.innerWidth;
  
  if(vWidth < 640){
    parts = 1
  }

  slideBlockCreate();
}, false);

window.onload = function(){
  createElements();
}
function createElements(){
  slide = _createEl("div");
  slide.className += "slide-el";

  slideBlockCreate();
}

function slideBlockCreate(){
  console.log(vHeight, vWidth);

  slideBlock = _createEl("div");
  slideBlock.className += "slide-block slide-block-";
  slideBlock.style.width = vWidth + "px";
  slideBlock.style.height = (vHeight / parts ) + "px";
  slideBlock.style["transition"] = "left "+ transitionTime +"s";

  slideLayout();
}

function slideLayout(){
  sliderBody.innerHTML = "";
  for(var i=0; i < urls.length; i++){
    sliderBody.appendChild(slide.cloneNode(true));
  };
  var slides = _cl("slide-el");
  for(var i=0; i < slides.length; i++){
    for(var x=0; x < parts; x++){
      slides[i].appendChild(slideBlock.cloneNode(true))
      slides[i].className = "slide-el slide-el-"+ i +""
    }
  };
  for(var i = 0; i < slides.length; i++){
    console.log(slides[i]);
    slides[i].style.zIndex = i;
    for(var x=0;x<slides[i].children.length;x++){
      var offset = (x*(100/parts));
      var imageOffset = vHeight / offset;
      var transitionDelay = ((transitionTime / parts)/2)*x;
      console.log(transitionDelay);
      slides[i].children[x].style.top = offset + "%";
      slides[i].children[x].innerHTML = "<img src="+ urls[i] +" style='top: "+(((vHeight / parts)*-1)*x)+"px'>"
      // slides[i].children[x].style["background-image"] = "url("+urls[i]+")";
      // slides[i].children[x].style["background-position"] = "50% "+((((vHeight / parts)*-1)*x))/+"px";
      slides[i].children[x].style["transition-delay"] = transitionDelay +"s";
    }
  }
  addStyle();
}

function addStyle(){
  var slides = _cl("slide-el");
  console.log(slides[i]);
  slides[i].className += " opened";
}

btnLeft.addEventListener("click", function(){
  goLeft();
});
function goLeft(){
  var slides = _cl("slide-el");
  if(i > 0){
    i--;
    removeClass(slides[i+1], "opened")
  } else {
    i = urls.length - 1;
    for(x=0;x<urls.length;x++){
      slides[x].className += " opened"
    }
  }
}
btnRight.addEventListener("click", function(){
  goRight();
});

function goRight(){
  var slides = _cl("slide-el");
  if(i < urls.length -1){
    i++;
    slides[i].className += " opened"
  } else {
    i = 0;
    for(x = urls.length; x > 0 ; x--){
      removeClass(slides[x], "opened");
    }
  }
}

//Helper functions
function _id(el){
  return document.getElementById(""+ el +"");
}
function _cl(el){
  return document.getElementsByClassName(""+ el +"")
}
function _createEl(el){
  return document.createElement(""+ el +"");
}
function removeClass(el, _class) {
  if (el && el.className && el.className.indexOf(_class) >= 0) {
    var pattern = new RegExp('\\s*' + _class + '\\s*');
    el.className = el.className.replace(pattern, ' ');
  }
}