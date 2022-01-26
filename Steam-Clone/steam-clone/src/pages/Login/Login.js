import "./Login.css";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault()
    const login={
      
      email:email,
      password:password
     
    }
    axios.post('auth/login', login)
    .then(response => {
      const token = response.token
      localStorage.setItem('token',token)
    });
  }
  return (
    <div className="login">
      <h2 className="login-title">Iniciar-sessão</h2>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome de usuário Steam ou e-mail"
            required onChange={event => setEmail(event.target.value)}/>

          <input type="password" placeholder="Senha" required onChange={event => setPassword(event.target.value)}/>
          <div className="login-ok">
            <a href="!#">
              <span>Esqueceu sua senha?</span>
            </a>
            <input type="submit" value="Fazer login" />
          </div>
        </form>
        <div className="login-create">
          <span>Ainda não possui uma conta?</span>
          <a className="btn-create" href="/register">
            Criar uma conta Steam
          </a>
        </div>
      </div>
    </div>
  );
}
