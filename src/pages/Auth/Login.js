import './Auth.css';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container-form">
      <div className="form">
        <div className="title">
          <h1>LOGIN</h1>
        </div>
        <div className="form-items">
          <form>
            <label>
              <span>E-mail</span>
              <input type="text" placeholder="Digite seu e-mail" />
            </label>
            <label>
              <span>Senha</span>
              <input type="text" placeholder="Digite sua senha" />
            </label>

            <div className="remember">
              <div className="remember-box">
                <div>
                  <input className="check" type="checkbox" id="check" />
                </div>
                <div>
                  <label htmlFor="check">
                    <span>Lembrar minha senha</span>
                  </label>
                </div>
              </div>
              <div className="forgot">
                <Link to="/">Esqueci minha senha</Link>
              </div>
            </div>

            <button className="btn">Entrar</button>
          </form>
        </div>
        {/* <div className="action">
          <div className="btn">
            <Link to="/">Entrar</Link>
          </div>
        </div> */}
        <div className="register">
          <div>
            <p>Ainda não é cadastrado?</p>
          </div>
          <div>
            <Link to="/register">Cadastre-se agora!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
