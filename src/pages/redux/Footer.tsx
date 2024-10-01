import { useSelector } from 'react-redux';
import { RootState } from './store';

const Footer = () => {
    const name = useSelector((state: RootState) => state.name.name);

    return (
        <footer style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <label style={{ fontSize: '16px' }}>Name: {name}</label>
        </footer>
    );
};

export default Footer;