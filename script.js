$(document).ready(function(){
    $('.main_background').css({'background-size':'100%'})
    $('.header_logo').delay(1000).animate({'top':'0'})
    $('.header_menu').delay(1100).animate({'top':'32px'})
    $('footer').delay(1400).animate({'bottom':'0'})
    $('.gallery_wrap').delay(1800).animate({'bottom':'-140px'})
    $('.sub_text').delay(2100).fadeIn(500)
    $('.main_text').delay(2100).fadeIn(500,function(){
        $('.main_text').delay(200).animate({'letterSpacing':'10px'})
    })
    $('.gallery_bt').click(function(){
        $('.gallery_wrap').animate({'bottom':'0'},500,function(){
            $('.slide').animate({'width':'1920px'},300)
            $('.main_text').animate({'top':'436px'},500)
            $('.sub_text').animate({'top':'515px'},500)
            $('.gallery_bt_arrow').stop().animate({'top':'0'})
        })	})
        $('.gallery_bt_arrow').delay(2300).animate({'top':'-30px'},500,function a(){
            $('.gallery_bt_arrow').animate({'top':'0'},500,function(){
                $('.gallery_bt_arrow').animate({'top':'-30px'},500,a)
            })
        })
    $('.main_background').click(function(){
        $('.slide').animate({'width':'0'},300,function(){
        $('.gallery_wrap').animate({'bottom':'-140px'},300)
        $('.main_text').animate({'top':'486px'},500)
        $('.sub_text').animate({'top':'565px'},500)
        $('.gallery_bt_arrow').animate({'top':'-30px'},500,function a(){
            $('.gallery_bt_arrow').animate({'top':'0'},500,function(){
                $('.gallery_bt_arrow').animate({'top':'-30px'},500,a)
            })
        })
        })
    })
    $('.slide li').click(function(){
        $(this).css({'opacity':'1'})
        $(this).siblings().css({'opacity':'0.5'})
        $('.main_background').css({'background-image':'url('+$(this).children('img').attr("src")+')'})
    })
}); // 마지막 괄호