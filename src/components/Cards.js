import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Cards.css'


function RenderDestinationItem ({card, onClick}) {
    return (
        <>
        <div className="card-item">
            <div className="card-title"><span>{card.name}</span></div>
            <div className="card-image"><img src={card.image} alt="image" /></div>
            <div className="card-time"><h3>{card.time}</h3> </div>
            <div className="card-subtext"><span>{card.subtext}</span></div>
            <div className="low-buttons">
                <div className="teams"><span>{card.teams}</span><br/>Teams</div>
                <div className="budget"><span>{card.budget}</span><br/>Budget</div>
                <div className="success"><span>{card.success}</span><br/>Success</div>
            </div>
        </div>
      
        </>
    );
}

    const Cards = (props) => {

        const card = props.cards.map((card) => {
            return (
                <div className=""  key={card.id}>
                    <RenderDestinationItem card={card} onClick={props.onClick} />
                </div>
            );
        });

        return (
            <>
           
            <div className='cards__items'>
        
              {card}
            
            </div>
            
            </>
            
        );
    }


export default Cards
