'use strict';

// JSX - JavaScript XML

// JSX expressions 
var userName = 'Artiom';
var userAge = 33;
var userLocation = 'Montréal';
var user = {
    name: 'Artiom',
    age: 33,
    location: '',
    languages: ['Anglais', 'Francais', 'Roumain', 'Russe'],
    subtitle: 'Sub title for everyone'
};

// Condition logic
var getLocation = function getLocation(location) {
    return location ? user.location : 'Unknown';
};

// If value is undefined, will not be rendered in DOM. So undefined, null and boolean are ignored by JSX
var getLanguages = function getLanguages(languages) {
    if (languages) {
        return languages.map(function (item, i) {
            return React.createElement(
                'p',
                null,
                'Learned ',
                React.createElement(
                    'strong',
                    null,
                    item
                )
            );
        });
    }
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello ',
        user.name
    ),
    user.subtitle && React.createElement(
        'p',
        null,
        user.subtitle
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            user.age
        ),
        React.createElement(
            'li',
            null,
            getLocation(user.location)
        ),
        user.age && user.age >= 18 && React.createElement(
            'li',
            null,
            'Age: ',
            user.age
        )
    ),
    getLanguages(user.languages)
);

// TemplateTwo - Events and Attributes
var count = 0;
var i = 0;
var addOne = function addOne() {
    i++;
    console.log(i);
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        'Count ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    )
);

var appRoute = document.getElementById('app');
ReactDOM.render(templateTwo, appRoute);
