import React from 'react';

const Option = (props) => {
    return (
        <div id={props.count} className="options">
            <div className="option-text">{props.count}. {props.option}</div>
            <button
                className="button button_link"
                onClick={(e) => {
                    props.handleDeleteOption(props.option)
                }}
            > Remove option
            </button>
        </div>
    );
}

export default Option;
