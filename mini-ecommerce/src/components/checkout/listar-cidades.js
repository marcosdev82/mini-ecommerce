import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function ListarCidades(props) {
    //http://localhost:4000/mini-ecommerce/estado/54/cidades
    const CIDADES_URL = 'http://localhost:4000/mini-ecommerce/estado/:estado/cidades'; 
    const [cidades, setCidades] = useState([]);

    useEffect(() => {
        async function obterCidades() {
            try {
                let { data } = await axios.get(CIDADES_URL.replace(':estado', props.estado));
                console.log(data)
                setCidades(data);
            } catch (err) {
                setCidades([]);
            }
        }

        if (props.estado !== '') {
            obterCidades();
        }
    }, [props.estado]);
    
      
    return cidades.map((cidade) => 
        <option
            key={cidade.id || cidade} // Supondo que cada cidade tenha um ID único
            value={cidade.nome || cidade} // Supondo que cada cidade tenha um nome
            data-testid={cidade.nome || cidade}
        >
        {cidade.nome || cidade}
        </option>
    );
}

ListarCidades.propTypes = {
    estado: PropTypes.string.isRequired
};

export default ListarCidades;