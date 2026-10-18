import { useState, useEffect } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    // const [color, setColor] = useState('black');
    // const [status , setStatus] = useState(true);

    // useEffect(function arrow, array)

    useEffect(() => {
        console.log('Component mounted');
    }, []);

    useEffect(() => {
        console.log('Count updated:', count);
    }, [count]);

    const handleAdd = () => {
        setCount(count + 1);  
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}