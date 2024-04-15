import React, {useEffect} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Explosion from './components/Explosion';
import Login from './components/Login';
import './styles/tailwind.css'
import Dashboard from './components/Dashboard';
import LastPage from './components/LastPage';


const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Navbar/>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/explosion" element={<Explosion/>}/>
                        <Route path="/last-page" element={<LastPage/>}/>
                        <Route path="*" element={<Navigate to="/dashboard"/>}/>
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
