import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useState, useEffect} from "react";
import ModalCadastrar from '../components/ModalCadastrar';

const url = "http://localhost:5000/produtos"

const Produtos = () => {

  const [produtos, setProdutos] = useState ([]) 

  const [modalCadastrar, setModalCadastrar] = useState (false)

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch(url)
        const produtos = await res.json()
        setProdutos(produtos)
      }
      catch(error){
        console.log(error.message)
      }
    }
    fetchData()
  }, []);

  return (
    <div>
      <Container>
      <div className='d-grid col-4 gap-2'>
        <h1>Lista de Alimentos</h1>
        <Button variant="primary" size='lg' className='mb-3 d-inline-flex justify-content-center' onClick={() => {
          setModalCadastrar(true)
        }}><span className='material-symbols-outlined flex' style={{fontSize:"30px"}}>add_circle</span>cadastrar</Button>{' '}       
         </div>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Preço</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produtos)=>(
        <tr key={produtos.idAlimento}>
          <td>{produtos.idAlimento}</td>
          <td>{produtos.nomeAlimento}</td>
          <td>{produtos.categoria}</td>
          <td>{produtos.preco}</td>
          <td><ButtonGroup size='sm'>
      <Button variant="danger" onClick={async () => {
        const res = await fetch(`http://localhost:5000/produtos/${produtos.idAlimento}`,
        {
          method:"DELETE",
          headers: {"content-type" : "application/json"},
        });
        const produtoRemovido = await res.json()
        alert(`produto ${produtoRemovido.nomeAlimento} foi excluido`)

      }}
      >
        Excluir</Button>
    </ButtonGroup></td>
        </tr>
        ))}
      </tbody>
    </Table>
    <ModalCadastrar show={modalCadastrar}
    onHide={() => {
      setModalCadastrar(false)
    }}/>

      </Container>
    </div>
  )
}

export default Produtos