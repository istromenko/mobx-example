import { observer } from "mobx-react-lite";
import nameStore from "./store";
import React from "react";

const Header: React.FC = observer(() => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        nameStore.changeName(event.target.value);
    };

    return (
        <header style={{ display: 'flex', justifyContent: 'center' }}>
            <input
                type="text"
                value={nameStore.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={{ padding: '10px', fontSize: '16px' }}
            />
        </header>
    );
});

export default Header;