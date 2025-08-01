import style from './styles/style.module.css'
import instagram from './images/instagram.png'
import { FaFacebook } from "react-icons/fa";

function App() {
  return (
    <>
      <section className={style.container}>
        <div className={style.login}>
          <img src={instagram} alt="" />
          <div className={style.inputBox}>
            <input type="email" placeholder=" " required />
            <label>Telefone, nome de usuário ou email</label>
          </div>
          <div className={style.inputBox}>
            <input type="password" placeholder=" " required />
            <label>Senha</label>
          </div>
          <button>Entrar</button>
          <div className={style.line}>
            <hr /> <p>OU</p> <hr />
          </div>
          <a href="https://www.facebook.com/?locale=pt_BR"> <FaFacebook size={20} /> Entrar com o Facebook</a>
          <a className={style.senha} href="https://www.instagram.com/accounts/password/reset/">Esqueceu a senha?</a>
        </div>
        <section className={style.conta}>
          <div className={style.cadastrar}>
            <p>Não tem uma conta?</p> <br /> <a href="https://www.instagram.com/accounts/emailsignup/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1">Cadastra-se</a>
          </div>
        </section>
        <section className={style.footer}>
          <a href="https://www.meta.com/about/?utm_source=about.meta.com&utm_medium=redirect">Meta</a>
          <a href="https://about.instagram.com/">Sobre</a>
          <a href="https://about.instagram.com/blog/">Blog</a>
          <a href="https://about.instagram.com/about-us/careers">Carreiras</a>
          <a href="https://help.instagram.com/">Ajuda</a>
          <a href="https://developers.facebook.com/docs/instagram-platform">API</a>
          <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">Privacidade</a>
          <a href="https://help.instagram.com/581066165581870/">Termos</a>
          <a href="https://www.instagram.com/explore/locations/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1">Localizações</a>
          <a href="https://www.instagram.com/web/lite/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1">Instagram Lite</a>
          <a href="https://www.threads.com/">Threads</a>
          <a href="https://www.facebook.com/help/instagram/261704639352628?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1">Upload de contatos e não usuários</a>
          <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fmeta_verified%2F%3Fentrypoint%3Dweb_footer%26next%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fmeta_verified%252F%253Fentrypoint%253Dweb_footer%2526next%253Dhttps%25253A%25252F%25252Fwww.instagram.com%25252Faccounts%25252Fedit%25252F%25253F__coig_login%25253D1%2526__coig_login%253D1%26__coig_login%3D1#">Meta Verified</a>
        </section>
        <div className={style.last}>
          <a href="">Português (Brasil)</a>
          <a href="">© 2025 Instagram from Meta</a>
        </div>
      </section>
    </>
  );
}

export default App;
