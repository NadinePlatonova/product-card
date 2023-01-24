import React from "react";
import image from "../../images/product.png"
import './Card.css'

function Card() {
    return (
        <article className="card">
            <img className="card__image" src={image} alt="Product" />
            <div className="card__content">
                <p className="card__header">Fruits and vegetables are packed with essential vitamins, minerals, and nutrients that are essential for maintaining a healthy body and mind</p>
                <div className="card__description">
                    <p className="card__description-header">Fruits and vegetables</p>
                    <p className="card__description-price">$ 3.90</p>
                </div>
                <div className="card__tags">
                    <p className="tag__text">Fresh</p>
                    <div className="tags__circle"></div>
                    <p className="tag__text">Healthy food</p>
                </div>
                <div className="card__location">
                    <div className="card__location-img"></div>
                    <p className="card__location-text">Newport Beach, CA, USA</p>
                </div>
            </div>
        </article>
    )
}

export default Card;