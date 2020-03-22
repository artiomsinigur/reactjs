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

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.removeOptions = this.removeOptions.bind(this)
        this.pickRandomOption = this.pickRandomOption.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.state = {
            options: ['One', 'Two', 'Three'],
            randomOption: ''
        }
    }

    // Remove all options
    removeOptions() {
        this.setState((prevState) => {
            return { options: prevState.options = [] }
        })
    }

    // Pick an random element form options 
    pickRandomOption() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length)
        this.setState((prevState) => {
            return { randomOption: prevState.randomOption = this.state.options[randomNumber] }
        })
    }

    // Add option
    submitForm(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.includes(option)) {
            return 'This option already exists'
        }

        this.setState((prevState) => {
            // return prevState.options.push(option)
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    render() {
        // In React props are like attributes in HTML
        const title = 'Indecision App';
        const subTitle = 'Give your life in the hand of computer.';

        return (
            <div>
                <Header 
                    title={title} 
                    subTitle={subTitle} 
                    randomOption={this.state.randomOption} />
                <Action 
                    hasOptions={this.state.options.length === 0} 
                    pickRandomOption={this.pickRandomOption} />
                <Options 
                    options={this.state.options} 
                    removeOptions={this.removeOptions} />
                <AddOption submitForm={this.submitForm} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        // console.log(this.props.title);
        return (
            <header>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
                <p>{this.props.randomOption}</p>
            </header>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <button 
                onClick={this.props.pickRandomOption} 
                disabled={this.props.hasOptions}
            >
                Make a decision
            </button>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <main>
                {/* This way is expensive because we bind this object every time we render */}
                {/* <button onClick={this.removeAll.bind(this)}>Remove All</button> */}
                <button onClick={this.props.removeOptions}>Remove All</button>
                <ul>
                    {
                        this.props.options.map((option, i) => <Option key={i} optionText={option} />)
                    }
                </ul>
            </main>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>
                {this.props.optionText}
            </li>   
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = { error: null }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        // Get error back if returned
        const error = this.props.submitForm(option)
        e.target.elements.option.value = '';

        this.setState(() => ({ error }))
    }

    render() {
        console.log(this.props)
        return (
            <footer>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </footer>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));