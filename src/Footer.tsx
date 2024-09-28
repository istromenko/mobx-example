import { observer } from "mobx-react-lite";
import nameStore from "./store";

const Footer = observer(() => {
    return (
        <footer style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <label style={{ fontSize: '16px' }}>Name: {nameStore.name}</label>
        </footer>
    );
});

export default Footer;