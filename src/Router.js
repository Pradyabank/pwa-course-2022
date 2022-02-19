import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import App from './App.js';
import Profile from './Profile.js';
import TEST from './TEST';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/>} />
                <Route path="/profile" element={ <Profile/>} />
                <Route path="/Test" element={ <TEST/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;