import React, {useState, useRef} from 'react';
import axios from 'axios';
import { Container, H1, Image, ContainerItens, Inputlabel, Input, Botao, User, Porcaria} from './styles';
import Pessoas from './assets/pesssoas.png';
import Lixo from './assets/lixeira.png';



function App() {
    const [users, setUsers ]= useState([]);
    const inputname = useRef();
    const inputage = useRef();
    


async function  addNewUser(){
    const data = await axios.post ('http://localhost:3001/users', {name:inputname.current.value, age:inputage.current.value})

    console.log(data)
   // setUsers([...users,{id: Math.random(), name: inputname.current.value, age: inputage.current.value,}]);
}//
function deletUser(userId){
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
}


    return<Container >
        <Image alt="logo-imagem" src={Pessoas} />
        <ContainerItens>
            <H1>Bem Vindo!</H1>
            <Inputlabel>Nome</Inputlabel>
            <Input ref={inputname}placeholder="Nome" />
            <Inputlabel>Idade</Inputlabel>
            <Input ref={inputage}placeholder="Idade" />

            <Botao onClick={addNewUser}>Cadastrar </Botao>

            <ul>
                {users.map((user) => (
                    <User key={user.id}>
                       <p> {user.name}</p> <p> {user.age}</p>
                       <button onClick={() => deletUser(user.id)}><Porcaria alt='lixo' src={Lixo}/></button>
                        </User>
                ))
                }
            </ul>
        </ContainerItens>

    </Container>
}

export default App