export function Home() {
  return (
    <main className="container h-full">
      <div className="grid grid-cols-[8fr_4fr] gap-9">
        <section className="bg-white p-8 border border-gray-200 mb-8">
          <h1 className="text-2xl font-bold text-stone-800 mb-8">Teste de Velocidade de Internet</h1>
          <div className="min-h-80">
            <div className="w-full h-0 pb-[50%] relative mb-8">
              <iframe className="border-none absolute top-0 left-0 w-full h-full min-h-80 overflow-hidden" src="//openspeedtest.com/selfhosted"></iframe>
            </div>
            <p className="text-center">
              Provided by{' '}
              <a href="https://openspeedtest.com" target="blank" rel="noopener noreferrer">
                OpenSpeedtest.com
              </a>
            </p>
          </div>
          <h2 className="text-2xl text-stone-800 font-bold mt-4 mb-3">Medidor de velocidade da conexão</h2>
          <p>Medidor de velocidade da conexão O Medidor ou SpeedTest é certificado pela OOKLA, empresa de tecnologia especialista em diagnóstico da Internet banda larga. O teste é oferecido de forma gratuita e possui servidores em todo o Brasil. Com isso, o ping entre o servidor e seu computador fica pequeno, garantindo uma analise mais rápida e confiável.</p>
          <h2 className="text-2xl text-stone-800 font-bold mt-4 mb-3">Medidor de velocidade da conexão</h2>
          <p>Medidor de velocidade da conexão O Medidor ou SpeedTest é certificado pela OOKLA, empresa de tecnologia especialista em diagnóstico da Internet banda larga. O teste é oferecido de forma gratuita e possui servidores em todo o Brasil. Com isso, o ping entre o servidor e seu computador fica pequeno, garantindo uma analise mais rápida e confiável.</p>
        </section>
        <aside className="text-gray-500">
          <div className="bg-white p-4 border border-gray-200 mb-9">
            <h2 className="text-lg font-bold mb-2 text-stone-800">Aviso</h2>
            <p className="text-gray-500">O Medir conexão não é site oficial vivo, copel ou de qualquer outro provedor de internet, o site é apenas um projeto pessoal para testar conhecimentos, utilizamos o mediro OpenSpeed Test e não temos qualquer responsabilidade sobre resultados ou serviços de provedores de internet</p>
          </div>
          <div className="bg-white p-4 border border-gray-200 mb-9">
            <h2 className="text-lg font-bold mb-2 text-stone-800">Instruções</h2>
            <p className="mb-2">Para que o teste seja o mais preciso possível siga as instruções abaixo:</p>
            <ul className="mb-2">
              <li className="pb-1">1 - Desconecte todos os aparelhos que usam internet e deixe conectado somente o aparelho que irá realizar o teste.</li>
              <li className="pb-1">2 - Interrompa todos os seus Downloads.</li>
              <li className="pb-1">3 - Não faça o teste conectado ao Wi-fi conecte o seu computador ou notebook a um cabo de rede.</li>
              <li className="pb-1">4 - Deixe aberta somente a aba que em que o teste está sendo feito.</li>
            </ul>
            <p>Deixe aberta somente a aba que em que o teste está sendo feito.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
