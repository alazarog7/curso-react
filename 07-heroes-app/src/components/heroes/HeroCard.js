import React from 'react'
import { useHistory } from 'react-router-dom';

export const HeroCard = ({hero, style = 'light'}) => {
    const history = useHistory();
    return (
             <div className="col-lg-4 animate__animated animate__fadeInLeft" key={hero.id} >
                                                <div className={`card text-light bg-${style} mb-3`}  >
                                                    <div className="card-header">{ hero.superhero } <br/> <small>{hero.alter_ego}</small></div>
                                                    <div className="card-body">                    
                                                        <img src={`./assets/heroes/${hero.id}.jpg`} alt="" onClick={()=>{
                                                             history.push(`./hero/${hero.id}`);
                                                        }}/>
                                                        <p className="text-light">
                                                            {hero.first_appearance}
                                                        </p>
                                                        {
                                                            hero.characters.split(',').map(c => <span key={hero.id+c}className={`badge rounded-pill bg-dark`}>{c} </span>)
                                                        }

                                                        {/* <Link to={`./hero/${hero.id}`}> Mas ..</Link> */}
                                                    </div>
                                                </div>
             </div>
    )
}
