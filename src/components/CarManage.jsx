import { useState, useEffect } from "react";
import data from "./data.json";
// import bmw from "../assets/images/download.jfif";
// import mercedes from "../assets/images/mercedes.jfif";

// Child Component
function CarCard(props) {
    console.log("props == ", props);
    // background-color , "" => css 
    //backgroundColor ,  {{}} = >react
    const upadteHandler = () => props.changeEngine(props.id);

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.image} className="card-img-top" alt={props.brand} />
                <div className="card-body">
                    <h5 className="card-title">{props.brand}</h5>
                    <p className="card-text">{props.color}</p>
                    {/* consdition? trait1: trait2 */}
                    {
                        props.isElectric ? (
                            <a href="#" className="btn btn-primary"> Electric</a>
                        ) : (
                            <a href="#" className="btn btn-primary"> Diesel</a>
                        )
                    }
                    {/* two buttons */}
                    <button
                        className="btn btn-secondary mb-2"
                        onClick={upadteHandler}
                    >
                        Change Engine
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={() => props.deleteCar(props.id)}
                    >
                        Delete
                    </button>

                </div>
            </div>
        </>
    );
}

export default function CarManagment() {

    // useState Hook
    // const [cars, setCars] = useState([
    //     {
    //         id: 1,
    //         image: bmw,
    //         brand: "BMW",
    //         color: "Red",
    //         isElectric: true,
    //     },
    //     {
    //         id: 2,
    //         image: mercedes,
    //         brand: "Mercedes",
    //         color: "White",
    //         isElectric: false,
    //     },
    // ]);

    const [cars, setCars] = useState([]);
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        console.log("Total number of cars:", cars.length);
    }, []);

    useEffect(() => {
        setCars(data);
    }, [data])

    useEffect(() => {
        console.log("Total number of cars are changed:", cars.length);
        console.log("Cars list:", cars);
    }, [cars]);

    // Add car
    const addCar = () => {
        const newCar = {
            id: Date.now(),
            brand: brand,
            color: color,
            image: "https://hermascars.com/wp-content/uploads/2025/01/Mercedes_Brubus.jpg.webp",
            isElectric: true,
        };

        setCars([...cars, newCar]);
        setBrand("");
        setColor("");
    };

    const deleteCar = (id) => {
        setCars(cars.filter((car) => car.id !== id));
    };

    const updateEngine = (id) => {
        setCars(
            cars.map((car) =>
                car.id === id
                    ? { ...car, isElectric: !car.isElectric }
                    : car
            )
        );
    };

    return (
        <div className="container mt-5">

            <h1 className="mb-4">Car Management</h1>

            {/* Form */}
            <div className="card p-4 mb-4">

                <input
                    type="text"
                    placeholder="Car brand"
                    className="form-control mb-3"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Car color"
                    className="form-control mb-3"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />

                <button className="btn btn-success" onClick={addCar} >Add Car</button>

            </div>

            {/* Car List */}
            <div className="row felx flex-wrap gap-3">
                {cars.map((car) => (
                    <CarCard
                        key={car.id}
                        id={car.id}
                        brand={car.brand}
                        color={car.color}
                        isElectric={car.isElectric}
                        image={car.image}
                        changeEngine={updateEngine}
                        deleteCar={deleteCar}
                    />
                ))}
            </div>

        </div>
    );
}

