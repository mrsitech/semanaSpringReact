import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>MRSitech</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.mrsitech.com.br">mrsitech@outlook.com</a>
                </p>
            </div>
        </header>
    )    
  }

export default Header;

