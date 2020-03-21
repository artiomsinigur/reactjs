'use strict';

var toggle = false;
var showIt = function showIt() {
    toggle = !toggle;
    renderApp();
};

function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: showIt },
            toggle ? 'Hide details' : 'Show details'
        ),
        React.createElement(
            'div',
            null,
            toggle && React.createElement(
                'p',
                null,
                'Some details about me'
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
}
renderApp();
