import React, { useState } from 'react';
import './index.css'

const ListItem = ({ action, title, setClicked }) => {
    return (
        <li>
            <button
                onClick={() => {
                    setClicked(title);
                    action();
                }}
                className="my-button">
                {title}
            </button>
        </li>
    );
};
export default ListItem;