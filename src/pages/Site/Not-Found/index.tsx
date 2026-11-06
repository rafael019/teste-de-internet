import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { PageTitle } from '../../../components/Page-title';
export function NotFound() {
  return (
    <section className="bg-white p-32 border border-gray-200 my-10 text-center text-stone-800">
      <span className="text-9xl font-bold ">404</span>
      <PageTitle primaryTitle="Página não encontrada" />
      <p className="text-sm mb-8">Desculpe, a página que você procura não existe ou foi removida</p>
      <Link to="/" className="bg-orange-500 py-2 px-8 w-max text-white font-semibold uppercase text-sm flex items-center gap-2 mx-auto">
        <FiHome size={14} color="#fff"></FiHome> Home
      </Link>
    </section>
  );
}
