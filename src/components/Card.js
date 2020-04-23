import React from 'react';

const Card = (props) => {
    const {title, value, boxClass} = props;
    return(
        <div className="col-md-3" style={{marginBottom: '15px'}}>
            <div className={`box ${boxClass}`}>
                <div className="box-header">
                    <span className="left">{title}</span>

                </div>
                <div className="box-content">
                    <h2 className="title">{value}</h2>
                    <h5>&nbsp;</h5>
                </div>
            </div>
        </div>
    )
}

export default Card;