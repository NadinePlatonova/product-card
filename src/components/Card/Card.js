import React from "react";
import image from "../../images/product.jpg"
import './Card.css'

function Card(props) {
    return (
        <article className="card">
            <img className="card__image" src={image} alt="Product" />
            <div className="card__content">
                <div className="card__info">
                    <h1 className="card__header">{props.title}</h1>
                    <div className="card__description">
                        <p className="card__description-header">{props.description}</p>
                        <p className="card__description-price">{props.price}</p>
                    </div>
                    <ul className="card__tags">
                        <li className="card__tag"><p className="card__tag-text">Fresh</p></li>
                        <li className="card__tag"><p className="card__tag-text">Healthy food</p></li>
                    </ul>
                </div>
                
                <div className="card__location">
                    <div className="card__location-img"></div>
                    <p className="card__location-text">{props.location}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;