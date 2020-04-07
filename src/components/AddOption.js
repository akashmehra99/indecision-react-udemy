import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        let option = (e.target.elements.option.value).trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error: error
            };
        });
    }
    
    render() {
        return (
            <div>
                { this.state.error  && <div className="error-msg">
                    {this.state.error}
                </div>}
                <form onSubmit={this.handleAddOption}>
                    <div className="add-option">
                        <input type='text' placeholder='Add Option' name='option' />
                        <button type='submit' className="button">Add Option</button>
                    </div>
                </form>
            </div>
        );
    }
}