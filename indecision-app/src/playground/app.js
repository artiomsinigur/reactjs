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
        this.removeOption = this.removeOption.bind(this)
        this.pickRandomOption = this.pickRandomOption.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.state = {
            options: [],
            randomOption: ''
        }
    }

    componentDidMount() {
        const JSONoptions = localStorage.getItem('options')
        const options = JSON.parse(JSONoptions)
        if (options) {
            this.setState(() => ({ options }))
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const JSONoptions = JSON.stringify(this.state.options)
            localStorage.setItem('options', JSONoptions)
        }
    }
    
    componentWillUnmount() {
        console.log('will unmount')
    }

    // Remove all options
    removeOptions() {
        this.setState((prevState) => {
            return { options: prevState.options = [] }
        })
    }

    // Remove one option
    removeOption(option) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter(elm => elm !== option)
            }
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
            return { options: prevState.options.concat(option) }
        })
    }

    render() {
        // In React props are like attributes in HTML
        const title = 'Indecision App';
        const subTitle = 'Give your life in the hand of computer.';

        return (
            <div>
                <Header 
                    // title={title} 
                    subTitle={subTitle} 
                    randomOption={this.state.randomOption} />
                <Action 
                    hasOptions={this.state.options.length === 0} 
                    pickRandomOption={this.pickRandomOption} />
                <Options 
                    options={this.state.options} 
                    removeOptions={this.removeOptions} 
                    removeOption={this.removeOption}
                />
                <AddOption submitForm={this.submitForm} />
            </div>
        )
    }
}

function Header (props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <p>{props.randomOption}</p>
        </header>
    )
}
Header.defaultProps = { title: 'Default App Indecision' }

function Action (props) {
    return (
        <button 
            onClick={props.pickRandomOption} 
            disabled={props.hasOptions}
        >
            Make a decision
        </button>
    )
}

function Options (props) {
    return (
        <main>
            {/* This way is expensive because we bind this object every time we render */}
            {/* <button onClick={this.removeAll.bind(this)}>Remove All</button> */}
            <button onClick={props.removeOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add some options to get start!</p>}
            <ul>
                {
                    props.options.map((option, i) => (
                        <Option 
                            key={i} 
                            optionText={option}
                            removeOption={props.removeOption}
                        />
                    ))
                }
            </ul>
        </main>
    )
}

function Option (props) {
    return (
        <li>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.removeOption(props.optionText)
                }}
            >
                Remove
            </button>
        </li>   
    )
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
        this.setState(() => ({ error }))

        // Let value in the field if an error occurred
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
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