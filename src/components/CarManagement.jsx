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
                className="btn btn-secondary mb-2"
                onClick={() => props.update(props.car)}
            >
                Change Car details
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
                    isElectric: !car.isElectric
                };
            }

            return car;
        });

        setCars(updatedCars);
    };

    const [selectedCar, setSelectedCar] = useState()

    const handleUpdateClick = (car) => {
        setSelectedCar({ ...car });
    }

    useEffect(() => {
        console.log("selected car is: ", selectedCar)
    }, [selectedCar])

    const handleUpdate = (id, updatedCar) => {
        setCars((previousCars) =>
            previousCars.map((car) =>
                car.id === id ? { ...car, ...updatedCar } : car
            )
        );

        setSelectedCar(null);
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
                    update={handleUpdateClick}
                    car={car}
                />
            ))}

            //form

            {selectedCar && (
                <FormCar
                    id={selectedCar.id}
                    car={selectedCar}
                    onUpdate={handleUpdate}
                />
            )}

        </div>
    );
}

const FormCar = ({ id, car, onUpdate }) => {

    const [form, setForm] = useState({
        brand: car.brand,
        color: car.color,
        isElectric: car.isElectric
    })

    function handleChange(event) {
        console.log("event :", event.target);

        const { name, value } = event.target;

        setForm((previousForm) => ({
            ...previousForm,
            [name]: value,
        }));
    }

    const handleReset = () => {
        setForm({
            brand: "",
            color: "",
            isElectric: false
        })
    }

    useEffect(() => {
        console.log("form : ", form)
    }, [form])

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdate(
            id,
            {
                brand: form.brand,
                color: form.color,
                isElectric: form.isElectric
            }
        )
    }

    return (
        <>
            <form>
                <label> Brand </label> <br />
                <input
                    type="text"
                    name="brand"
                    value={form.brand}
                    onChange={handleChange}
                /><br />
                <label> Color </label><br />
                <input
                    type="text"
                    name="color"
                    value={form.color}
                    onChange={handleChange}
                /><br />
                <label> Electric </label><br />
                <input
                    type="button"
                    value={form.isElectric ? "Electric" : "Diesel"}
                    onClick={() =>
                        setForm((previousForm) => ({
                            ...previousForm,
                            isElectric: !previousForm.isElectric,
                        }))
                    }
                /><br />
                <input
                    type="button"
                    value="Reset"
                    onClick={handleReset}
                /><br />

                <input
                    type="submit"
                    value="Submit"
                    onClick={handleSubmit}
                />
            </form>
        </>
    )
}
//CarManagment: selectedCar + logique
//carCard : button
//formCar: formulaire => call the logic