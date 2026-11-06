import { Input } from '../../../components/Input';
import { PageTitle } from '../../../components/Page-title';

export function Login() {
  return (
    <section className="bg-white p-8 border border-gray-200 mb-8 max-w-[480px] mx-auto">
      <PageTitle primaryTitle="Login" />
      <form>
        <Input idInput="email" labelInput="E-mail" typeInput="text" placeholderInput="Digite seu e-mail..." />
        <Input idInput="password" labelInput="Senha" typeInput="password" placeholderInput="******" />
        <button type="submit" className="bg-orange-500 py-2 px-8 text-white text-center font-semibold uppercase text-sm w-full">
          Fazer Login
        </button>
      </form>
    </section>
  );
}
