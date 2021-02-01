import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

const PrimeraApp = ({nombre}) => {

    return (
        <>
            <h1> Hola {nombre}</h1>
            <p>Esta es mi presentación</p>
        </>
    );
}

PrimeraApp.propTypes = {
    nombre : PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    nombre: 'Alejandro'
}

export default PrimeraApp;