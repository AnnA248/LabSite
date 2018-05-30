window.addEventListener('load',setTimeout(function(){

  var i=0;
  var j=1;
  var a=1.0;
  var b=0.0;
  var timer1=null;
  
  function change1(){
    change2();
    setTimeout(function(){requestAnimationFrame(change1)},14000);
  }
  function change2(){
    timer1=setInterval(function (){
      
      a-=0.006;
      b+=0.006;
      
      document.getElementById("slide").children[i].style.opacity=a;
      document.getElementById("slide").children[j].style.opacity=b;
    },1);
    if(a<0 && b>1){
      clearInterval(timer1);
      a=1.0;
      b=0.0;

      if(i<2){
        i++;
      }else{
        i=0;
      }
      if(j<2){
        j++;
      }else{
        j=0;
      }
    }
  }
  change1();
},3000))