import React from 'react'
import PropTypes from 'prop-types'

const Character = (object) => {
    return (
        <div data-test="component-character" className="card-container">
            <img data-test='char-img' src={object.imageUrl} alt={object.name} />
            <div data-test='character-body' className="card-body">
             <h1 data-test='char-name'>{object.name}</h1>
             <ul data-test='char-list'>
                <li data-test='char-birth'>Date of Birth: {object.birth}</li>
                <li data-test="char-death">Date of Death: {object.death}</li>
                <li data-test='char-race'>Race: {object.race}</li>
                <li data-test='char-realm'>Realm: {object.realm}</li>
                <li data-test="char-spouse">Spouse: {object.spouse}</li>
             </ul>
            </div>
        </div>
    );
};



export default Character;