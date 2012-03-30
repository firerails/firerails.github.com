/**
    @fileOverview
    wrapper class
    @author Jinjiang<zhaojinjiang@yahoo.com.cn>
 */




/**
    幻灯片的界面框架构造器
    负责根据窗口的尺寸调节幻灯片中各个元素的位置和大小
    @constructor
 */
function Wrapper(mode) {
    var resizeTimer;
    var that = this;

    var main = $('#main');
    var wrapper = $('html');


    /**
        根据窗口的宽高计算出预览区域的大小、边距和缩放比例
        侧边栏的宽度不能小于一个固定的值
     */
    function doResize() {
        var wrapperWidth;
        var wrapperHeight;
        var slideWidth = 600;
        var slideHeigth = 450;

        wrapperWidth = wrapper.width();
        wrapperHeight = wrapper.height();

        var scale = Math.min(wrapperWidth / slideWidth, wrapperHeight / slideHeigth);
        scale = Math.ceil(scale * 100) / 100;

        var cssScale = 'scale(' + scale + ')';
        main.css('-webkit-transform', cssScale);
        main.css('-moz-transform', cssScale);
        main.css('-ms-transform', cssScale);
        main.css('-o-transform', cssScale);

        that.notify('resize');
    }

    /**
        控制界面调整动作触发的时机
        界面调整的动作会延时300毫秒执行，以减少窗口尺寸连续调整带来的资源浪费
     */
    function resizeHandler() {
        var timer = setTimeout(doResize, 300);
        clearTimeout(resizeTimer);
        resizeTimer = timer;
    }

    $(window).resize(resizeHandler);

    doResize();

    setTimeout(function () {
        main.show();
    }, 13);
}


reg(Wrapper);



