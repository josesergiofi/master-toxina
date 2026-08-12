const pillars = [
  ["01", "Anatomia", "Entenda o que existe abaixo de cada marcação."],
  ["02", "Dinâmica facial", "Observe força, expressão e movimento."],
  ["03", "Raciocínio clínico", "Interprete cada face individualmente."],
  ["04", "Aplicação", "Conecte teoria a decisões mais conscientes."],
];

const theoretical = [
  "História da Toxina Botulínica",
  "Mecanismo de Ação, Fisiologia, Tipos e Indicações",
  "Anatomia para Uso Seguro em Face e Pescoço",
  "Preparo, Diluição e Manuseio",
  "Aplicações Estéticas Clássicas",
  "Aplicações Avançadas",
  "Intercorrências no Uso da Toxina",
];

const practical = [
  "Reconstituição da Toxina",
  "Marcação e Aplicação Masculina",
  "Marcação Feminina — Caso 1",
  "Marcação Feminina — Caso 2",
  "Marcações de Pontos Avançados",
  "Aplicação em Pontos Avançados",
];

const bonuses = [
  ["01", "Planilha Smart Estética", "Pacientes, retornos, financeiro, leads e agenda.", "R$ 297"],
  ["02", "Ficha de Anamnese Estética", "Modelo estruturado para organizar informações.", "R$ 97"],
  ["03", "Plano de Tratamento + Contrato", "Materiais editáveis para estruturar o atendimento.", "R$ 197"],
  ["04", "Grupo VIP Anatomy in Motion", "Atualizações e novos casos clínicos semanais.", "R$ 497"],
];

const faqs = [
  ["Mas eu já fiz outros cursos.", "Ótimo. O Master Toxina foi pensado justamente para quem já conhece os pontos, mas ainda precisa adaptar o raciocínio quando o paciente muda."],
  ["Sou iniciante ou já aplico. Serve para mim?", "O curso começa pelos fundamentos e avança para aplicações clássicas e avançadas. Pode construir base para iniciantes e aprofundar o raciocínio de quem já atua."],
  ["O curso online substitui a prática presencial?", "Não. Ele oferece teoria, demonstrações e casos diferentes, mas não substitui treinamento presencial quando necessário para habilitação ou desenvolvimento técnico."],
  ["O curso elimina o risco de intercorrências?", "Não existe promessa de risco zero. Anatomia, fisiologia e intercorrências integram o programa para apoiar uma prática mais consciente e responsável."],
  ["Como funciona a garantia?", "Você tem sete dias para conhecer a proposta e as primeiras aulas e decidir se deseja permanecer, conforme as condições da plataforma e da oferta."],
];

