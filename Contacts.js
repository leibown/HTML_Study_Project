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
});

function changeTitleBackground(selector) {
    $(selector)
        .mouseover(function () {
            $(selector).css("box-shadow", "0 2px 2px 1px rgba(0, 0, 0, 0.2)").css("color","#555");
        });
}

function resumeTitleBackground(selector) {
    $(selector).mouseout(function () {
        $(selector).css("box-shadow", "0 0 0 0").css("color","#777");
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