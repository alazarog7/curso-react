import React, { useState } from 'react'; // {} -> es para importar algo en especifico
import PropType from 'prop-types';

const CounterApp = ({value})=> {

    const [counter, setCounter] = useState(value);

    const inc = () => {
        setCounter(counter+1)
    }

    const dec = () => {
        setCounter(counter-1)
    }

    const res = () => {
        setCounter(value - value)
    }

    return (
        <>
            <h1> Counter App </h1>
            <h2>{counter}</h2>
            <button onClick={inc}>+1</button>
            <button onClick={res}>Reset</button>
            <button onClick={dec}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropType.number
}

CounterApp.defaultProps = {
    value: 0
}
export default CounterApp;