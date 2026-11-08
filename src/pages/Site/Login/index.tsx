import { Link, useNavigate } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import { auth } from '../../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Components
import { ButtonMain } from '../../../components/ButtonMain';
import { Input } from '../../../components/Input';
import { PageTitle } from '../../../components/PageTitle';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    // Obriga o usuário a preencher todos os campos
    if (email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin', { replace: true }); // Se o login deu certo redireciona para tela de login
      })
      .catch((error) => {
        console.log('Erro ao fazer login, tente novamente ' + error);
      });
  }
  return (
    <section className="bg-white p-8 border border-gray-200 mb-8 max-w-120 mx-auto">
      <Link to="/">
        <PageTitle primaryTitle="Login" />
      </Link>
      <form onSubmit={handleLogin}>
        <Input idInput="email" labelInput="E-mail" typeInput="text" valueInput={email} onChange={(e) => setEmail(e.target.value)} placeholderInput="Digite seu e-mail..." />
        <Input idInput="password" labelInput="Senha" typeInput="password" valueInput={password} onChange={(e) => setPassword(e.target.value)} placeholderInput="******" />
        <ButtonMain textButton="Fazer Login" />
      </form>
    </section>
  );
}
