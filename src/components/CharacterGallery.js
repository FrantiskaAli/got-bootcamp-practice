import React from 'react'
import characterData from '../data/characterData.json'
import Character from '../components/Character'

const CharacterGallery = () => {
    const characterList =  Object.entries(characterData);
    characterList.map(character => <Character {...character} key={character.id} />)
    return (
        <div
            className='gallery-container' data-test="component-char-gallery" >
            {characterList }
        </div>
    );
};

export default CharacterGallery;