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
    options: [],
    languages: ['Anglais', 'Francais', 'Roumain', 'Russe'],
    subtitle: 'Sub title for everyone'
};

// Condition logic
var getLocation = function getLocation(location) {
    return location ? user.location : 'Unknown';
};

// If value is undefined, will not be rendered in DOM. So undefined, null and boolean are ignored by JSX
var displayItems = function displayItems(items) {
    if (items) {
        return items.map(function (item, i) {
            return React.createElement(
                'p',
                null,
                'Item ',
                React.createElement(
                    'strong',
                    null,
                    item
                )
            );
        });
    }
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    // const name = e.target.elements.name.value;

    user.options.push(option);
    e.target.elements.option.value = '';

    renderForm();
};

var removeAll = function removeAll() {
    user.options = [];
    renderForm();
};

var appRoute = document.getElementById('app');
var renderForm = function renderForm() {
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
        displayItems(user.languages),
        user.options.length,
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove options'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement('input', { type: 'text', name: 'name' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoute);
};
renderForm();
