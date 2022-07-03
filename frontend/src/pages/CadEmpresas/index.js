import React, { useState } from 'react';
import { Container, FormText , Form, FormGroup, Input, Label, Col, Row, Button} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { FiArchive } from 'react-icons/fi';
import api from '../../services/api';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


import logoImg from '../../assets/logo.svg';
export default function CadEmpresas() {

  
  
    
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [fone1, setFone1] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [seguimento, setSeguimento] = useState('');
  const [file, setFile] = useState(null);
  const history = useHistory();

  async function handleCadEmpresas(e) {
    e.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('nome', nome);
    data.append('email', email);
    data.append('endereco', endereco);
    data.append('descricao', descricao);
    data.append('fone', fone1);
    data.append('whatsapp', whatsapp);
    data.append('seguimento', seguimento);
    data.append('foto', file);

    
  api.post('/empresas', data, { headers: {user_id} });
  history.push('/listar-empresas');
 
  }
 
  return (
    <div>
    <Container style={{ marginBottom: '4rem'}}>
    <Row className="justify-content-md-center" > 
        <img className="img" src={logoImg} alt="Logo" style={{ margin: '1rem'}}/> 
      
    </Row>
    <br/><br/>
    <Row className="justify-content-md-center flex" > 
    <h1 className="display-6 ">Faça o cadastro da Empresa!</h1>
    </Row>
    <Row className="justify-content-md-center flex" > 
    <p>Faça o cadastro da empresa, do formato que vai para o aplicativo!</p>
    </Row>
    <br/><br/>
    <Form onSubmit={handleCadEmpresas}>
      <Row className="justify-content-md-center" > 
        <Col md={4} >
             <FormGroup>
                <Label for="nome">Digite o nome da Empresa: *</Label>
                <Input type="text" name="nome" id="nome" required="required"
                 placeholder="Empresa Fulana" value={nome}
                 onChange={e => setNome(e.target.value)}  />
            </FormGroup>
        </Col>
        <Col md={4} >
           <FormGroup>
            <Label for="email">Digite o e-mail da Empresa: *</Label>
                <Input type="email" name="email" id="email" required="required"
                placeholder="empresafulana@empresafulana.com"  value={email}
                onChange={e => setEmail(e.target.value)} />
            </FormGroup>
        </Col>
      </Row>
      <Row className="justify-content-md-center" > 
        <Col md={8} >
            <FormGroup>
            <Label for="endereco">Digite o Endereço completo da Empresa: *</Label>
                <Input type="text" name="endereco" id="endereco" required="required"
                placeholder="Av. Federal, nº 12, centro - Porangatu-GO"  value={endereco}
                onChange={e => setEndereco(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="descricao">Digite a Descrição: *</Label>
                <ReactQuill 
                  required = "required"
                  value = {descricao}
                  onChange = {editor => setDescricao(editor)}
                 />          
            </FormGroup>
        </Col>
      </Row>
      <Row className="justify-content-md-center" > 
      <Col md={2} >
            <FormGroup>
                <Label for="fone1">Telefone 1: *</Label>
                <Input name="fone1" id="fone1" 
                placeholder="(99) 9999-9999" 
                required="required"
                type="tel"  value={fone1}
                onChange={e => setFone1(e.target.value)} />
            </FormGroup>
      </Col>
      <Col md={2} >
            <FormGroup>
                <Label for="fone1">Telefone 2:</Label>
                <Input name="fone2" id="fone2" 
                placeholder="(99) 9999-9999" 
                type="tel"/>
            </FormGroup>
      </Col>
      <Col md={2} >
            <FormGroup>
                <Label for="fone3">Telefone 3:</Label>
                <Input name="fone3" id="fone3" 
                placeholder="(99) 9999-9999" 
                 type="tel"/>
            </FormGroup>
      </Col>
      <Col md={2} >
            <FormGroup>
                <Label for="whatsapp">WhatsApp: *</Label>
                <Input name="whatsapp" id="whatsapp" 
                placeholder="(99) 9999-9999" required="required"
                 type="tel" value={whatsapp}
                 onChange={e => setWhatsapp(e.target.value)} />
            </FormGroup>
      </Col>
      <Col md={8}>
      <FormGroup>
        <Label for="seguimento">Escolha o Seguimento *</Label>
        <Input type="select" name="seguimento" id="seguimento" required="required"  value={seguimento}
            onChange={e => setSeguimento(e.target.value)} >
            <option></option>
            <option>Alimentação</option>
            <option>Saúde</option>
            <option>Comércio</option>
            <option>Serviços</option>
          </Input>
          </FormGroup>
        </Col>
        <Col md={8}>
        <FormGroup>
        <Label for="file">Escolha a foto: *</Label>
        <Input type="file" name="file" id="file" required="required"  
            onChange={e => setFile(e.target.files[0])} />
          <FormText color="muted">
            Obs: Só serão aceitos arquivos de imagem contendo os formatos (.jpg , .png , .jpeg).
          </FormText>
        </FormGroup>
        </Col>
        <Col md={8}>
        <Button color="warning" size="lg" block className="text-white" type="submit">Cadastrar</Button>
        <Link id="back-link" to="/listar-empresas">
            <FiArchive size={16} color="#FFC700" />
              Vizualizar Empresas Lançadas
          </Link>
        </Col>
       </Row>
      </Form>
    </Container>
    </div>
   
  );
}