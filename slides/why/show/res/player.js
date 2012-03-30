/**
    @fileOverview
    player script entrance
    @author Jinjiang<zhaojinjiang@yahoo.com.cn>
 */




function getNameFromLocation() {
	return 'res';
    var search = location.search.substr(1).split('&')
    for (var i in search) {
        if (search[i].substr(0, 5) == 'name=') {
            return search[i].substr(5);
        }
    }
    return '';
}


function playWork(name) {
    $.getJSON('res/res.json', function (data) {
        initData(name, data);
        preLoad();
    });
}

/**
    初始化幻灯片数据，并显示第一张幻灯片
 */
function initData(name, data) {
    if (!data) {
        slide.setData({
            layout: 'title',
            content: {
                title: 'Data Lost!'
            }
        });
        return;
    }

    window.data.page = 1;
    window.data.name = name;
    window.data.theme = data.theme;
    window.data.slides = data.slides;

   // var themeLink = $('<link rel="stylesheet" />').
     //       attr('href', 'themes/' + window.data.theme + '/style.css');

    //$('head').append(themeLink);
    slide.setTheme(window.data.theme);

    setTimeout(function () {
        initPage(1);
        loaded = true;
    }, 500);

    var slideData = window.data.get(1);

    if (slideData && slideData.content &&
            slideData.content.title) {
        document.title = slideData.content.title + ' - 在线幻灯片';
    }
    else {
        document.title = '在线幻灯片';
    }
}

function initPage(page) {
    window.data.page = page - 0;
    var slideData = window.data.get(page - 0);
    slide.setData(slideData);
}

/**
    显示后一页
 */
function next() {
    var currentPage = window.data.page;
    var pageCount = window.data.getLength();

    if (currentPage >= pageCount) {
        return;
    }
    initPage(currentPage + 1);
}

/**
    显示前一页
 */
function prev() {
    var currentPage = window.data.page;
    var pageCount = window.data.getLength();

    if (currentPage <= 1) {
        return;
    }
    initPage(currentPage - 1);
}

/**
    显示指定页码的幻灯片
 */
function go(page) {
    var currentPage = window.data.page;
    var pageCount = window.data.getLength();

    if (page >= 1 && page <= pageCount) {
        initPage(page);
    }
}


function preLoad() {
    $.each(window.data.slides, function (i, slide) {
        if (slide.content) {
            if (slide.content.slide) {
                (new Image).src = slide.content.slide;
            }
            if (slide.content.picture) {
                (new Image).src = slide.content.picture;
            }
        }
    });
}


/**
    绑定各种键盘操作
    包括左右方向键、回车键和G键
    其中左右方向键控制显示前一张、后一张幻灯片，回车键显示后一张幻灯片
    G键可以弹出对话框，跳转到指定页码的幻灯片
 */
function initKB() {
    $('html').keydown(function (event) {
        if (!loaded) {
            return;
        }
        switch (event.keyCode) {
        case 33:
            event.preventDefault();
            prev();
            break;
        case 34:
            event.preventDefault();
            next();
            break;
        case 35:
            event.preventDefault();
            go(window.data.getLength());
            break;
        case 36:
            event.preventDefault();
            go(1);
            break;
        case 37:
            event.preventDefault();
            prev();
            break;
        case 38:
            event.preventDefault();
            prev();
            break;
        case 39:
            event.preventDefault();
            next();
            break;
        case 40:
            event.preventDefault();
            next();
            break;
        case 13:
            event.preventDefault();
            next();
            break;
        case 71:
            event.preventDefault();
            go(prompt('请输入您想要到达的页码：', window.data.page));
            break;
        case 72:
            event.preventDefault();
            toggleHelper();
            break;
        case 229:
            event.preventDefault();
            alert('请切换输入法到英文输入状态，以保证\n快捷键可以生效。谢谢。');
            break;
        default:
            ;
        }
    });
}

/**
    支持触摸事件，进行翻页
    左滑动为后一张，右滑动为前一张
 */
function initTouch() {
    var startId;
    var startX;
    var startY;
    var moveX;
    var moveY;

    $('body').bind('touchstart', function (event) {
        var evt = event.originalEvent;
        if (evt.targetTouches.length == 1) {
            var target = evt.targetTouches[0];
            startId = target.identifier;
            startX = target.screenX;
            startY = target.screenY;
        }
        return false;
    });
    $('body').bind('touchmove', function (event) {
        if (!startId) {
            return false;
        }
        var evt = event.originalEvent;
        for (var i = 0; i < evt.targetTouches.length; i++) {
            var touch = evt.targetTouches[i];
            if (touch.identifier == startId) {
                moveX = touch.screenX;
                moveY = touch.screenY;
                $('#slide').css('webkitTransform', 'translateX(' + (moveX - startX) + 'px)');
                if (Math.abs(moveY - startY) > 30) {
                    startId = startX = startY = moveX = moveY = null;
                    $('#slide').css('webkitTransform', 'none');
                }
            }
        }
        return false;
    });
    $('body').bind('touchend', function (event) {
        if (!startId) {
            return false;
        }
        var endX = moveX;
        var endY = moveY;

        if (endX - startX > 50) {
            prev();
        }
        if (endX - startX < -50) {
            next();
        }

        startId = startX = startY = moveX = moveY = null;
        $('#slide').css('webkitTransform', 'none');
        return false;
    });
}


function toggleHelper() {
    var helper;
    var ul;
    var helperData;

    if (helperVisibility) {
        helper = $('#helper');
        helper.remove();
        helperVisibility = false;
    }
    else {
        helperData = {
            '回车': '后一个动画',
            '上': '前一个动画',
            '下': '后一个动画',
            '左': '前一个动画',
            '右': '后一个动画',
            'PageUp': '前往前一页',
            'PageDown': '前往后一页',
            'Home': '前往第一页',
            'End': '前往最后一页',
            'G': '快速翻到任意页',
            'H': '显示/隐藏帮助信息'
        };
        helper = $('<span id="helper"></span>').appendTo($('body'));
        ul = $('<ul></ul>').appendTo(helper);
        $.each(helperData, function (key, value) {
            $('<li></li>').text(key + ' → ' + value).appendTo(ul);
        });
        helperVisibility = true;
    }
}


var name = getNameFromLocation();

var wrapper = new Wrapper('player');
var slide = new Slide('player');
var data = new Data('player');;

var loaded = false;
var helperVisibility = false;


// 初始化幻灯片
if (name) {
    playWork(name);
    initKB();
}