function Cta({ label = "Quero conhecer o Anatomy in Motion" }: { label?: string }) {
  return <a className="cta" href="#oferta">{label}<span aria-hidden="true">↗</span></a>;
}

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Master Toxina — início">
          <span className="brand-mark">M</span>
          <span><strong>MASTER TOXINA</strong><small>Método Anatomy in Motion</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#metodo">O método</a><a href="#conteudo">Conteúdo</a><a href="#oferta">Oferta</a>
        </nav>
        <a className="header-cta" href="#oferta">Quero entrar</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><i /> Formação online para profissionais habilitados</div>
          <h1>Você aprendeu os pontos.<em>Mas aprendeu a decidir quando a face não segue o mapa?</em></h1>
          <p>Uma nova forma de aprender toxina botulínica: menos dependência de marcações decoradas e mais compreensão da anatomia, da dinâmica facial e do raciocínio clínico.</p>
          <Cta />
          <div className="hero-meta"><span><b>13</b> aulas</span><span><b>7 dias</b> de garantia</span><span><b>R$ 297</b> à vista</span></div>
        </div>
        <div className="hero-art" aria-label="Representação abstrata de uma face e seus pontos anatômicos">
          <span className="vertical-label">ANATOMY IN MOTION</span>
          <div className="face" aria-hidden="true">
            <i className="face-line f1" /><i className="face-line f2" /><i className="face-line f3" />
            <b className="dot d1" /><b className="dot d2" /><b className="dot d3" /><b className="dot d4" /><b className="dot d5" /><b className="dot d6" />
          </div>
          <div className="art-quote"><small>O mapa mostra um ponto.</small><strong>O raciocínio explica por quê.</strong></div>
          <div className="flow"><span>DECORAR</span><i>→</i><span>ENTENDER</span><i>→</i><span>AVALIAR</span><i>→</i><b>DECIDIR</b></div>
        </div>
      </section>

      <section className="pain wrap" id="problema">
        <div className="pain-copy">
          <div className="kicker">Você já fez outros cursos?</div>
          <h2>Você já estudou.<br /><em>Mas ainda não se sente seguro para decidir sozinho.</em></h2>
          <p>Você conhece as marcações clássicas. Então chega uma face diferente do paciente-modelo — e aparecem as dúvidas.</p>
          <div className="question-chips"><span>“Marco mais alto?”</span><span>“Mudo a abordagem?”</span><span>“Estou respeitando a anatomia?”</span></div>
          <p className="pain-conclusion">Talvez você tenha aprendido o desenho, mas não o raciocínio por trás dele.</p>
        </div>
        <blockquote>
          <span>BIG IDEA</span>
          “O paciente real não vem com os pontos do seu curso desenhados no rosto.”
          <small>A anatomia engessada funciona até o paciente mudar.</small>
        </blockquote>
      </section>

      <section className="method" id="metodo">
        <div className="wrap">
          <div className="section-head dark-head">
            <div><div className="kicker light">Uma nova forma de aprender</div><h2>Método <em>Anatomy in Motion</em></h2></div>
            <div className="question-shift"><small>Em vez de apenas perguntar</small><del>“Onde eu aplico?”</del><strong>“Por que esta decisão faz sentido neste paciente?”</strong></div>
          </div>
          <div className="pillars">
            {pillars.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="transformation">
            <div><small>ANTES</small><p>“Repito os mesmos pontos e espero que a face seja familiar.”</p></div>
            <i>→</i>
            <div><small>DEPOIS</small><p>“Observo anatomia e movimento para compreender a decisão.”</p></div>
          </div>
        </div>
      </section>

      <section className="course wrap" id="conteudo">
        <div className="section-head">
          <div><div className="kicker">Por dentro do treinamento</div><h2>Teoria para entender.<br /><em>Prática para conectar.</em></h2></div>
          <div className="fit-card"><strong>Para quem é</strong><p>Médicos, cirurgiões-dentistas e biomédicos habilitados — iniciantes ou profissionais que desejam aprofundar seu raciocínio.</p><small>Não é para quem busca fórmula infalível, risco zero ou apenas novos pontos para copiar.</small></div>
        </div>
        <div className="modules">
          <article>
            <div className="module-title"><b>7</b><span>AULAS<br />TEÓRICAS</span></div>
            <ol>{theoretical.map((lesson) => <li key={lesson}>{lesson}</li>)}</ol>
          </article>
          <article>
            <div className="module-title"><b>6</b><span>AULAS<br />PRÁTICAS</span></div>
            <ol>{practical.map((lesson) => <li key={lesson}>{lesson}</li>)}</ol>
            <div className="two-faces">Dois casos femininos diferentes mostram, na prática, por que não existe um único rosto e um único mapa.</div>
          </article>
        </div>
      </section>

      <section className="bonus-section">
        <div className="wrap">
          <div className="section-head dark-head compact-head">
            <div><div className="kicker light">Curso + continuidade</div><h2>A aula termina.<br /><em>O aprendizado continua.</em></h2></div>
            <p>Além do treinamento, você recebe ferramentas para organizar sua prática e entra em um ambiente de atualização contínua.</p>
          </div>
          <div className="bonus-grid">
            {bonuses.map(([n, title, text, value], index) => (
              <article className={index === 3 ? "vip-card" : ""} key={n}>
                <span>BÔNUS {n}</span><h3>{title}</h3><p>{text}</p><strong>Valor de referência: {value}</strong>
              </article>
            ))}
          </div>
          <div className="weekly"><b>NOVOS CASOS, TODA SEMANA</b><span>Quanto mais faces você aprende a observar, menos dependente fica de um único mapa.</span></div>
          <small className="legal-docs">Modelos e documentos devem ser adaptados à realidade do profissional, às normas aplicáveis e, quando necessário, submetidos à análise jurídica.</small>
        </div>
      </section>

      <section className="offer" id="oferta">
        <div className="wrap">
          <div className="offer-head"><div className="kicker center">Condição da turma de lançamento</div><h2>A experiência completa.<br /><em>Sem pagar por cada parte separadamente.</em></h2></div>
          <div className="offer-card">
            <div className="stack">
              <div><span>Master Toxina — curso completo</span><b>R$ 997</b></div>
              <div><span>Planilha Smart Estética</span><b>R$ 297</b></div>
              <div><span>Ficha de Anamnese Estética</span><b>R$ 97</b></div>
              <div><span>Plano de Tratamento + Contrato</span><b>R$ 197</b></div>
              <div><span>Grupo VIP + casos semanais</span><b>R$ 497</b></div>
              <div className="stack-total"><span>Valor total de referência</span><b>R$ 2.085</b></div>
              <small>Valores de referência percebidos para composição da oferta; não representam necessariamente vendas individuais anteriores.</small>
            </div>
            <div className="price">
              <span>Você não paga R$ 997.<br />Nem R$ 697. Nem R$ 497.</span>
              <small>HOJE, À VISTA</small>
              <strong><sup>R$</sup>297</strong>
              <p>ou parcelamento disponível no checkout</p>
              <a className="cta offer-cta" href="#oferta">Quero entrar para o Master Toxina <span>↗</span></a>
              <b>✓ 7 dias de garantia</b>
            </div>
          </div>
          <div className="investment-note">
            <strong>O investimento pode ser menor que o valor de um atendimento.</strong>
            <p>Valores de aplicação variam. Dependendo do preço praticado, o faturamento bruto de um atendimento poderá superar R$ 297 — sem promessa de retorno ou lucro.</p>
          </div>
        </div>
      </section>

      <section className="faq-final wrap" id="faq">
        <div className="faq-copy">
          <div className="kicker">Antes de decidir</div>
          <h2>As dúvidas mais importantes, <em>sem rodeios.</em></h2>
          <div className="faq-list">
            {faqs.map(([q, a], index) => <details key={q} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{q}<b>+</b></summary><p>{a}</p></details>)}
          </div>
        </div>
        <aside className="final-card">
          <span>MASTER TOXINA</span>
          <h2>Faces diferentes não deveriam ser tratadas como se fossem iguais.</h2>
          <p>Talvez você não precise de mais um mapa. Talvez precise entender o que está por trás dele.</p>
          <Cta label="Quero entrar para o Master Toxina" />
          <small>R$ 297 à vista · 7 dias de garantia</small>
        </aside>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="brand"><span className="brand-mark">M</span><span><strong>MASTER TOXINA</strong><small>Método Anatomy in Motion</small></span></div>
          <p>Conteúdo educacional para profissionais legalmente habilitados. Não garante resultados clínicos, ausência de intercorrências, habilitação ou retorno financeiro.</p>
        </div>
      </footer>
      <a className="mobile-bar" href="#oferta"><span>Master Toxina · R$ 297</span><strong>Quero entrar →</strong></a>
    </main>
  );
}
