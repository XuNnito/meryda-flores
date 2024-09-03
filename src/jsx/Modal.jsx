import React from 'react';
import '../css/Modal.css';

const Modal = ({ product, onClose, onNext, onPrevious }) => {
    if (!product) return null;

    const whatsappUrl = `https://wa.me/529618137702?text=Hola,%20quiero%20más%20información%20sobre%20el%20producto%20${encodeURIComponent(product.name)}.%20Gracias!%0A%0A https:/${encodeURIComponent(product.img)}`;

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-img-container">
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                        <span className="closetooltip">Cerrar</span>
                    </button>
                    <button className="prev-btn" onClick={onPrevious}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <img src={product.img} alt={product.name} className="modal-img" />
                    <button className="next-btn" onClick={onNext}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    <div className="whatsapp-container">
                        <a href={whatsappUrl} className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp whatsapp-icon"></i>
                        </a>
                        <span className="tooltip">¡Envía un mensaje para más detalles!</span>
                    </div>
                </div>
                <h3>{product.name}</h3>
                <p>
                    <span className="precio-original">${product.originalPrice}.00</span>
                    <span className="precio-descuento">${product.discountPrice}.00</span>
                </p>
            </div>
        </div>
    );
};

export default Modal;
