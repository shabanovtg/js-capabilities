'use strict';
var $body = $('body');

function addLinkToCopyText() {
    var bodyElement = document.getElementsByTagName('body')[0],
        selection = window.getSelection(),
        pageLink = "<p>Источник: <a href='"+document.location.href+"'>"+document.location.href+"</a> </p>",
        copyText = selection + pageLink,
        newDiv = document.createElement('div');
        newDiv.style.position = 'absolute';
        newDiv.style.left = '-99999px';
        bodyElement.appendChild(newDiv);
        newDiv.innerHTML = copyText;
        selection.selectAllChildren(newDiv);

    window.setTimeout( function() {
        bodyElement.removeChild(newDiv);
    }, 0);
}

document.oncopy = addLinkToCopyText;

$(function() {
    $body
        .on('copy', function(ev) {
            console.log('Скопировали тект:');
            console.log(window.getSelection().toString());
        })
        .on('cut', function(ev) {
            console.log('Вырезали текст:');
            console.log(window.getSelection().toString());
        });

    $(document).on('paste', function(ev) {
        console.log('Вставили текст:');
        var content;
        if (ev.originalEvent.clipboardData) {
            content = (ev.originalEvent || ev).clipboardData.getData('text/plain');
        } else if (window.clipboardData ){
            content = window.clipboardData.getData('Text');
            //if (window.getSelection)
            //    window.getSelection().getRangeAt(0).insertNode( document.createTextNode(content) );
        }
        console.log(content);
    });
});