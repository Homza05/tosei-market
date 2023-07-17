import React from 'react';

const Advantage = props => {
    return (
                <div className="features-card">
                    <img src={props.src} alt="vector"/>
                    <h4 className="features-title">{props.name}</h4>
                    <p className="features-subtitle">{props.text}</p>
                </div>
    );
};
export default Advantage;