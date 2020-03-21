'use strict';

// JSX - JavaScript XML

// JSX expressions 
var user = {
    name: 'Artiom',
    age: 33,
    location: '',
    options: [],
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
                'li',
                { key: i },
                item
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

var makeDecision = function makeDecision() {
    var randomNumber = Math.floor(Math.random() * user.options.length);
    alert(user.options[randomNumber]);
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
                getLocation(user.location)
            ),
            user.age && user.age >= 18 && React.createElement(
                'li',
                null,
                'Age: ',
                user.age
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        ),
        React.createElement(
            'button',
            { disabled: user.options.length === 0, onClick: makeDecision },
            'Make a decision'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove options'
        ),
        React.createElement(
            'ol',
            null,
            displayItems(user.options)
        )
    );

    ReactDOM.render(template, appRoute);
};
renderForm();
