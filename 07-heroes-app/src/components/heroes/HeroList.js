import React, { useMemo } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import './hero.css';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])
    return (
        <div className="row" style={{padding:"70px"}}>
            {
                heroes.map( h => {
                                    const styles = ['secondary','success','danger','dark'];
                                    let iStyle = Math.floor(Math.random() * 3);
                                    return (
                                           <HeroCard key={h.id} hero={h} style={styles[iStyle]} ></HeroCard>
                                    )
                                 }

                                
                           )
            }
            
        </div>
    )
}
