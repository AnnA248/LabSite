window.addEventListener('load',function(){

  var imgurl=["img/slide_01.jpg", "img/slide_02.jpg", "img/slide_03.jpg"];
  var i=0;
  var a=1.0;
  var timer1=null;
  var timer2=null;
  
  function change (){
    document.getElementById("slide").children[0].src=imgurl[i];
	
    if(i<2){
      document.getElementById("slide").children[1].src=imgurl[i+1];
      i++;
	  
    }else{
      document.getElementById("slide").children[1].src=imgurl[0];
      i=0;
    }
	
    timer1=setInterval(function (){
      a-=0.005;
      document.getElementById("slide").children[0].style.opacity=a;
    }, 1);
	
    if(a<0){
      clearInterval(timer1);
      a=1.0;
    }
	
  }
  
  change();
  timer2=setInterval(change, 8000);
})