
import './App.css';

import { useState } from 'react';


//importo el componente de entrada

import Input from './components/Input'

//importo el componente de Card

import Card from './components/Card'

//importo el componente Container
import Container from './components/Container'

//importo el componente button

import Button from './components/Button'

//agrego el componente de UserForm

import UserForm from './components/UserForm'

function App() {

  const [usuarios, setUsuarios] = useState([])

 


  const submit = usuario => {

   
    setUsuarios([
      ...usuarios,
      usuario,
    ])
   

  }



  //para verificar 
  console.log(usuarios)

  return (
    <div style={{ marginTop: '15%'}}>
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <UserForm submit={submit} />
    
        </div>
      </Card>
      <Card>
        <ul>

          {usuarios.map(x =>

            <li key={x.email}>{` ${x.name} ${x.lastname}: ${x.email} `}</li>
          )}
        </ul>
      </Card>
    </Container>
    </div>
  );
}

export default App;
