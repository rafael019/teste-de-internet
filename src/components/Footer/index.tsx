import { FiFacebook, FiYoutube, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer>
      <div className="bg-stone-950 py-10">
        <div className="container">
          <div className="flex gap-10 justify-between items-center">
            <h2 className="text-white text-2xl uppercase font-bold mb-3">
              Medir <span className="text-orange-500">conexão</span>
            </h2>

            <div className="mb-4 flex-4">
              <p className="text-gray-300">O uso do nosso site é de responsabilidade de cada usuário, os sistemas aqui disponibilizados não são de autoria do criador do site.</p>
            </div>
            <ul className="flex gap-3 mb-4">
              <li>
                <a href="https://www.facebook.com/2wsites" target="blank" rel="noopener noreferrer">
                  <FiFacebook size={24} color="#fff" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/buguetech?sub_confirmation=1" target="blank" rel="noopener noreferrer">
                  <FiYoutube size={24} color="#fff" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/2wsites/" target="blank" rel="noopener noreferrer">
                  <FiInstagram size={24} color="#fff" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-2">
        <div className="container flex justify-between">
          <p className="text-sm text-gray-500">
            Desenvolvido por{' '}
            <a href="https://rafaelbeva.com.br/" className="text-orange-500 font-semibold" target="blank" rel="noopener noreferrer">
              Rafael Beva
            </a>
          </p>

          <ul className="flex text-gray-500 text-sm">
            <li>
              <Link to="/" className="p-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="p-2">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/" className="p-2">
                Dicas e Tutoriais
              </Link>
            </li>
            <li>
              <Link to="/contact" className="p-2">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
