/**
 * Created by Administrator on 2017/4/27.
 */
$(document).ready(function () {

    $("#item_github")
        .mouseover(function () {
            changeBackground("#item_github", "#img_github", "github_purple.png");
        })
        .mouseout(function () {
            resumeBackground("#item_github", "#img_github", "github.png");
        });

    $("#item_weibo")
        .mouseover(function () {
            changeBackground("#item_weibo", "#img_weibo", "weibo_purple.png");
        })
        .mouseout(function () {
            resumeBackground("#item_weibo", "#img_weibo", "weibo.png");
        });

    $("#item_CSDN")
        .mouseover(function () {
            changeBackground("#item_CSDN", "#img_CSDN", "CSDN_purple.png");
        })
        .mouseout(function () {
            resumeBackground("#item_CSDN", "#img_CSDN", "CSDN.png");
        });
    changeTitleBackground("#nav-about");
    changeTitleBackground("#nav-portfolio");
    changeTitleBackground("#nav-contact");
    resumeTitleBackground("#nav-about");
    resumeTitleBackground("#nav-portfolio");
    resumeTitleBackground("#nav-contact");
    $("#nav-about").click(function () {
        console.log("执行了");
        $("body").animate({scrollTop: 0}, 500);
        return false;
    });
    $("#nav-portfolio").click(function () {
        console.log("执行了");
        $("body").animate({scrollTop: $('.content-items:nth-child(2)').offset().top - 50}, 500);
        return false;
    });
    $("#nav-contact").click(function () {
        console.log("执行了");
        $("body").animate({scrollTop: $('.content-items:nth-child(3)').offset().top - 50}, 500);
        return false;
    });

    changeNavCheckStatus("#nav-about", "#nav-portfolio", "#nav-contact");

    setEditChangedListener("#editText-name", "#edit-hint-name");
    setEditChangedListener("#editText-email", "#edit-hint-email");
    setEditChangedListener("#editText-phone", "#edit-hint-phone");
    setEditChangedListener("#editText-message", "#edit-hint-message");
});

function setEditChangedListener(id1, id2) {
    $(id1).keyup(function () {
        var value = $(id1).val();
        if (value) {
            $(id2)
                .animate({
                    opacity: 1,
                    marginTop: 0 + "px"
                }, 200);
        } else {
            $(id2)
                .animate({
                    opacity: 0,
                    marginTop: 20 + "px"
                }, 200);
        }
        console.log(value);
    }).focus(function () {
        $(id2).css("color", "#722872");
    }).blur(function () {
        $(id2).css("color", "#666");
    });
}

var position = 1;
$(window).scroll(function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var item2_top = $('.content-items:nth-child(2)').offset().top - 50;
    var item3_top = $('.content-items:nth-child(3)').offset().top - 50;
    if (t >= 0 && t < item2_top && position !== 1) {
        changeNavCheckStatus("#nav-about", "#nav-portfolio", "#nav-contact");
        position = 1;
    } else if (t >= item2_top && t < item3_top && position !== 2) {
        position = 2;
        changeNavCheckStatus("#nav-portfolio", "#nav-about", "#nav-contact");
    } else if (t >= item3_top && position !== 3) {
        changeNavCheckStatus("#nav-contact", "#nav-portfolio", "#nav-about");
        position = 3;
    }
});

function changeNavCheckStatus(nav1, nav2, nav3) {
    $(nav1).css("background-color", "#e7e7e7").css("color", "#722872");
    $(nav2).css("background-color", "transparent").css("color", "#777");
    $(nav3).css("background-color", "transparent").css("color", "#777");
}

function changeTitleBackground(selector) {
    $(selector)
        .mouseover(function () {
            $(selector).css("box-shadow", "0 2px 2px 1px rgba(0, 0, 0, 0.2)").css("color", "#555");
        });
}

function resumeTitleBackground(selector) {
    $(selector).mouseout(function () {
        $(selector).css("box-shadow", "0 0 0 0").css("color", "#777");
    });
}

function changeBackground(bigID, smallId, imgUrl) {
    $(bigID).css("background-color", "#ffffff");
    $(smallId).attr("src", imgUrl);
}

function resumeBackground(bigID, smallId, imgUrl) {
    $(bigID).css("background-color", "transparent");
    $(smallId).attr("src", imgUrl);
}
function mutation(arr) {
    var itemArr = arr[0].toLowerCase().split("");

    var n = 0;

    for(var i=0;i<arr[1].split("").length;i++){
        n = itemArr.indexOf(arr[1].split("")[i]);
        console.log(n);
        if(n===-1){
            console.log("已经return");
            return false;
        }
    }

    return n>=0;
}
