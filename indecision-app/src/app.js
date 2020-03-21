// React is global object
// render must be declared with Component
class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Indecision App</h1>
                <h2>Give your life in the hand of computer.</h2>
            </header>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <button>Make a decision</button>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Option component here   
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <footer>
                <form>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </footer>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
) 

ReactDOM.render(jsx, document.getElementById('app'));