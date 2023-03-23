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

const Character = ({ data }) => {
    const characterNames = data.map((el) => <h2>{el.name}</h2>)

    return <CharacterWrapper>{characterNames}</CharacterWrapper>;
}

export default Character;