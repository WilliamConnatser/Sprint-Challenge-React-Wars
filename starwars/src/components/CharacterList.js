import React from 'react';
import './CharacterList.css';
import Character from './Character';

export default props => {
    const characters = props.starwarsChars.map(function(char){
        return <Character char={char} key={char.name} />
    })
    return (
        <div className="character-list">
            <button className="character-list-navigation" name="previous" onClick={ props.pageChangeHandler }>
                Previous
            </button>
            <button className="character-list-navigation" name="next" onClick={ props.pageChangeHandler }>
                Next
            </button>
            { characters }
        </div>
    )
} 