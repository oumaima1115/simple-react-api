import '../style/Pricing.css'

const Header = () => {
    return (
        <>
            ....
        </>
    );
};


const Home = () => {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
                <p className="fs-5 text-body-secondary">
                    Quickly build an effective pricing table for your potential
                    customers with this Bootstrap example. It’s built with default
                    Bootstrap components and utilities with little customization.
                </p>
            </div>
            <main>
                <div className="row row-cols-3 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Free</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">
                                    $0<small className="text-body-secondary fw-light">/mo</small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>10 users included</li>
                                    <li>2 GB of storage</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                    Sign up for free
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">Pro</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">
                                    $15<small className="text-body-secondary fw-light">/mo</small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>20 users included</li>
                                    <li>10 GB of storage</li>
                                    <li>Priority email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm border-primary">
                            <div className="card-header py-3 text-bg-primary border-primary">
                                <h4 className="my-0 fw-normal">Enterprise</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">
                                    $29<small className="text-body-secondary fw-light">/mo</small>
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>30 users included</li>
                                    <li>15 GB of storage</li>
                                    <li>Phone and email support</li>
                                    <li>Help center access</li>
                                </ul>
                                <button type="button" className="w-100 btn btn-lg btn-primary">
                                    Contact us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="display-6 text-center mb-4">Compare plans</h2>
                <div className="table-responsive">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th style={{ width: "34%" }}></th>
                                <th style={{ width: "22%" }}>Free</th>
                                <th style={{ width: "22%" }}>Pro</th>
                                <th style={{ width: "22%" }}>Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Public</th>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Private</th>
                                <td></td>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Permissions</th>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Sharing</th>
                                <td></td>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Unlimited members</th>
                                <td></td>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Extra security</th>
                                <td></td>
                                <td></td>
                                <td>
                                    <i className="bi bi-check" aria-label="Included"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
};

export const Event = () => {

    const handleClick = () => { 
        console.log("The link was clicked.");
    };

    return (
        <a href="/" onClick={handleClick}>
            Click me
        </a>
    );
};


export const EventHandle = () => {

    const handleClick = (e) => { // the e parameter represents the event object that is passed to the event handler when the event occurs.
        e.preventDefault();
        // This line prevents the default behavior of the event, which in this case is 
        // navigating to the URL specified in the href attribute of the anchor tag. 
        // By calling e.preventDefault(), we can stop the browser from performing its 
        // default action and instead execute our custom logic defined in the event handler.
        console.log("The link was clicked.");
    };

    return (
        <a href="/" onClick={handleClick}>
            Click me
        </a>
    );
};

export const Counter = () => {
    let count = 0;

    const increase = () => {
        count = count + 1;
        console.log(count);
    };

    // useEffect(function arrow , array)
    
    useEffect(() => {
        console.log("Hello");
        return () => {
            console.log("Goodbye");
        }
    }, []); // the array is used to specify the dependencies of the effect.

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    );
};

import { useState } from "react";

export const CounterState = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red")
    const [name , setName] = useState("john")

    // useEffect(function arrow , array)

    useEffect(() => {
        console.log("hello")
        //load data
    })

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Timer...");
        }, 1000);
    }, []);

    const increase = () => {
        setCount(count + 1);
        console.log(count); //why this line show the previous value of count instead of the updated value?
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    );
};

import { useEffect } from "react";

export const CounterStateEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Updated count:", count);
    }, [count]);

    const increase = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    );
};

//Exemple9

export default Home;