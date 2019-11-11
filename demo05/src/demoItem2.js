import React, { useState } from 'react';
import './index.css'

const ListComponent2 = props => {
    const [lastClickedButton, setLastClickedButton] = useState('');

    return (
        <div>
            <h3>点击按钮为： {lastClickedButton}</h3>
            <ul>
                <li>
                    <button
                        onClick={() => {
                            setLastClickedButton('Create');
                            props.createSomething(lastClickedButton);
                        }}
                        className="my-button">
                        Create
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setLastClickedButton('Read');
                            props.ReadSomething(lastClickedButton);
                        }}
                        className="my-button">
                        Read
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setLastClickedButton('Update');
                            props.updateSomething(lastClickedButton);
                        }}
                        className="my-button">
                        Update
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setLastClickedButton('Destroy');
                            props.DestroySomething(lastClickedButton);
                        }}
                        className="my-button">
                        Destroy
                    </button>
                </li>
            </ul>
        </div>
    );
};
export default ListComponent2;