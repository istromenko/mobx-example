import React from 'react';
import { observer } from 'mobx-react';
import nameStore from './store.ts';

@observer
class Header extends React.Component {
    handleNameChange = (event) => {
        nameStore.setName(event.target.value);
    };

    render() {
        return (
            <header style={{display: 'flex', justifyContent: 'center'}}>
                <input
                    type="text"
                    value={nameStore.name}
                    onChange={this.handleNameChange}
                    placeholder="Enter your name"
                    style={{padding: '10px', fontSize: '16px'}}
                />
            </header>
        );
    }
}

export default Header;