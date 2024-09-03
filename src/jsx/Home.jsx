import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSeedling, FaGift, FaEnvelope } from "react-icons/fa";
import '../css/Productos.css';
import '../css/Navbar.css';
import Flor1 from '../ramos/flor1.jpg';
import Flor2 from '../ramos/flor2.jpg';
import Flor3 from '../ramos/flor3.jpg';
import Flor4 from '../ramos/flor4.jpg'; 
import Flor5 from '../ramos/flor5.jpg';
import Flor6 from '../ramos/flor6.jpg'; 
import Modal from './Modal'; 
import Spinner from './Spinner'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="nav_logo">ROSAS ETERNaS</div>
            <div className={`nav_items ${isOpen ? "open" : ""}`}>
                <Link to="#inicio">
                    <FaHome className="nav_icon" /> Inicio
                </Link>
                <Link to="/productos">
                    <FaSeedling className="nav_icon" /> Nuestro Catálogo
                </Link>
                <Link to="/sucursales">
                    <FaGift className="nav_icon" /> Pedidos
                </Link>
                <Link to="/contacto">
                    <FaEnvelope className="nav_icon" /> Contacto
                </Link>
            </div>
            <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

const products = [
    { id: 1, name: 'Flor1', originalPrice: 300, discountPrice: 250, img: Flor1 },
    { id: 2, name: 'Flor2', originalPrice: 350, discountPrice: 300, img: Flor2 },
    { id: 3, name: 'Flor3', originalPrice: 400, discountPrice: 300, img: Flor3 },
    { id: 4, name: 'Flor4', originalPrice: 300, discountPrice: 200, img: Flor4 },
    { id: 5, name: 'Flor5', originalPrice: 200, discountPrice: 180, img: Flor5 },
    { id: 6, name: 'Flor6', originalPrice: 800, discountPrice: 600, img: Flor6 }
];

function Home() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const showNextProduct = () => {
        if (selectedProduct) {
            const currentIndex = products.findIndex(p => p.id === selectedProduct.id);
            const nextIndex = (currentIndex + 1) % products.length;
            setSelectedProduct(products[nextIndex]);
        }
    };

    const showPreviousProduct = () => {
        if (selectedProduct) {
            const currentIndex = products.findIndex(p => p.id === selectedProduct.id);
            const previousIndex = (currentIndex - 1 + products.length) % products.length;
            setSelectedProduct(products[previousIndex]);
        }
    };

    return (
        <div>
            {loading ? <Spinner /> : (
                <>
                    <Navbar />
                    <h2 style={{ textAlign: 'center', fontSize: '24px', marginTop: '50px' }}>Nuestros Productos</h2>
                    <section className="productos">
                        {products.map(product => (
                            <div key={product.id} className="producto"
                               onClick={() => openModal(product)} ><img src={product.img} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>
                                    <span className="precio-original">${product.originalPrice}.00</span>
                                    <span className="precio-descuento">${product.discountPrice}.00</span>
                                </p>
                                <button className="ver-producto-btn" onClick={() => openModal(product)}>Ver Producto</button>
                            </div>
                        ))}
                    </section>

                    <Modal
                        product={selectedProduct}
                        onClose={closeModal}
                        onNext={showNextProduct}
                        onPrevious={showPreviousProduct}
                    />
                </>
            )}
        </div>
    );
}

export default Home;
