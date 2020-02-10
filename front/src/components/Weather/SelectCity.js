import React from 'react';

export default (props) => {
    return (
        <select onChange={ e => props.handleChange(e.target.value) }>
            {props.cities.map( city => {
                return (
                    <option key={city} value={city}>{city}</option>
                )
            })}
        </select>
    )
}