import { observer } from "mobx-react";
import nameStore from "./store.ts";
import React from 'react';

@observer class Footer extends React.Component {
    render() {
        return (
            <footer style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
                <label style={{fontSize: '16px'}}>Name: {nameStore.name}</label>
            </footer>
        );
    }
};
export default Footer;