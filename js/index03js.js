/**
 * Created by Administrator on 2017/5/9.
 */
$(document).ready(function () {
    getQuote();
    $("#new-quote").click(function () {
        changeContent();
    });
});

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

var famous = [
    {"famous_name": "叶圣陶", "famous_saying": "读书忌死读，死读钻牛角。"},
    {"famous_name": "宋·朱熹", "famous_saying": "不以一毫私利自蔽，不以一毫私欲自累"},
    {"famous_name": "鹦鹉坚定", "famous_saying": "不学杨柳随风摆，要学青松立山冈"},
    {"famous_name": "巴斯德", "famous_saying": "科学是没有国界的，因为它是属于全人类的财富，是照亮世界的火把，但是学者是属于祖国的。"},
    {"famous_name": "桑弗", "famous_saying": "不要以为机会会第二次敲门。"}
];

var position = 0;
var color = 0;
function getQuote() {
    // var url = "http://api.avatardata.cn/MingRenMingYan/Random?key=4dfe63dba9ee471d99b5bf665d7b5abf";
    // $.get(url, function (result) {
    //     console.log(result);
    // });
    var randomPosition = rnd(0, famous.length);
    while (position === randomPosition) {
        randomPosition = rnd(0, famous.length);
    }
    position = randomPosition;

    var randomColor = Math.floor(Math.random() * colors.length);
    while (color === randomColor) {
        randomColor = Math.floor(Math.random() * colors.length);
    }
    color = randomColor;
    position = randomPosition;
    $("html body").animate({
        backgroundColor: colors[randomColor],
        color: colors[randomColor]
    }, 1000);
    $("#new-quote").animate({
        backgroundColor: colors[randomColor]
    }, 1000);
    $(".btn-share").animate({
        backgroundColor: colors[randomColor]
    }, 1000);
    $(".animate-text").animate({
        opacity: 0
    }, 500, function () {
        $("#content").html(famous[position].famous_saying);
        $("#author").html(" - " + famous[position].famous_name);
        $(".animate-text").animate({
            opacity: 1
        }, 500);
    });
    console.log(colors[randomColor]);
}

function changeContent() {
    setTimeout(function () {
        getQuote();
    }, 2000);
}

function rnd(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}