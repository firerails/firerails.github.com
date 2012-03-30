/** Data Interface */




function Data() {
    this.page = 1;
    this.name = '';
    this.theme = '';
    this.slides = [];
}




(function () {
    var stat = {};

    stat.getLength = function () {

        return this.slides.length;
    };

    stat.getMenu = function () {
        var result = [];
        $.each(this.slides, function (index, slideData) {
            result.push(slideData.content.title || '');
        })
        return result;
    };

    $.extend(Data.prototype, stat);
})();




(function () {
    var list = {};

    list.add = function (page, slideData) {
        var index = page - 1;

        this.slides.splice(index + 1, 0, slideData);

        if (this.page >= page) {
            this.page++;
        }

        this.saveDraft();
    };

    list.del = function (page) {
        var index = page - 1;
        var slideData = this.slides[index];
        var picture;

        if (slideData.layout == 'picture') {
            picture = slideData.content.picture;
            if (picture) {
                this.delFile(picture);
            }
        }

        this.slides.splice(index, 1);

        if (this.page > 1 && this.page >= page) {
            this.page--;
        }

        this.saveDraft();
    };

    list.set = function (page, slideData) {
        var index = page - 1;
        this.slides[index] = slideData;
        this.saveDraft();
    };

    list.get = function (page) {
        var index = page - 1;
        return this.slides[index];
    };

    $.extend(Data.prototype, list);
})();




(function () {
    var slide = {};

    slide.setContent = function (page, key, value) {
        var index = page - 1;
        var slideData = this.slides[index];
        var oldValue;
        var that = this;

        if (key == 'picture') {
            oldValue = slideData.content.picture;
            if (oldValue) {
                this.delFile(oldValue);
            }
            slideData.content[key] = value;
            this.saveDraft();
        }
        else {
            slideData.content[key] = value;
            this.saveDraft();
        }
    };

    slide.setPicture = function (file, handler) {
        var filename;
        var extname = {
                'image/jpeg': 'jpg',
                'image/png': 'png',
                'image/gif': 'gif'
            }[file.type] || 'dat';

        function getTimestamp() {
            var date = new Date;
            var timestamp = date.getFullYear() +
                    ('0' + date.getMonth()).replace(/0(..)/, '$1') +
                    ('0' + date.getDate()).replace(/0(..)/, '$1') +
                    ('0' + date.getHours()).replace(/0(..)/, '$1') +
                    ('0' + date.getMinutes()).replace(/0(..)/, '$1') +
                    ('0' + date.getSeconds()).replace(/0(..)/, '$1');
            return timestamp;
        }

        filename = getTimestamp() + '.' + extname;

        this.writeFile(filename, file, handler);
    }

    slide.setStyle = function (page, id, style) {
        var key = style.key;
        var value = style.value;
        var type = style.type;

        var index = page - 1;
        var slideData = this.slides[index];
        var map;

        if (!type) {
            id = id || 'slide';
            if (!slideData.style) {
                slideData.style = {};
            }
            if (!slideData.style[id]) {
                slideData.style[id] = {};
            }
            map = slideData.style[id];
        }

        if (type == 'mode') {
            key = key || 'content';
            if (!slideData.mode) {
                slideData.mode = {};
            }
            map = slideData.mode = value;
        }

        if (type == 'inline') {
            id = id || 'content';
            if (!slideData.inline) {
                slideData.inline = {};
            }
            if (!slideData.inline[id]) {
                slideData.inline[id] = {};
            }
            map = slideData.inline[id];
        }

        map[key] = value;
        this.saveDraft();
    };

    slide.setLayout = function (page, layout) {
        var index = page - 1;
        var slideData = this.slides[index];
        slideData.layout = layout;
        this.saveDraft();
    };

    $.extend(Data.prototype, slide);
})();




(function () {
    var io = {};
    var f = {};

    io.getLocal = function (key) {
        var value = localStorage.getItem(key);
        var object;

        if (!value) {
            return null;
        }

        try {
            return JSON.parse(value);
        }
        catch (e) {
            return null;
        }
    };

    io.setLocal = function (key, object) {
        var value;

        if (!object) {
            localStorage.removeItem(key);
        }

        try {
            value = JSON.stringify(object);
            localStorage.setItem(key, value);
        }
        catch (e) {
            localStorage.removeItem(key);
        }
    };

    io.searchLocal = function (keywords) {
        // TODO
    }

    $.extend(Data.prototype, io);

    f.readFile = function (url, handler) {
        window.webkitResolveLocalFileSystemURL(url,
                function(fileEntry) {
            fileEntry.file(function(file) {
                if (handler) {
                    handler(file);
                }
            });
        });
    };

    f.writeFile = function (filename, file, handler) {
        var that = this;
        that.fileSystem.root.getFile(filename,
                {create: true, exclusive: true},
                function (fileEntry) {
            fileEntry.createWriter(function (fileWriter) {
                var url = fileEntry.toURL();

                fileWriter.write(file);

                if (handler) {
                    setTimeout(function () {
                        handler(url);
                    }, 13);
                }
            });
        });
    };

    f.delFile = function (url, handler) {
        window.webkitResolveLocalFileSystemURL(url,
                function(fileEntry) {
            fileEntry.remove(function () {
                if (handler) {
                    handler();
                }
            });
        });
    };

    f.readFileData = function (file, handler) {
        var reader = new FileReader;
        reader.onload = function (event) {
            result = event.target.result;
            if (handler) {
                handler(result);
            }
        };
        reader.readAsDataURL(file);
    };

    if (window.webkitRequestFileSystem) {
        window.webkitRequestFileSystem(
                window.TEMPORARY,
                1024 * 1024, function (fs) {
            f.fileSystem = fs;
            $.extend(Data.prototype, f);
            Data.completed = true;
        });
    }
})();




(function () {
    var src = {};

    src.URL_LAYOUT = 'data/layout.json';
    src.URL_THEMES = 'data/themes.json';
    src.URL_DEFAULT = 'data/init-data.json';

    src.reqLayout = function (handler) {
        $.getJSON(this.URL_LAYOUT, handler);
    };

    src.reqThemes = function (handler) {
        $.getJSON(this.URL_THEMES, handler);
    };

    src.reqDefault = function (handler) {
        $.getJSON(this.URL_DEFAULT, handler);
    };

    src.openDraft = function (name) {

        return this.getLocal('ppt:' + name);
    };

    src.saveDraft = function () {
        var name = this.name;
        var data = {
            theme: this.theme,
            slides: this.slides
        };
        this.setLocal('ppt:' + name, data);
    };

    src.delDraft = function (name) {

        this.setLocal('ppt:' + name, '');
    };

    src.getDraftList = function () {
        // TODO
    };

    src.openWork = function () {
        // TODO
    };

    src.saveWork = function () {
        // TODO
    };

    src.delWork = function () {
        // TODO
    };

    src.reqWorkList = function () {
        // TODO
    };

    $.extend(Data.prototype, src);
})();




