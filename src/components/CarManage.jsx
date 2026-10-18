import { useState, useEffect} from "react";
// import data from "./data.json";


// Child Component
function CarCard(props) {
    console.log(props);
    
    return (
        <>
        </>
    );
}


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

    useEffect(() => {
        console.log("Total number of cars:", cars.length);
    }, []);

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
            isElectric: true,
        };

        setCars([...cars, newCar]);
        setBrand("");
        setColor("");
    };
    const deleteCar = (id) => {
    };

    const updateEngine = (id) => {
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

