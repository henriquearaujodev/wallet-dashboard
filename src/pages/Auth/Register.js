import './Auth.css';

import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container-form">
      <div className="form">
        <div className="title">
          <h1>REGISTRAR</h1>
        </div>
        <div className="form-items">
          <form>
            <label>
              <span>Nome</span>
              <input type="text" placeholder="Digite seu nome" />
            </label>
            <label>
              <span>E-mail</span>
              <input type="text" placeholder="Digite seu e-mail" />
            </label>
            <label>
              <span>Senha</span>
              <input type="text" placeholder="Digite sua senha" />
            </label>
            <label>
              <span>Confirmar senha</span>
              <input
                type="text"
                placeholder="Digite sua confirmação de senha"
              />
            </label>

            <button className="btn">Registrar</button>
          </form>
        </div>
        <div className="register">
          <div>
            <p>Já é cadastrado?</p>
          </div>
          <div>
            <Link to="/auth">Faça o login agora!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
