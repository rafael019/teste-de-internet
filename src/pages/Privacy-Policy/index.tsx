import { PageTitle } from '../../components/Page-title';

export function PrivacyPolicy() {
  return (
    <section className="bg-white p-8 border border-gray-200 mb-8">
      <PageTitle primaryTitle="Política de privacidade" />
      <p>
        Este site é um projeto de testes (Medir Conexão). Não é um serviço comercial,
        não é monetizado e não existe a intenção de explorar ou vender dados de usuários.
      </p>
      <p>
        Não coletamos informações pessoais. Não solicitamos cadastro, login, e-mail,
        nome, telefone ou qualquer outro dado identificável para usar o site.
      </p>
      <p>
        Não utilizamos cookies de rastreamento, analytics, publicidade, afiliados
        ou remarketing. Também não compartilhamos dados com terceiros para fins
        comerciais, porque não armazenamos dados pessoais dos visitantes.
      </p>
      <p>
        O teste de conexão, quando disponível, ocorre no seu próprio dispositivo
        e navegador. Não guardamos resultados associados à sua identidade.
      </p>
      <p>
        Este site pode conter links para páginas externas. Não controlamos o
        conteúdo nem as práticas de privacidade desses sites.
      </p>
      <p>
        Como se trata apenas de um projeto experimental, esta política pode
        mudar se a finalidade do site for alterada no futuro. Em caso de dúvida,
        use a página de contato.
      </p>
      <p>
        Esta política é efetiva a partir de <strong>Novembro/2026</strong>.
      </p>
    </section>
  );
}
