/* js/autobanner.js */

$( function () {

  var $btn = $( '.banner-wrap input' );
  var btnCount = $btn.length;     //input 태그 개수
  var speed = 5000;               //슬라이드 시간(ms)
  var i = 0;                      //INDEX

  function check () {

    if ( i < btnCount ) {
      i++;
      $btn.eq( i ).click();
    } else {
      i = 0;
      $btn.eq( i ).click();
    } 
    
  }

  // speed ms 마다 check 실행
  var slide = setInterval( check, speed );
  
} );  