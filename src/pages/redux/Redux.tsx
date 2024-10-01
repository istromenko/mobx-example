import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

import { Provider } from 'react-redux';
import store from './store';

const Redux = () => {
    return (
        <Provider store={store}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>Redux</div>
                <Header/>
                <Footer/>
            </div>
        </Provider>
    )
};

export default Redux;