import React, { useMemo } from 'react';
import queryString from 'query-string'
import { heroes } from "../../data/heroes";
import { useForm } from '../../hook/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const { q = '' } =queryString.parse(location.search);
   
    
    const [ formValues, handleInputChange, reset ] = useForm( {
        searchText:q
    } );

    const {searchText} = formValues;
    
    const heroesFiltered = useMemo(() => getHeroByName( searchText ), [q]);

    const submitForm = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
        console.log(searchText);

    }
    return (
        <div className="p-4">
            <h1>Search</h1>
            <hr/>

            <div className="row p-4">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit = {submitForm}>
                        <div className="mb-3">
                            <input 
                                   autoComplete="off"
                                   type="text" 
                                   placeholder="Ingresa el nombre" 
                                   className="form-control" 
                                   name="searchText" 
                                   value={searchText} 
                                   onChange={handleInputChange}/>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn mb-3 btn-block btn-outline-success"> Search... </button>
                        </div>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Result </h4>
                    <hr/>
                    <div className="row">
                        {
                            heroesFiltered.map( hero => {
                                return <HeroCard key={hero.id} hero={hero} style="success" />
                            })
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}
