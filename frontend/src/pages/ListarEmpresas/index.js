import React, {useEffect, useState } from 'react';
import { Container, Table , Row, Col, FormGroup, Input, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
export default function ListarEmpresas() {
  
  const [empresas, setEmpresas] = useState([]);

  useEffect(() =>{
    async function loadEmpresas(){
      const user_id = localStorage.getItem('user');
      const response = await api.get('/empresas',{
        headers: {user_id}
      });
      setEmpresas(response.data)
    }
    loadEmpresas();
  },[]);

  return (
    <div>
      <Container style={{ marginBottom: '4rem'}}>
    <Row className="justify-content-md-center" > 
        <img className="img" src={logoImg} alt="Logo" style={{ margin: '1rem'}}/> 
     </Row>
     <Row  > 
         <Col md={6} >
            <Link id="back-link" to="/empresas">
            <FiArrowLeft size={16} color="#FFC700" />
              Voltar
          </Link>
          </Col>
          <Col md={6} >
          <FormGroup >
          <br/><br/>
           <Input name="pesquisar" id="pesquisar" className="fa fa-search"
                placeholder="Digite o nome da empresa"
                type="search" />
                
               
            </FormGroup>
        </Col>
    </Row>
    <br/><br/>
    {empresas.map(empresas =>(
    <Table hover key={empresas._id}>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Endereço</th>
          <th>Seguimento</th>
          <th>Descrição</th>
          <th>Telefones</th>
          <th>WhatsApp</th>
          <th>Foto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
    <th scope="row">{empresas._id}</th>
          <td>{empresas.nome}</td>
          <td>{empresas.email}</td>
          <td>{empresas.endereco}</td>
          <td>{empresas.seguimento}</td>          
          <td>{empresas.descricao}</td> 
          <td>{empresas.fone}</td>
          <td>{empresas.whatsapp}</td>       
          <td>{empresas.foto}</td>
          
        </tr>
     </tbody>
    </Table>
))}
      </Container>
      </div>
    );
}