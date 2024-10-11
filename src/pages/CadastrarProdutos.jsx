import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Produtos from '../pages/Produtos';

const url = "http://localhost:5000/produtos"

const CadastrarProdutos = (props) => {
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
            props.onHide()
        } else{
            alert("Cadastrado com sucesso")
        }
    } 

  return (
    <div>
         <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
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
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Digite categoria" value={nomeAlimento} onChange={(e) => {setCategoria(e.target.value)}}/>
        </FloatingLabel>

        {/**caixinha preço */}
      <FloatingLabel
        controlId="floatingInputName"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Digite valor do alimento" value={nomeAlimento} onChange={(e) => {setPreco(e.target.value)}}/>
      </FloatingLabel>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCadastrar}>Cadastrar</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default CadastrarProdutos