import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Input, Col, Row} from 'reactstrap';
import { Link ,  useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';


import logoImg from '../../assets/logo.svg';
import pessoasImg from '../../assets/pessoas.svg';

export default function Logon() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

   try {
      const response = await api.post('/login', { email, senha});

      
     const {_id } = response.data;
     localStorage.setItem('user', _id);
      history.push('/empresas');
     
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }
  
 
  return (
  <div>
    <Container>
      <Row className="align-items-center" > 
        <Col md={6} >
          <img className="img" src={logoImg} alt="Logo" style={{ marginBottom: '80px'}}/> 
          <h1 className="display-5">Faça seu login</h1>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Input type="email" name="email" id="email" 
            placeholder="Digite seu E-mail"  value={email}
            onChange={e => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="password"
             placeholder="Digite sua Senha" value={senha}
             onChange={e => setSenha(e.target.value)}/>
          </FormGroup>
          <Button color="warning" size="lg" block className="text-white">Entrar</Button>
          <Link id="back-link" to="/cadastrar">
            <FiLogIn size={16} color="#FFC700" />
              Não tenho cadastro
          </Link>
        </Form>
        </Col>
        <Col md={6} >
          <img src={pessoasImg} alt="Pessoas" className="d-none d-md-block" style={{ width: '80%'}}/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}