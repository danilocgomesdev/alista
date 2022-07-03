import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Input, Col, Row} from 'reactstrap';
import { Link,  useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';



import logoImg from '../../assets/logo.svg';
import pessoasImg from '../../assets/cadastro-usuario.svg';
export default function CadUser() {
 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const history = useHistory();

  async function handleUsers(e) {
    e.preventDefault();

    if(senha !== confirmSenha ){
      alert('Senhas não conferam');
    } else {
      
     try {
      const response = await api.post('/users/cadastro', { nome, email, senha});

      console.log(nome)
     
      history.push('/');
     
    } catch (err) {
      alert('Falha ao fazer o cadastro, tente novamente.');
    }
  }
  }

  return (
    <div>
    <Container >
    <Row className="justify-content-md-center" > 
    <img className="img" src={logoImg} alt="Logo" style={{ margin: '1rem'}}/> 
    
    </Row>
    <h1 className="display-5 ">Faça seu Cadastro!</h1>
    <p>Faça seu cadastro, para ter acesso a plataforma de conteúdos do aplicativo!</p>
      <Row className="align-items-center" > 
        <Col md={6} >
          
        <Form onSubmit={handleUsers}> 
        <FormGroup>
            <Input type="text" name="nome" id="nome" 
            placeholder="Digite seu Nome Completo" value={nome}
            onChange={e => setNome(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" id="email" 
            placeholder="Digite seu E-mail" value={email}
            onChange={e => setEmail(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" id="password" 
            placeholder="Digite sua Senha" value={senha}
            onChange={e => setSenha(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Input type="password" name="confirmPassword" id="password" 
            placeholder="Confirme sua Senha" value={confirmSenha}
            onChange={e => setConfirmSenha(e.target.value)}/>
          </FormGroup>
          <Button color="warning" size="lg" block className="text-white">Cadastrar</Button>
          <Link id="back-link" to="/">
            <FiLogIn size={16} color="#FFC700" />
              Voltar
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