
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Mobx from "./pages/mobx/Mobx.tsx";
import Redux from "./pages/redux/Redux.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <Link to="/mobx">
                        <button style={{ marginRight: '10px' }}>Mobx</button>
                    </Link>
                    <Link to="/redux">
                        <button>Redux</button>
                    </Link>
                </div>
                <div style={{ width: '100%', maxWidth: '600px' }}>
                    <Routes>
                        <Route path="/mobx" element={<Mobx />} />
                        <Route path="/redux" element={<Redux />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;