import React, { useState } from 'react';
import './index.css'

const ListItemComponent = props => {
    return (
        <li>
            <button
                onClick={() => {
                    props.setClicked(props.title);
                    props.action()
                }}
                className="my-button">
                {props.title}
            </button>
        </li>
    );
};
export default ListItemComponent;