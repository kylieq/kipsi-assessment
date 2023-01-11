import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarNavigator from './components/sidebarNavigator';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<SidebarNavigator />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;