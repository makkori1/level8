$(function(){

  //ハンバーガーメニュー
  //ハンバーガーメニュー開く
  $(".header-ham").click(function(){
       $('.ham-menu').show(500),
       $('.header-inner').hide(),
       $('body').css('overflow', 'hidden')
  });
    //ハンバーガーメニュー閉じる
  $('.ham-icon').click(function(){
    $('.ham-menu').hide(500),
    $('.header-inner').show(),
    $('body').css('overflow', 'initial')
  });

  //sick-mv
  $('.slider').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  autoplaySpeed: 5000,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true
  
});

  //ページ内スクロール
  $('.header-inner a').click(function(){ 
   //クリックした要素の高さ取得
    $target= $($(this).attr('href')).offset().top;
    $target -= 100;

    $('html, body').animate({scrollTop: $target}, 500);

    return false;
  });
 //ハンバーガーメニューをクリックした時のページ内スクロール
  $('.ham-menu a').click(function(){ 
    //ハンバーガーメニュー閉じる
    $('.ham-menu').hide(500);
    $('.header-inner').show();
    $('body').css('overflow', 'initial');
   //クリックした要素の高さ取得
    $target= $($(this).attr('href')).offset().top;
    $target -= 100;
    $('html, body').animate({scrollTop: $target}, 500);

    return false;
  });


  //フェードイン
  $(window).fadeThis();

//activities
 $('#tab-2 , #tab-3').hide();
 $('.tab-box').click(function(){
   //一度タブのコンテンツを非表示
 $('.activities-tab').hide();
 //クリックされたタブメニューとタブのコンテンツの値をつなげる
 $($(this).attr("href")).show();
 //.tab-openをもっていればタブメニューを青くする、もっていなければ白くする
 $('.tab-open').removeClass('tab-open');
 $(this).parent().addClass('tab-open');
  return false;

});

  //アコーディオン
  $('.question-list').click(function(){
    //？をクリックされた.answertの値を取得
    var $answer= $(this).find('.answer');
    //（openクラスは仮のクラス）openクラスをもっていれば、アコーディオンを閉じる。もっていなければ、アコーディオンを開く
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.hide(400);
      $(this).find('.icon span:nth-child(2)').css('display', 'block');
      $(this).find('.icon span:nth-child(1)').css('position', 'relative');
    }else{
      $answer.addClass('open');
      $answer.show(400);
      $(this).find('.icon span:nth-child(2)').css('display', 'none');
      $(this).find('.icon span:nth-child(1)').css('position', 'static');
    }
  });

  //flow
  //flow表示
 $('.flow-link a').click(function(){
   //クリックされたpタグの（step~）テキストを取得
    $step=$(this).parent().parent().children('p').text();
    //クリックされた要素のimgとhrefの値をつなげて、imgのパスを取得
    $img=$(this).attr('href');
    //取得したテキストを挿入
    $('#large-flow').children('p:nth-of-type(1)').text($step);
    //取得したimgを挿入
    $('#large-flow img').attr('src', $img);
    $('.bg-box').show(600);
    return false;
  });
    //flow隠す
    //×印をクリックしたら閉じる
    $('.flow-icon').click(function(){
      $('.bg-box').fadeOut(400);
    });
    //背景をクリックしたら閉じる
    $('#bg').click(function(){
      $('.bg-box').fadeOut(400);
    });

    //スライダー２
    $('.slider-member').slick({
      dots: false,
      slidesToScroll: 1,
      slidesToShow: 3,
      infinite: true,
   });
   $('.slider-member-sp').slick({
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
 });

})
