function getDefinitionHTML(definition) {
    var $result = $('<section />').addClass('slide');
    var $div = $('<div />').appendTo($result);
    $('<h2>').text(definition.term).appendTo($div);
    $('<h3>').text(definition.definition).appendTo($div);
    return [$result];
}


function getQuestionHTML(definition) {
    return getDefinitionHTML({term: definition.term, definition: '?'})
}

function getSlideHTML(definition) {
    return [getQuestionHTML(definition), getDefinitionHTML(definition)];
}

function loadShower() {
    $('<script />').attr('type', 'text/javascript').attr('src', 'shower.js').appendTo($('head'));
}

function startSlides(data) {
    $('.slides').append(_.flatten(data.map(getSlideHTML)));
    loadShower();
    debugger
}

$(function () {
    $.getJSON('vocabulary.json', startSlides);
});

