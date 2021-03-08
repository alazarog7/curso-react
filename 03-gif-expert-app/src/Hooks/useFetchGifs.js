import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/GetGifs";

export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState({
        data:[],
        loading: true
    });

    console.log(category);

    useEffect(()=>{
        getGifs(category).then((imgs)=> {
             setstate({
                 data: imgs,
                 loading: false
             });
         }).catch(()=>{
            setstate({
                data: [],
                loading: true
            });
         })
     },[category]);

    return state;

};