'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// React is global object
// render must be declared with Component

// Props vs State
// Similarity for both:
// An object
// Can be used when rendering
// Changes (from above) cause re-renders
// Difference Props
// Comes from above
// Can't be changed by component itself
// Difference State
// Defined in component it self
// Can be changed by component it self

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.removeOptions = _this.removeOptions.bind(_this);
        _this.pickRandomOption = _this.pickRandomOption.bind(_this);
        _this.submitForm = _this.submitForm.bind(_this);
        _this.state = {
            options: props.options,
            randomOption: ''
        };
        return _this;
    }

    // Remove all options


    _createClass(IndecisionApp, [{
        key: 'removeOptions',
        value: function removeOptions() {
            this.setState(function (prevState) {
                return { options: prevState.options = [] };
            });
        }

        // Pick an random element form options 

    }, {
        key: 'pickRandomOption',
        value: function pickRandomOption() {
            var _this2 = this;

            var randomNumber = Math.floor(Math.random() * this.state.options.length);
            this.setState(function (prevState) {
                return { randomOption: prevState.randomOption = _this2.state.options[randomNumber] };
            });
        }

        // Add option

    }, {
        key: 'submitForm',
        value: function submitForm(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.includes(option)) {
                return 'This option already exists';
            }

            this.setState(function (prevState) {
                // return prevState.options.push(option)
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // In React props are like attributes in HTML
            var title = 'Indecision App';
            var subTitle = 'Give your life in the hand of computer.';

            return React.createElement(
                'div',
                null,
                React.createElement(Header
                // title={title} 
                , { subTitle: subTitle,
                    randomOption: this.state.randomOption }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length === 0,
                    pickRandomOption: this.pickRandomOption }),
                React.createElement(Options, {
                    options: this.state.options,
                    removeOptions: this.removeOptions }),
                React.createElement(AddOption, { submitForm: this.submitForm })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = { options: ['One', 'Two'] };

function Header(props) {
    return React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subTitle
        ),
        React.createElement(
            'p',
            null,
            props.randomOption
        )
    );
}
Header.defaultProps = { title: 'Default App Indecision' };

function Action(props) {
    return React.createElement(
        'button',
        {
            onClick: props.pickRandomOption,
            disabled: props.hasOptions
        },
        'Make a decision'
    );
}

function Options(props) {
    return React.createElement(
        'main',
        null,
        React.createElement(
            'button',
            { onClick: props.removeOptions },
            'Remove All'
        ),
        React.createElement(
            'ul',
            null,
            props.options.map(function (option, i) {
                return React.createElement(Option, { key: i, optionText: option });
            })
        )
    );
}

function Option(props) {
    return React.createElement(
        'li',
        null,
        props.optionText
    );
}

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.handleAddOption = _this3.handleAddOption.bind(_this3);
        _this3.state = { error: null };
        return _this3;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();

            // Get error back if returned
            var error = this.props.submitForm(option);
            e.target.elements.option.value = '';

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.props);
            return React.createElement(
                'footer',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: ['Hello', 'Salut'] }), document.getElementById('app'));
