import React, { useState } from 'react';
import './index.css'
import ListItem from './demoItemDetail4';

const ListComponent4 = ({ create, read, update, destroy }) => {
    const [clicked, setClicked] = useState('');
    return (
        <div>
            <hl>点击按钮为： {clicked}</hl>
            <ul>
                <ListItem title="Create" action={create} setClicked={setClicked} />
                <ListItem title="Read" action={read} setClicked={setClicked} />
                <ListItem title="Update" action={update} setClicked={setClicked} />
                <ListItem title="Destroy" action={destroy} setClicked={setClicked} />
            </ul>
        </div>
    );
};
export default ListComponent4;