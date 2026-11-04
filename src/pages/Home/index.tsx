import { Sidebar } from '../../components/Sidebar';
import { PageTitle } from '../../components/Page-title/index';
export function Home() {
  return (
    <div className="grid grid-cols-[8fr_4fr] gap-9">
      <section className="bg-white p-8 border border-gray-200 mb-8">
        <div className="min-h-80">
          <PageTitle primaryTitle="Teste de Velocidade de Internet" />
          <div className="w-full h-0 pb-[50%] relative mb-8">
            <iframe className="border-none absolute top-0 left-0 w-full h-full min-h-80 overflow-hidden" src="https://openspeedtest.com/speedtest"></iframe>
          </div>
          <p className="text-center">
            Provided by{' '}
            <a href="https://openspeedtest.com" target="blank" rel="noopener noreferrer">
              OpenSpeedtest.com
            </a>
          </p>
        </div>
        <h2 className="text-2xl text-stone-800 font-bold mt-4 mb-3">Medidor de velocidade da conexão</h2>
        <p className="text-balance">
          Faça o Teste de internet e verifique a velocidade e a qualidade da sua conexão. Esse teste é gratuito, fácil de fazer e pode ser realizado a qualquer momento. Antes de iniciar o teste da sua internet deixe conectado a internet apenas o aparelho que irá realizar o teste, faça o teste utilizando um cabo de rede para obter maior precisão nos resultados. O Teste de internet Copel é uma ótima ferramenta para verificar se a sua conexão está funcionando bem. Se os resultados do teste não
          estiverem de acordo com o que você espera, você pode entrar em contato com o seu provedor de internet para solicitar suporte.
        </p>
      </section>
      <aside className="text-gray-500">
        <Sidebar sidebarTitle="Aviso" sidebarContent="O Medir conexão não é site oficial vivo, copel ou de qualquer outro provedor de internet, o site é apenas um projeto pessoal para testar conhecimentos, utilizamos o mediro OpenSpeed Test e não temos qualquer responsabilidade sobre resultados ou serviços de provedores de internet" />

        <Sidebar sidebarTitle="Instruções" sidebarContent="Para que o teste seja o mais preciso possível desconecte todos os aparelhos que usam internet e deixe conectado somente o aparelho que irá realizar o teste, interrompa todos os seus Downloads, não faça o teste conectado ao Wi-fi conecte o seu computador ou notebook a um cabo de rede e deixe aberta somente a aba que em que o teste está sendo feito." />
      </aside>
    </div>
  );
}
