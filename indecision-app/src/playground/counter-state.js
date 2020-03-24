class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.getRandom = this.getRandom.bind(this);
        // Every state we want to track
        this.state = {
            count: 0,
            random: 133512
        }
    }

    // Fetch data from localStorage
    componentDidMount() {
        const count = Number(localStorage.getItem('count'))
        if (!isNaN(count)) {
            this.setState(() => ({ count }))
        }
    }

    // Add count in localStorage
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    getRandom() {
        const generate = () => Math.floor(Math.random() * 100)
        
        this.setState((prevState) => {
            return { random: prevState.random = generate() }
        })
        console.log(this.state)
    }

    handleAddOne() {
        // Will not work. It change the object but not the state
        // this.state.count = this.state.count + 1;

        // This will
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
    }
    
    handleMinusOne() {
        this.setState((prevState) => {
            return { count: prevState.count - 1 }
        })
    }
    
    handleReset() {
        this.setState((prevState) => {
            return { count: prevState.count = 0 }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getRandom}>Random</button>
                <p>Random: {this.state.random}</p>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))