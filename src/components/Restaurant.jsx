import {Table} from '../components/Table';
import image1 from '../assets/images/images.jfif';

export const Restaurant = () => {
    const tables = [
        { 
            id: 1, 
            name: 'Restaurant 1', 
            address: '123 Main St', 
            price: 25.99, 
            image: image1 
        },
        { 
            id: 2, 
            name: 'Restaurant 2', 
            address: '456 Oak Ave', 
            price: 30.50, 
            image: image1 
        },
        { 
            id: 3, 
            name: 'Restaurant 3', 
            address: '789 Pine Rd', 
            price: 20.00, 
            image: image1 
        },
    ];
    const showTableDetails = (table) => {
        console.log(`Viewing details for ${table.name}`)
    };
    
    const show = { color: 'blue', fontSize: '20px' };
    return (
        <>
            <h1>Restaurant</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {tables.map((table) => (
                    <Table
                    key={table.id} image={table.image} name={table.name} address={table.address} price={table.price}
                    style={show} 
                    onViewDetails={showTableDetails} 
                    />
                ))}   
            </div>    
        </>
    );
};