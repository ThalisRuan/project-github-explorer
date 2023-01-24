import React from "react";

import {Title, Form} from './styles'



import Logo from '../../assets/logo2.svg'

const DashBoard : React.FC = () => {
    return (
    <>
        <img src={Logo} alt="Github Explorer" />
        <Title>Explore repositorios no Github</Title>
        <Form>

        <input placeholder=" Digite o nome do repositorio"/>
        <button type="submit">Pesquisar</button>
        
       
        </Form>
    
    </>
    );
};

export default DashBoard
