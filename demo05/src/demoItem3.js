import React, { useState } from 'react';
import './index.css'
import ListItemcomponent from './demoItemDetail3'

const ListComponent3 = props => {
    const [lastClickedButton, setLastClickedButton] = useState('');
    return(
    <div>
        <h3>点击按钮为： {lastClickedButton}</h3>
        <ul>
            <ListItemcomponent
                title="Create"
                action={props.creatSomething}
                setClicked={setLastClickedButton}
            />
            {/* <ListItemComponent
                title="Read"
                action={props.readSomething}
                setClicked={setLastClickedButton}
            />
            <ListItemComponent
                title="Update"
                action={props.updateSomething}
                seteClicked={setLastClickedButton}
            />
            <ListItemComponent
                title="Destroy"
                action={props.destroySomething}
                seteClicked={setLastClickedButton}
            /> */}
        </ul>
    </div>
    );
};
export default ListComponent3;