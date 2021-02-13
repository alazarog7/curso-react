import React, { useMemo } from 'react'
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroesScreen = () => {
    
    const {heroeId} = useParams();
    
    const history = useHistory();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    if( !hero ){
        return (
            <Redirect to="./"/>
        );
    }
    
    const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero;

    const handleReturn = ()=> {

        if(history.length == 0){
            history.push('./');
        } else {
            history.goBack();
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumgnail"/>
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego:</b> {alter_ego} </li>
                    <li className="list-group-item"> <b> Alter ego:</b> {publisher} </li>
                    <li className="list-group-item"> <b> Alter ego:</b> {first_appearance} </li>
                </ul>
                <h5>Characters</h5>
                <p>{ characters }</p>
                <button className="btn btn-outline-info" onClick={ handleReturn } >Regresar</button>
            </div>
        </div>
    )
}
