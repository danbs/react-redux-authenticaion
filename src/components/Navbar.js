import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


export default function Navbar() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (<header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <Link to="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                         alt=""/>
                </Link>
            </div>


            <div className=" lg:flex lg:flex-1 lg:justify-end">
                {isLoggedIn ? (
                    <p>Access Granted</p>
                ) : (
                    <p>Authenticate please</p>
                )}
            </div>
        </nav>

    </header>)
}