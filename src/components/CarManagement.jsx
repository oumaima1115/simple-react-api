import {
    useState,
    useEffect
} from "react";
// import data from "./data.json";


// Child Component
function CarCard(props) {
    return (
        <div className="card p-3 mb-3 shadow">
            <h4>{props.brand}</h4>

            <p>Color : {props.color}</p>

            <p>
                Engine :
                {props.isElectric ? (
                    <span className="text-success"> Electric</span>
                ) : (
                    <span className="text-danger"> Diesel</span>
                )}
            </p>

            <button
                className="btn btn-secondary mb-2"
                onClick={() => props.changeEngine(props.id)}
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
    );
}

// Parent Component
export default function CarManagment() {

    // useState Hook
    const [cars, setCars] = useState([
        {
            id: 1,
            brand: "BMW",
            color: "Black",
            isElectric: true,
        },
        {
            id: 2,
            brand: "Mercedes",
            color: "White",
            isElectric: false,
        },
    ]);

    // const [cars, setCars] = useState([]);
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");

    // useEffect(() => {
    //     setCars(data);
    // }, []);

    useEffect(() => {
        console.log("Nombre total de voitures :", cars.length);
        console.log("Liste des voitures :", cars);
    }, [cars]);

    // Add car
    const addCar = () => {
        const newCar = {
            id: Date.now(),
            brand: brand,
            color: color,
            isElectric: true,
        };

        setCars([...cars, newCar]);

        setBrand("");
        setColor("");
    };

    // Delete car
    const deleteCar = (id) => {
        const updatedCars = cars.filter((car) => car.id !== id);

        setCars(updatedCars);
    };

    // Update engine type
    const updateEngine = (id) => {
        const updatedCars = cars.map((car) => {
            if (car.id === id) {
                return {
                    ...car,
                    isElectric: !car.isElectric,
                };
            }

            return car;
        });

        setCars(updatedCars);
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

                <button
                    className="btn btn-success"
                    onClick={addCar}
                >
                    Add Car
                </button>
            </div>

            {/* Car List */}
            {cars.map((car) => (
                <CarCard
                    key={car.id}
                    id={car.id}
                    brand={car.brand}
                    color={car.color}
                    isElectric={car.isElectric}
                    changeEngine={updateEngine}
                    deleteCar={deleteCar}
                />
            ))}

        </div>
    );
}

