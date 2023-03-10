import React, { useState, FormEvent } from 'react'

import {FiChevronRight} from 'react-icons/fi'   
import api from '../../services/api'
import Logo from '../../assets/logo2.svg'

import {Title, Form, Repositories} from './styles'

interface Repository {
    full_name: string;
    description : string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const DashBoard : React.FC = () => {
    
    const [NewRepo, setNewRepo] = useState('')
    const [repositories, setRepositories] = useState<Repository[]>([]);
    
    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
        ): Promise<void> {
        event.preventDefault();
        
        const response = await api.get(`user/${NewRepo}`)

        const repository = response.data

        setRepositories ([... repositories, repository]);
        setNewRepo('');
    }
    return (
    <>
        <img src={Logo} alt="Github Explorer" />
        <Title>Explore repositorios no Github</Title>

        <Form onSubmit={handleAddRepository}>
            <input 
            value = {NewRepo}
            onChange ={(e): void => setNewRepo (e.target.value)}
            placeholder="Digite o nome do repositorio" 
            />
            <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
            {repositories.map (repository => (
                
                <a key={repository.full_name} href="teste" >
                <img 
                    src={repository.owner.avatar_url}
                    alt={repository.owner.login} 
            />
            <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
            </div>
            
                <FiChevronRight size={20}/>
            </a>       
            ))}         
        </Repositories>
    </>
    );
};  

export default DashBoard
