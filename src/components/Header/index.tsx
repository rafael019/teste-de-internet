import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export function Header() {
  function handleSearch() {}

  return (
    <header className="bg-stone-950 py-8 mb-8">
      <div className="container flex items-center justify-between">
        <h1 className="text-white text-2xl uppercase font-bold">
          Medir <span className="text-orange-500">conexão</span>
        </h1>
        <nav className="flex">
          <Link to="/" className="text-white font-medium p-3">
            Home
          </Link>
          <Link to="/about" className="text-white font-medium p-3">
            Sobre
          </Link>
          <Link to="/about" className="text-white font-medium p-3">
            Dicas e Tutoriais
          </Link>
          <Link to="/contact" className="text-white font-medium p-3">
            Contato
          </Link>
        </nav>
        <form onSubmit={handleSearch}>
          <button type="submit" className="cursor-pointer">
            <FiSearch size={18} color="#fff" />
          </button>
        </form>
      </div>
    </header>
  );
}
