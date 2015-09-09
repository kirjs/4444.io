var data = [
    {
        title: 'Basic HTML Tags',
        className: 'tags',
        definitions: [
            {term: 'h1', definition: '<h1>Header 1</h1>'},
            {term: 'h2', definition: '<h2>Header 2</h2>'},
            {term: 'h3', definition: '<h3>Header 3</h3>'},
            {term: 'h4', definition: '<h4>Header 4</h4>'},
            {term: 'h5', definition: '<h5>Header 5</h5>'},
            {term: 'h6', definition: '<h6>Header 6</h6>'},
            {term: 'b', definition: '<b>bold</b>'},
            {term: 'i', definition: '<i>italic</i>'},
            {term: 'u', definition: '<u>underline</u>'},
            {term: 'p', definition: '<p>paragraph</p>'},
            {term: 'div', definition: '<p>division</p>'},
        ]
    },
    {
        title: 'CSS Properties',
        className: 'properties',
        definitions: [
            {term: 'width: 10px;'},
            {term: 'height: 10px;'},
            {term: 'color: red;'},
            {term: 'background: red;'},
            {term: 'font-size: 20px;'},
            {term: 'position: absolute'},
            {term: 'left: 10px'},
            {term: 'top: 10px'},
            {term: 'right: 10px'},
            {term: 'bottom: 10px'},
            {term: 'border: 1px red solid;'},
            {term: 'margin: 10px;'},
            {term: 'padding: 10px;'},
            {term: 'bottom: 10px;'},
            {term: 'border-radius: 5px;'}

        ]
    },
    {
        title: 'HTML List Tags',
        className: 'lists',
        definitions: [
            {term: 'ul', definition: 'Unordered list'},
            {term: 'ol', definition: 'Ordered list'},
            {term: 'li', definition: 'List item'}

        ]
    },
    {
        title: 'Characters',
        className: 'characters',
        definitions: [
            {term: '&lt;', definition: 'Opening Angle Bracket'},
            {term: '&gt;', definition: 'Closing Angle Bracket'},
            {term: '/', definition: 'Slash'},
            {term: '"', definition: 'Quotation marks'},
            {term: '.', definition: 'Period'},
            {term: '{', definition: 'Left curly bracket'},
            {term: '{', definition: 'Right curly bracket'},
            {term: ':', definition: 'Colon'},
            {term: ';', definition: 'Semicolon'},
            {term: '#', definition: 'Hashtag'}

        ]
    },
    {
        title: 'CSS Selectors',
        className: 'selectors',
        definitions: [
            {term: 'something', definition: 'TAG Selector'},
            {term: '#something', definition: 'ID Selector'},
            {term: '.something', definition: 'Class Selector'}
        ]
    },
    {
        title: 'Shortcuts',
        className: 'shortcuts',
        definitions: [
            {term: '⌘ + C', definition: 'Copy'},
            {term: '⌘ + V', definition: 'Paste'},
            {term: '⌘ + R', definition: 'Refresh The Browser'}
        ]
    }

];


var body = d3.select('.content');

var sections = body
    .selectAll('.section')
    .data(data);


sections.enter()
    .append('div')
    .attr('class', function (d) {
        return 'section ' + (d.className || '')
    });

sections
    .append('h2')
    .attr('class', 'title')
    .html(_.property('title'));

var definition = sections.selectAll('.definition')
    .data(_.property('definitions'));


var description = definition.enter()
    .append('div')
    .attr('class', 'description');


description.append('div')
    .attr('class', 'definition')
    .html(_.property('definition'));

description.append('div')
    .attr('class', 'term')
    .html(_.property('term'));


new Masonry('.content', {
    columnWidth: 100,
    itemSelector: '.section'
});




