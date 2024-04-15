import React, {useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import {startCountdown, decrementCountdown, changeTextColor} from '../actions/actions';
import ReactExplode from './Explosion';

const Dashboard = ({countdown, startCountdown, decrementCountdown, textColor, changeTextColor}) => {
    const randomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate a random hex color
    };
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const [intervalId, setIntervalId] = useState(null);
    const [exploded, setExploded] = useState(false);

    useEffect(() => {
        if (!isLoggedIn) {
            // Redirect to login page if not authenticated
            window.location.href = '/login';
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (exploded) {
            console.log('EXPLOTE IS ON');
            setTimeout(() => {
                window.location.href = "/last-page";
            }, 1000); // 1000 milliseconds = 1 second
        }

    }, [exploded]);

    if (countdown.countdown === 0) {
        clearInterval(intervalId);
    }


    useEffect(() => {
        startCountdown();
        const id = setInterval(() => {

            decrementCountdown();
        }, 1000);

        setIntervalId(id);

        return () => clearInterval(id);
    }, [startCountdown, decrementCountdown]);

    const triggerExplosion = () => {
        // clearInterval(intervalId);
        if (countdown.countdown > 10) {
            setExploded(true);
        }
    };


    return (
        <div>
            {exploded ? (
                <ReactExplode/>
            ) : (
                <div className="bg-white">


                    <div className="relative isolate px-6 pt-14 lg:px-8">
                        <div
                            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                            <div className="text-center">
                                <h1 style={{color: textColor}}
                                    className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Countdown: {countdown.countdown}
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Click on the left button to randomly change the countdown color and the right button
                                    to trigger an explosion
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <button
                                        onClick={() => changeTextColor(randomColor())}
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Change Color
                                    </button>
                                    <button
                                        onClick={triggerExplosion}
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Explode
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
const mapStateToProps = state => ({
    countdown: state.countdown,
    textColor: state.textColor.textColor
});

const mapDispatchToProps = {
    startCountdown,
    decrementCountdown,
    changeTextColor
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



