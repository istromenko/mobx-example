
import { useDispatch, useSelector } from 'react-redux';
import { RootState, changeName } from './store';

const Header = () => {
    const dispatch = useDispatch();
    const name = useSelector((state: RootState) => state.name.name);

    const handleChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    return (
        <header style={{ display: 'flex', justifyContent: 'center' }}>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={{ padding: '10px', fontSize: '16px' }}
            />
        </header>
    );
};

export default Header;
