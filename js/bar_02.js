window.onload=function(){ //htmlファイルの読み込み時に呼び出し
	
	 var bar=document.getElementById("header"); //id"header"の要素を取得
	 
	 window.onscroll=function(){ //ページのスクロール毎に呼び出し
		 
         var scr1=document.documentElement.scrollTop; //FireFoxやIE等のスクロール量の取得
		 var scr2=document.body.scrollTop; //ChromやSafari等のスクロール量の取得
		 
         if(scr1>=67 || scr2>=67){ //スクロール量が67px(メニューの各項目の文字の上くらい)以上なら
			 
			 document.getElementById("logo").children[0].children[0].src="../img/logo_02.png"; //画像を"logo_02.png"に入れ替え
			 bar.style.top=-67+"px"; //id"header"のcss"top"の値を-67pxで固定

		 }else{ //スクロール量が67px未満なら
		 
		     document.getElementById("logo").children[0].children[0].src="../img/logo.png"; //画像を"logo.png"に入れ替え
			 bar.style.top=-scr1+"px"; //id"header"のcss"top"の値をスクロールした量だけ減らす。FireFoxやIE等の値
			 bar.style.top=-scr2+"px"; //動作は上と同様。ChromやSafari等の値
         }
	 }
}