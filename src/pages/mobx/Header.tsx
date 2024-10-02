import { observer } from "mobx-react";
import nameStore from "./store.ts";
import React from 'react';

@observer class Header extends React.Component {
    render() {
        const handleChange = (event) => {
            nameStore.changeName(event.target.value);
        };
        return (
            <header style={{display: 'flex', justifyContent: 'center'}}>
                <input
                    type="text"
                    value={nameStore.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    style={{padding: '10px', fontSize: '16px'}}
                />
            </header>
        )
    }
};
export default Header;