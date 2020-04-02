import React from 'react'
import Options from './Options'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: null,
        showModal: false
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
    removeOptions = () => {
        this.setState((prevState) => {
            return { options: prevState.options = [] }
        })
    }

    // Remove one option
    removeOption = (option) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter(elm => elm !== option)
            }
        })
    }

    // Pick an random element form options 
    pickRandomOption = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length)
        this.setState(() => ({ 
            selectedOption: this.state.options[randomNumber],
            showModal: true 
        }))
    }

    // Close modal
    closeModal = () => {
        this.setState(() => ({ showModal: false }))
    }

    // Add option
    submitForm = (option) => {
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
                />
                <Action 
                    hasOptions={this.state.options.length === 0}
                    pickRandomOption={this.pickRandomOption}
                />
                <main>
                    <div className='options'>
                        <div className='container'>
                            <Options
                                options={this.state.options} 
                                removeOptions={this.removeOptions} 
                                removeOption={this.removeOption}
                            />
                            <AddOption submitForm={this.submitForm} />
                        </div>
                    </div>
                </main>
                <OptionModal 
                    selectedOption={this.state.selectedOption} 
                    showModal={this.state.showModal}
                    closeModal={this.closeModal}
                />
            </div>
        )
    }
}