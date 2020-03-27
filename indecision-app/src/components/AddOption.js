import React from 'react'

export default class AddOption extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.state = { error: null }
    // }
    state = { error: null }

    handleAddOption = (e) => {
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