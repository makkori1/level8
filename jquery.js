$(function(){

  //ハンバーガーメニュー
  $(".header-ham").click(function(){
       $('.ham-menu').show(500),
       $('.header-inner').hide(),
       $('body').css('overflow', 'hidden')
  });
  
  $('.ham-icon').click(function(){
    $('.ham-menu').hide(500),
    $('.header-inner').show(),
    $('body').css('overflow', 'initial')
  });

  //ページ内スクロール
  $('.header-inner a').click(function(){ 

    $target= $($(this).attr('href')).offset().top;
    $target -= 100;
    $('html, body').animate({scrollTop: $target}, 500);

    return false;
  });

  $('.ham-menu a').click(function(){ 

    $('.ham-menu').hide(500);
    $('.header-inner').show();
    $('body').css('overflow', 'initial');

    $target= $($(this).attr('href')).offset().top;
    $target -= 100;
    $('html, body').animate({scrollTop: $target}, 500);

    return false;
  });

//activities
 $('#tab-2 , #tab-3').hide();
 $('.tab-box').click(function(){
 $('.activities-tab').hide();
 $($(this).attr("href")).show();
 $('.tab-open').removeClass('tab-open');
 $(this).parent().addClass('tab-open');
  return false;

});

  //アコーディオン
  $('.question-list').click(function(){
    var $answer= $(this).find('.answer');
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
    $step=$(this).parent().parent().children('p').text();
    $img=$(this).attr('href');
    $('#large-flow').children('p:nth-of-type(1)').text($step);
    $('#large-flow img').attr('src', $img);
    $('.bg-box').fadeIn();
    return false;
  });
    //flow隠す
    $('.flow-icon').click(function(){
      $('.bg-box').fadeOut();
    });
    $('#bg').click(function(){
      $('.bg-box').fadeOut();
    });

    //スライダー２

    //前へ戻る（スクロール方向右）
    $('.prev').click(function(){
      $('.member-ul').prepend($('.member-ul li:last-child'));
    });

    //次へ進む（スクロール方向左）
    $('.next').click(function(){
      $('.member-ul').append($('.member-ul li:nth-child(1)'));
    });





 

})
