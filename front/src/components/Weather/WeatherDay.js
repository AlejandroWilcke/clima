import React from 'react';

export default (props) => {
    return(
        <div className="card border-secondary mb-1 col-2" style={{ display: 'inline-block', minWidth: "150px"}}>
            <div className="card-header" style={{textAlign: 'center'}}>{props.day}</div>
            <div className="card-body text-secondary">
                <p className="card-text">Tem: {props.temp       ? props.temp : "-"}</p>
                <p className="card-text">Min: {props.temp_min   ? props.temp_min : "-"}</p>
                <p className="card-text">Max: {props.temp_max   ? props.temp_max : "-"}</p>
                <p className="card-text">Hum: {props.humidity   ? props.humidity : "-"}</p>
            </div>
        </div>
    )
}