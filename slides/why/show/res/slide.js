/**
    @fileOverview
    root class
    @author Jinjiang<zhaojinjiang@yahoo.com.cn>
 */




/**
    幻灯片展示区域的构造器
    @constructor
 */
function Slide(mode) {
    var INPUT_PLACEHOLDER = (mode == 'editor') ? '在此输入文本' : '';
    var root = $('#main');
    var slide = $('#slide');
    var itemMap = {
        title: $('#slide-title'),
        subtitle: $('#slide-subtitle'),
        subtitle2: $('#slide-subtitle2'),
        content: $('#slide-content'),
        content2: $('#slide-content2'),
        picture: $('#slide-picture'),
        slide: slide
    };
    var that = this;
    var currentData = {};

    function setData(data) {
        currentData = {
            title: {style: {}},
            subtitle: {style: {}},
            subtitle2: {style: {}},
            content: {style: {}},
            content2: {style: {}},
            picture: {style: {}},
            slide: {style: {}}
        };

        $.each(data.content, function (key, value) {
            currentData[key].content = value;
        });
        if (data.style) {
            $.each(data.style, function (key, value) {
                if (!currentData[key]) {
                    return;
                }
                currentData[key].style = value;
            });
        }

        setLayout(data.layout);

        $.each(itemMap, function (key, item) {
            renderItem(key);
        });
    }

    function setItem(key, data) {
        currentData[key] = data;
        renderItem(key);
    }

    function setContent(key, content) {
        currentData[key].content = content;
        renderItem(key);
    }

    function setStyle(key, style) {
        currentData[key].style[style.key] = style.value;
        renderItem(key);
    }

    function renderItem(key) {
        key = key || 'slide';
        var item = itemMap[key];
        var data = currentData[key];
        var content = data.content;
        var style = data.style;

        item[0].style.cssText = '';
        item.data('-ppt-mode', '').data('-ppt-size', '');

        $.each(style, function (key, value) {
            if (key.match(/^-ppt-/)) {
                item.data(key, value);
            }
            else {
                item.css(key, value);
            }
        });

        if (key == 'slide' || key == 'picture') {
            renderFunc.picture(item, content);
        }
        else {
            renderFunc.text(item, content || INPUT_PLACEHOLDER);
        }
    }

    var renderFunc = {
        text: function (item, content) {
            var mode = item.data('-ppt-mode') || '';
            var size = item.data('-ppt-size') || '';
            var html = '';

            item.css({
                overflow: 'auto',
                height: '',
                width: '',
                '-webkit-transform': '',
                '-moz-transform': '',
                '-ms-transform': '',
                '-o-transform': ''
            });

            // mode
            switch (mode) {
                case 'ul':
                html = txt2Ul(content);
                break;
                case 'ol':
                html = txt2Ol(content);
                break;
                case 'code':
                html = txt2Code(content);
                item.css({
                    overflow: 'visible'
                });
                item.html(html);
                return;
                default:
                html = txt2P(content);
            }

            item.html(html);

            // size
            switch (size) {
                case 'auto-scroll':
                break;
                default:
                var width = item.width();
                var height = item.height();
                var prop = width / height;
                item.css('overflow', 'visible');
                item.css('height', 'auto');

                while (item.height() > 0 && (item.width() / item.height() < prop)) {
                    item.css('width', item.width() + 20 + 'px');
                }

                var scale = width / item.width();
                item.css('height', Math.ceil(height / scale + 'px'));
                var cssScale = 'scale(' + scale + ')';
                if (scale < 1) {
                    item.css('-webkit-transform', cssScale);
                    item.css('-moz-transform', cssScale);
                    item.css('-ms-transform', cssScale);
                    item.css('-o-transform', cssScale);
                }
            }
        },
        picture: function (item, content) {
            if (content) {
                item.css('backgroundImage', 'url(' + content + ')');
            }
            else {
                item.css('backgroundImage', '');
            }
        }
    }

    /**
        设置主题
     */
    function setTheme(design) {
        root.attr('data-design', design);
    }

    /**
        设置布局方式
     */
    function setLayout(layout, isAdjusting) {
        if (isAdjusting) {
            root.attr('data-status', 'adjusting');
            setTimeout(function () {
                root.removeAttr('data-status');
            }, 500);
        }
        slide.attr('data-layout', layout);
    }

    /**
        设置页码
     */
    function setPage(page) {
        slide.attr('data-page', page);
    }

    $.each(itemMap, function (key, item) {
        if (item == slide) {
            return;
        }
        item.click(function () {
            that.notify('focus', key);
        }).mouseover(function () {
            that.notify('hover', key);
        });
    });

    this.setData = setData;

    this.setItem = setItem;
    this.setContent = setContent;
    this.setStyle = setStyle;

    this.setTheme = setTheme;
    this.setLayout = setLayout;
    this.setPage = setPage;
}


reg(Slide);



