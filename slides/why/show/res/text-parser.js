/** Text Parser */




function txt2Html(txt) {
    txt = txt.replace(/\&/ig, '&amp;').
            replace(/\</ig, '&lt;').
            replace(/\>/ig, '&gt;').
            replace(/ /ig, '&nbsp;').
            replace(/\t/ig, '&nbsp;&nbsp;&nbsp;&nbsp;');
    return txt;
}

/**
    \n -> <br />
    \n\n -> <p>
 */
function txt2P(txt) {
    var list = txt.split('\n');
    $.each(list, function (index, line) {
        list[index] = txt2Html(line);
    });
    return list.join('<br />');
}

/**
    ul > li > ul > li ...
 */
function txt2Ul(txt) {
    var list = txt.split('\n');
    $.each(list, function (index, line) {
        list[index] = txt2Html(line);
    });
    return '<ul><li>' + list.join('</li><li>') + '</li></ul>';
}

/**
    ol > li > ol > li ...
 */
function txt2Ol(txt) {
    var list = txt.split('\n');
    $.each(list, function (index, line) {
        list[index] = txt2Html(line);
    });
    return '<ol><li>' + list.join('</li><li>') + '</li></ol>';
}

/**
    <pre>
 */
function txt2Code(txt) {
    var list = txt.split('\n');
    $.each(list, function (index, line) {
        list[index] = txt2Html(line);
    });
    return '<pre>' + list.join('<br />') + '</pre>';
}

