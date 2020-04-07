import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        this.setState(() => {
            return {
                selectedOption: option
            };
        });
    }

    handleAddOption = (value) => {
        if (!value) {
            return 'Enter a vaild option';
        } else if (this.state.options.indexOf(value) > -1) {
            return 'Option already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([value])
            };
        });
    }

    handleDeleteOption = (option)  =>{
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((value) => value !== option)
            };
        });
    }

    handleCloseModal = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        });
    }
    
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    }
}

export default IndecisionApp;