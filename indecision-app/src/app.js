// React is global object
// render must be declared with Component
class IndecisionApp extends React.Component {
    render() {
        // In React props are like attributes in HTML
        const title = 'Indecision App';
        const subTitle = 'Give your life in the hand of computer.';
        const options = ['One', 'Two', 'Three'];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
            </header>
        )
    }
}

class Action extends React.Component {
    makeDecision() {
        alert('Click');
    }

    render() {
        return (
            <button onClick={this.makeDecision}>Make a decision</button>
        )
    }
}

class Options extends React.Component {
    removeAll() {
        // this.props.options = [];
    }
    
    render() {
        return (
            <main>
                <button onClick={this.removeAll}>Remove All</button>
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
    submitForm(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            console.log(option)
        } 
    }

    render() {
        return (
            <footer>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </footer>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));