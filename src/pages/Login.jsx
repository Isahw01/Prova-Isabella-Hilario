import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav";
import {useState, useEffect} from "react";

const url = "http://localhost:5000/usuarios"

const Login = () => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  //variaveis pro alerta
  const [alertaClass, setAlertaClass] = useState(" mb-3 d-none")
  const [alertaMensagem, setAlertaMensagem] = useState("")
  const [alertaVariant, setAlertaVariant] = useState("danger")

  const [usuarios, setUsuarios] = useState ([]) 

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch(url)
        const users = await res.json()
        setUsuarios(users)
      }
      catch(error){
        console.log(error.message)
      }
    }
    fetchData()
  }, []);

  const gravarLocalStorage = (usuario) => {
    localStorage.setItem("userName", usuario.nome)
    localStorage.setItem("userEmail", usuario.email)
  }

  const handleLogin = async (e) =>{
    e.preventDefault()

    const user = {email, senha}

    const userToFind = usuarios.find(
      (userFind) => userFind.email == user.email
    )


    if(email !=""){
      if(senha !=""){
        if(userToFind != undefined && userToFind.senha == senha){
          console.log(userToFind)
          console.log("Entrou")
          setAlertaClass("mb-3")
          gravarLocalStorage(userToFind)
          setAlertaMensagem("Login efetuado com sucesso")
          setAlertaVariant("sucesso")
          alert("Login efetuado com sucesso")
      
        }
        else{
          setAlertaClass("mb-3")
          setAlertaMensagem("Usuario ou senha invalidos")
        }
      
      }
      else{
        setAlertaClass("mb-3")
        setAlertaMensagem("O ampo senha não pode ser vazio")
      }
      
    }
    else{
      setAlertaClass("mb-3")
      setAlertaMensagem("O ampo email não pode ser vazio")
    }
  }
  

  return (
    <div>
      <Container>
      <span class="material-symbols-outlined" style={{fontSize:"100px"}}>
      login
      </span>
        <form onSubmit={handleLogin}>
        {/**caixinha do email */}
      <FloatingLabel
        controlId="floatingInputEmail"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
      </FloatingLabel>
      
              {/**caixinha da senha */}

      <FloatingLabel controlId="floatingPassword" label="Senha">
        <Form.Control type="password" placeholder="Senha" className='mb-3' value={senha} onChange={(e) => {setSenha(e.target.value)}}/>
      </FloatingLabel>
      <Alert key="danger" variant={alertaVariant} className={alertaClass}>{alertaMensagem}
        </Alert>
        <Button variant="primary" type='submit'>Login</Button>{' '}
        </form>
      </Container>
    </div>
  )
}

export default Login