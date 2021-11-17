import React from 'react';

export function PrintMessage(props) {
    return (
        <span>
            {props.message} rendered at
            <span> </span>
            {(new Date()).toTimeString()}
        </span>
    )
}
