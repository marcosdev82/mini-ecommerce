import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

function ListarCidades(props) {

    const CIDADES_URL = 'http://localhost:4000/min-ecommerce/estado/cidades'

    const [cidade, setCidades] = useState([]);
    
    return cidades.map((cidade) => 
        <option
            key={cidade}
            value={cidade}
            data-testid={cidade}
        >
            {cidade}
        </option>
    );

}

ListarCidades.propTypes = {
    estado: PropTypes.string.isRequired
}

export default ListarCidades;
