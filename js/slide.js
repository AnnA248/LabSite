
window.addEventListener('load', setTimeout(function() {

  var imgurl = ["img/slide_01.jpg", "img/slide_02.jpg", "img/slide_03.jpg"];
  var i = 0;
  var a = 1.0;
  var timer1 = null;

  function change1() {
    change2();
    setTimeout(function() {
      requestAnimationFrame(change1)
    }, 13000);
  }

  function change2() {
    document.getElementById("slide").children[0].src = imgurl[i];
    if (i < 2) {
      document.getElementById("slide").children[1].src = imgurl[i + 1];
      i++;
    } else {
      document.getElementById("slide").children[1].src = imgurl[0];
      i = 0;
    }
    timer1 = setInterval(function() {

      a -= 0.005;
      document.getElementById("slide").children[0].style.opacity = a;
    }, 1);
    if (a < 0) {
      clearInterval(timer1);
      a = 0.5;
    }
  }
  change1();
}, 5000))
