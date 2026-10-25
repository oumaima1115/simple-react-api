// src/components/Products.jsx
import { useState } from "react";
import "../style/Products.css";
import { Link } from "react-router-dom";

const productsData = [
    {
        id: 1,
        name: "Casque sans fil",
        price: 149.99,
        category: "Électronique",
        image: "https://via.placeholder.com/300x200",
    },
    {
        id: 2,
        name: "Souris gaming",
        price: 39.99,
        category: "Électronique",
        image: "https://via.placeholder.com/300x200",
    },
    {
        id: 3,
        name: "Clavier mécanique",
        price: 89.99,
        category: "Électronique",
        image: "https://via.placeholder.com/300x200",
    },
    {
        id: 4,
        name: "Chaise de bureau",
        price: 199.99,
        category: "Mobilier",
        image: "https://via.placeholder.com/300x200",
    },
];

function Products() {
    const [search, setSearch] = useState("");

    const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="products-page">
            <nav>
                <Link to="/">Home</Link>
            </nav>

            <h1>Nos produits</h1>

            <input
                type="text"
                className="search-input"
                placeholder="Rechercher un produit..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            <div className="products-grid">
                {filteredProducts.map((product) => (
                    <article key={product.id} className="product-card">
                        {/* <img src={product.image} alt={product.name} /> */}

                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.name} />
                        </Link>

                        <h2>{product.name}</h2>
                        <p className="category">{product.category}</p>
                        <p className="price">{product.price} €</p>

                        <button
                            onClick={() => alert(`${product.name} ajouté au panier !`)}
                        >
                            Ajouter au panier
                        </button>
                    </article>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <p>Aucun produit trouvé.</p>
            )}
        </main>
    );
}

export default Products;