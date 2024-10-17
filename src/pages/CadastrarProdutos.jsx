import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Produtos from '../pages/Produtos';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:5000/produtos"

const CadastrarProdutos = () => {
  const navigate = useNavigate()

    const [nomeAlimento, setNomeAlimento] = useState ("") 
    const [categoria, setCategoria] = useState ("") 
    const [preco, setPreco] = useState ("")  

    const handleCadastrar = async () => {
        if(nomeAlimento != "" && categoria != "" && preco != ""){
            const produtos = {nomeAlimento, categoria, preco};
            const res = await fetch(url, {
              method:"POST",
              headers: {"Content-Type": "application/json"},
              body:JSON.stringify(produtos),
            });
            setNomeAlimento("")
            setCategoria("")
            setPreco("")
            alert("cadastrado com suceso")
            navigate('/produtos')
            
        } else{
            alert("Cadastrado com sucesso")
        }
    } 

  return (
    <div style={{backgroundColor:"rgb(118, 184, 118)", minHeight:"100vh"}}>
      <NavBar/>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ width: "80%"}}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Cadastrar produto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Produtos</h4>

          {/**caixinha do nome */}
        <FloatingLabel
          controlId="floatingInputName"
          label="Nome"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Digite nome do alimento" value={nomeAlimento} onChange={(e) => {setNomeAlimento(e.target.value)}}/>
        </FloatingLabel>

            {/**caixinha do categoria */}
        <FloatingLabel
          controlId="floatingInputName"
          label="Categoria"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Digite categoria" value={categoria} onChange={(e) => {setCategoria(e.target.value)}}/>
          </FloatingLabel>

          {/**caixinha preço */}
        <FloatingLabel
          controlId="floatingInputName"
          label="Preço"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Digite valor do alimento" value={preco} onChange={(e) => {setPreco(e.target.value)}}/>
        </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCadastrar}>Cadastrar</Button>
        </Modal.Footer>
        </div>
      </div>
    </div>
  )
}
export default CadastrarProdutos