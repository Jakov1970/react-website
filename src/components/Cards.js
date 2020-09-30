import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wraper">
                    <ul className="cards__item">
                        <CardItem src="images/img1.jpg" text="Explore this!" label='Adventure' path='/services'/>
                    </ul>
                </div>
            </div>
            <div className="cards__container">
                <div className="cards__wraper">
                    <ul className="cards__item">
                        <CardItem src="images/img2.jpg" text="Explore this!" label='Adventure' path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
