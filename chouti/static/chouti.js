//登陆
$('.login-btn').each(function () {
        $(this).click(function () {
            $('#i1').load("./template/login.html")
        })
    });
//分享
$(".item").each(function () {
    $(this).hover(function () {
        $(this).find(".share-to").css("display","inline-block")
    },function(){
        $(this).find(".share-to").css("display","none")
    })
});

//点击图片放大缩小
$(".item-img").each(function () {
    $(this).click(function () {
        if($(this).css('width')==='60px'){
            $(this).css({width:204,height:204,cursor:'-webkit-zoom-out','z-index':991})
        }
        else {
            $(this).css({width:60,height:60,cursor:'-webkit-zoom-in','z-index':990})
        }
    })
});

//点赞评论显示亮度
/* 点赞 */
var flag;
//鼠标移动
$(".dig-a").each(function () {
    $(this).hover(function () {
        if(($(this).find(".icon-dig").css("background-position"))==="0px -20px"){
            flag=true;
        }else{
            flag=false
        }
        $(this).find(".icon-dig").css("background-position","0 -20px");
        $(this).find(".b").css("color","rgb(154,221,127)");
    },function () {
        if(!flag){
            $(this).find(".icon-dig").css("background-position","0 -40px");
            $(this).find(".b").css("color","rgb(153,174,203)");
        }
    });
});
//点击
$(".dig-a").each(function () {
    $(this).click(function () {
        var x = $(this).find(".icon-dig+b").html();
        var count = parseInt(x);
        if(flag){  //赞减一
            $(this).find(".icon-dig").css("background-position","0 -40px");
            $(this).find(".b").css("color","rgb(153,174,203)");
            flag = false;
            count--;
            $(this).find(".fade-span-1").fadeIn(500).animate({left:'50px',bottom:'50px'},1000).fadeOut(50).animate({"left":"20px","bottom":"20px"});
        }else if(!flag){  // 赞加一
            $(this).find(".icon-dig").css("background-position","0 -20px");
            $(this).find(".b").css("color","rgb(154,221,127)");
            flag = true;
            count++;
            $(this).find(".fade-span").fadeIn(500).animate({left:'50px',bottom:'50px'},1000).fadeOut(50).animate({"left":"20px","bottom":"20px"});
        }
        $(this).find(".icon-dig+b").html(count);
    })
});

/* 评论 */
//鼠标移动
$(".discus-a").each(function () {
    $(this).hover(function () {
        $(this).find(".icon-discus").css("background-position","0 -60px")
    },function () {
        $(this).find(".icon-discus").css("background-position","0 -100px")
    });
    // 点击展开评论列表
    $(this).click(function () {
        var comment_box_area = $(this).parent(".part-2").siblings(".comment-box-area")
        comment_box_area.toggle();
        // if(comment_box_area.css("display")==='block'){
        //     var time = setTimeout(function () {
        //         $(".body-content").click(function () {
        //             comment_box_area.css("display","none")
        //         })
        //     },200);
        // }

    })
});
// x 关闭评论列表
$(".close-comment").each(function () {
    $(this).click(function () {
        $(this).parent(".comment-box-area").css("display","none")
    })
});

/* 收藏 */
$(".collect-a").each(function () {
    //鼠标移动
    var flag;
    $(this).hover(function () {
        if(($(this).children(".icon-collect").css("background-position"))==="0px -140px"){
            flag=true;  //图标亮
        }else{
            flag=false  //图标暗
        }
        $(this).children(".icon-collect").css("background-position","0 -140px");
        //点击
        $(this).click(function () {
            if(flag){  //图标变暗
                $(this).children(".icon-collect").css("background-position","0 -160px");
                flag = false;
            }else {  //图标变亮
                $(this).children(".icon-collect").css("background-position","0 -140px");
                flag = true;
            }
        })
    },function () {
        if(!flag){
            $(this).children(".icon-collect").css("background-position","0 -160px")
        }else {}
    });
});

/*评论*/
$(".repeat").each(function () {
    $(this).click(function () {
        $(this).removeClass("repeat").addClass("repeat-on")
    });
});
$(".repeat").each(function () {
    $(this).blur(function () {
        $(this).removeClass("repeat-on").addClass("repeat")
    });
})
/* 提交评论*/
$(".enter-pinglun").each(function () {
    $(this).click(function () {
        var content = $(this).parent('.enter-repeat').siblings('.comment-text').children('.repeat').val()
        var $uL = $(this).parent('.enter-repeat').parent('.enter-comment').siblings('.u1')
        if(content){
            $('<li>'+content+'</li>').appendTo($uL).addClass("l1");
            $('<hr>').appendTo($uL).addClass("hh");
            var b = $(this).parent().parent().parent().parent().parent().find('.icon-discus').siblings('b')
            var comment_num = parseInt(b.html()) + 1;
            b.html(comment_num);
            $(this).parent('.enter-repeat').siblings('.comment-text').children('.repeat').val(' ')
        }
    });
});
//发帖模态框
$(".publish-btn").first().click(function () {
    $(".publish").first().css('display','block')
});
$(".pb-close").first().click(function () {
    $(".publish").first().css('display','none')
});

$(".public-span").each(function () {
    $(this).click(function () {
        $(this).addClass('public-active').siblings('span').removeClass('public-active')
    })
});

$("#publish-news").click(function () {
    //获取用户输入
    var url = $('.url-input').val();
    var title = $(".title-input").val();
    var summary = $(".summary-input").val();
    var classfy = $(".public-active").html()

    if(url && title){
        $(".item").last().clone(true).insertBefore($(".item").first());
        var obj = $(".item").first().css('display','block');
        obj.find('.part-1 a').first().html(title).prop('href',url);
        obj.find('.content-source').first().html('-'+url);
        obj.find('.content-kind').first().html(classfy);
        obj.find('.summary').first().html(summary);

        //清除数据,关闭模态框
        $('.url-input').val('');
        $(".title-input").val('');
        $(".summary-input").val('');
        $(".publish").first().css('display','none')
    }else {
        alert('请输入链接和标题')
    }
});

//发布信息 选项卡
$(".tb").each(function () {
    $(this).click(function () {
        $(this).addClass('pub-active').siblings().removeClass('pub-active')
        $(".main-content").children().eq($(this).index()).show().siblings().hide()
    })
});

$(".nav-a").each(function () {
    $(this).click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
});
$(".nav-top-left").first().children().each(function () {
    $(this).click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
});
$(".nav-top-mid").first().children().each(function () {
    $(this).click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    })
});

//返回顶部
$(function(){
    var h = $('.scroll-top').height();


    $(document).scroll(function(){
        var scollTp = $(document).scrollTop();

        if(h<scollTp){
            $('.scroll-top').css('display','block');
        }else{
            $('.scroll-top').css('display','none');
        }
    })
})
