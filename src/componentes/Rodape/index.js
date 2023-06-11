import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import './Rodape.css';

const Rodape = ()=>{
    return(
        <footer>
            <section className="social-media">
                <a href="https://facebook.com">
                    <img src="/imagens/fb.png" alt="Logo Facebook" />
                </a>
                <a href="https://twitter.com">
                    <img src="/imagens/tw.png" alt="Logo Twitter" />
                </a>
                <a href="https://instagram.com">
                    <img src="/imagens/ig.png" alt="Logo Instagram" />
                </a>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Logo Organo" />
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
        
    )
}
export default Rodape;