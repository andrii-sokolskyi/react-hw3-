import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCharacter } from '../../actions';
import './character-page.scss';



const mapStateToProps = (state: any) => ({
    ...state
});

const mapDispatchToProps = (dispatch: any) => ({
    callGetCharacterAction: (id: number | string) => dispatch(getCharacter(id))
})

const CharacterPage = (props: any) => {
    const id = props.match.params.id;
    const character = props.characterReducer[id];

    useEffect(() => {
        props.callGetCharacterAction(id);
    }, []);

    if (!character) {
        return (
            <span>Is loading</span>
        )
    }

    return (
        <div className="character-info">
            <h2>{character.name}</h2>
            <dl>
                <dt>born:</dt>
                <dd>{character.born}</dd>
                <dt>died:</dt>
                <dd>{character.died}</dd>
                <dt>gender: </dt>
                <dd>{character.gender}</dd>
                <dt>aliases:</dt>
                <dd>
                    <ul>
                        {character.aliases.map((alias: string, index: number) => {
                            return (
                                <li key={index}>{alias}</li>
                            )
                        })}
                    </ul>
                </dd>
            </dl>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);