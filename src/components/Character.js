import React from 'react';
import styled from 'styled-components';

const CharacterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0 20% 0 20%;
    justify-content: space-between;
    color: orange;
`;

const Character = (props) => {
    const data = props.data;
    const characterNames = data.map((el) => {
        return (el.name);
    })
    const characterName = characterNames.map(element => {
        return element;
    });

    return (
        <CharacterWrapper>
            <h2>{characterName[0]}</h2> 
            <h2>{characterName[1]}</h2> 
            <h2>{characterName[2]}</h2> 
            <h2>{characterName[3]}</h2> 
            <h2>{characterName[4]}</h2> 
            <h2>{characterName[5]}</h2>      
        </CharacterWrapper>
    );
}

export default Character;
