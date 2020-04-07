import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3>Your Options</h3>
                <button
                    className="button button_link"
                    onClick={props.handleDeleteOptions}
                >
                    Remove all
                </button>
            </div>
            {
                props.options.map((option, index) => {
                    return (
                        <Option key={index+1} count={index + 1}
                            option={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    );
                })
            }
        </div>
    );
}

export default Options;