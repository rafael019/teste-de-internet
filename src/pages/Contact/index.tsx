import { PageTitle } from '../../components/Page-title';
export function Contact() {
  return (
    <section className="bg-white p-8 border border-gray-200 mb-8">
      <PageTitle primaryTitle="Contato" />
      <p>
        <strong>Atenção</strong>, o projeto Medir Conexão é um projeto de testes para aplica conhecimentos, todo o conteúdo do site é demonstrativo. Informamos que a ferramenta utiliza a tecnologia aberta do OpenSpeedTest e não possui qualquer tipo de vínculo, parceria ou afiliação comercial com provedores de internet, operadoras de telecomunicações ou empresas do setor. Meu objetivo é aplicar conhecimnentos e fornecer plataforma neutra, rápida e transparente para a aferição do desempenho de
        internet.
      </p>
    </section>
  );
}
