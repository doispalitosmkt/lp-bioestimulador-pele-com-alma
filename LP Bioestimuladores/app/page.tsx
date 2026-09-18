import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bioestimulador de colágeno no rosto | Dra. Paula Sian",
  description:
    "Eu avalio a sua pele e explico se o bioestimulador de colágeno faz sentido para você. Dra. Paula Sian, dermatologista em São Paulo.",
};

const whatsappHref =
  "https://wa.me/5511989682841?text=Ol%C3%A1!%20Vim%20da%20p%C3%A1gina%20sobre%20bioestimulador%20de%20col%C3%A1geno%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Paula.";

const concerns = [
  "Meu rosto parece menos firme.",
  "Emagreci e notei a pele mais flácida.",
  "Minha pele perdeu viço e sustentação.",
  "Quero cuidar dos primeiros sinais de flacidez.",
];

const faqs = [
  ["Dói? E quanto tempo pode durar?", "Pode haver desconforto na aplicação. Eu converso sobre formas de reduzi-lo e explico o que esperar. Com alguns produtos, o efeito pode chegar a cerca de dois anos, mas a duração varia e não é uma promessa para todos os casos."],
  ["Em quanto tempo percebo o resultado?", "Eu explico que o efeito é gradual e costuma evoluir ao longo de semanas e meses. O ritmo depende da sua pele e do plano de tratamento."],
  ["Quantas sessões vou precisar?", "Eu defino o número de sessões e os intervalos depois de examinar a sua pele. Não trabalho com uma quantidade igual para todas as pessoas."],
  ["Bioestimulador vai deixar meu rosto inchado?", "Bioestimulador e preenchimento têm objetivos diferentes. Eu avalio se a sua queixa pede estímulo de colágeno, reposição de volume ou outro cuidado."],
  ["Emagreci com caneta e meu rosto mudou. Ele é indicado?", "A perda de peso, inclusive com medicações, pode mudar o aspecto do rosto. Eu avalio a flacidez, a anatomia e o momento do emagrecimento antes de indicar qualquer tratamento."],
];

function PaulaVideo({ number, topic, className = "" }: { number: number; topic: string; className?: string }) {
  const fileNumber = String(number).padStart(2, "0");

  return (
    <div className={`portrait-video-card ${className}`}>
      <video controls playsInline preload="metadata" poster={`/videos/dra-paula-${fileNumber}.png`} aria-label={`Vídeo da Dra. Paula: ${topic}`}>
        <source src={`/videos/dra-paula-${fileNumber}.mp4`} type="video/mp4" />
        Seu navegador não oferece suporte à reprodução de vídeo.
      </video>
    </div>
  );
}

function WhatsAppButton({ label = "Agendar minha avaliação", light = false }: { label?: string; light?: boolean }) {
  return <a className={`button ${light ? "button-light" : ""}`} href={whatsappHref} target="_blank" rel="noreferrer" data-analytics-event="whatsapp_bioestimulador">{label}</a>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Pele com Alma, início"><Image src="/logo.svg" alt="Pele com Alma" width={161} height={46} priority /></a>
          <nav className="site-nav" aria-label="Menu">
            <a href="#inicio">Início</a>
            <a href="#procedimento">Serviços</a>
            <a href="#dra-paula">Dra. Paula</a>
            <a href="#duvidas">FAQs</a>
          </nav>
          <WhatsAppButton label="Agendar consulta" />
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Bioestimulador de colágeno no rosto</p>
            <h1><span className="hero-title-primary">Seu rosto <em>mudou.</em></span><span className="hero-title-secondary">E você não se reconhece mais no espelho?</span></h1>
            <p className="hero-lede">Antes de indicar qualquer procedimento, eu escuto sua história e avalio o que a sua pele precisa.</p>
            <p className="hero-support">O bioestimulador pode ser um caminho. A resposta começa na consulta, não em uma fórmula pronta.</p>
            <WhatsAppButton />
            <div className="authority-line"><span className="authority-mark" aria-hidden="true">PS</span><span><strong>Dra. Paula Sian Lopes</strong><br />Dermatologista <span className="authority-divider">·</span> CRM-SP 111963 <span className="authority-divider">·</span> RQE 38348</span></div>
          </div>
          <div className="hero-portrait">
            <PaulaVideo number={1} topic="introdução ao cuidado com bioestimuladores" className="hero-video-card" />
          </div>
        </div>
        <a className="scroll-hint" href="#incomoda" aria-label="Continuar lendo"><span>↓</span> entender antes de escolher</a>
      </section>

      <section className="concern-section" id="incomoda">
        <div className="container concern-grid">
          <div className="concern-content"><p className="eyebrow">Antes do procedimento, vem a escuta</p><h2>O que te incomoda?</h2><p className="section-intro">Essa é uma das primeiras perguntas que faço na consulta. Quero entender a sua queixa antes de pensar em um procedimento.</p><div className="concern-list">{concerns.map((concern) => <div className="concern-item" key={concern}><span className="check" aria-hidden="true">✓</span><span>{concern}</span></div>)}<p className="concern-footnote">Se você se reconheceu em alguma dessas situações, eu posso avaliar o seu caso.</p></div></div>
          <PaulaVideo number={4} topic="em quais casos o bioestimulador pode ser indicado" className="concern-video" />
        </div>
      </section>

      <section className="education-section">
        <div className="container"><div className="education-intro"><div className="section-heading"><p className="eyebrow">Informação para decidir com calma</p><h2>O que é o bioestimulador de colágeno?</h2><p className="section-intro">Eu explico o bioestimulador como um tratamento injetável que estimula a produção de colágeno. Seu efeito é gradual. Ele não é a mesma coisa que um preenchimento.</p></div><figure className="education-photo"><Image src="/images/avaliacao-pele-pexels.jpg" alt="Profissional de saúde examinando a pele do rosto de uma mulher" width={1125} height={750} /></figure></div>
          <div className="education-cards">
            <article className="education-card"><span className="card-kicker">Quando considero</span><h3>Firmeza e qualidade da pele</h3><p>Eu avalio flacidez e perda de sustentação, inclusive quando o rosto muda após emagrecimento com medicações.</p></article>
            <article className="education-card featured-card"><span className="card-kicker">O que acontece</span><h3>Estímulo gradual</h3><p>Eu explico que o organismo produz colágeno ao longo do tempo. A evolução e a resposta variam de pessoa para pessoa.</p></article>
            <article className="education-card"><span className="card-kicker">Como escolho</span><h3>Produto e sessões para você</h3><p>Eu avalio a área, a anatomia e os seus objetivos para definir o produto e o número de sessões. Não existe um protocolo único.</p></article>
          </div>
        </div>
      </section>

      <section className="procedure-section" id="procedimento">
        <div className="container">
          <div className="section-heading procedure-heading">
            <p className="eyebrow">O que acontece na prática</p>
            <h2>O tratamento não começa na aplicação.</h2>
            <p className="section-intro">Primeiro eu entendo a sua queixa e examino a pele. Se o bioestimulador for indicado, explico o produto, a técnica e os cuidados antes de começarmos.</p>
          </div>
          <div className="procedure-grid">
            <figure className="procedure-image-card">
              <Image src="/images/consulta-espelho-pexels.jpg" alt="Mulher observando o rosto em um espelho durante uma avaliação de pele" width={500} height={750} />
              <figcaption><span>Primeiro passo</span><strong>Escuta e avaliação</strong><small>Eu começo pelo que você percebe na sua pele.</small></figcaption>
            </figure>
            <figure className="procedure-image-card">
              <Image src="/images/aplicacao-suave-pexels.jpg" alt="Mulher durante um atendimento estético facial" width={500} height={750} />
              <figcaption><span>Quando indicado</span><strong>Aplicação planejada</strong><small>Eu explico o que será feito e acompanho a evolução.</small></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="doctor-video-section" id="video-dra-paula">
        <div className="container video-grid">
          <div className="video-copy">
            <p className="eyebrow">Um plano para cada pessoa</p>
            <h2>Eu analiso cada caso. Não sigo uma receita pronta.</h2>
            <p className="section-intro">Neste vídeo, conto por que a indicação depende da sua pele, da sua história e do resultado que você deseja.</p>
            <WhatsAppButton label="Agendar minha avaliação" />
          </div>
          <PaulaVideo number={2} topic="por que cada caso precisa de uma avaliação individual" className="doctor-video" />
        </div>
      </section>

      <section className="comparison-section">
        <div className="container comparison-grid">
          <div className="comparison-copy">
            <p className="eyebrow">Uma confusão comum</p>
            <h2>Bioestimulador não é preenchimento.</h2>
            <p className="section-intro">Eu posso considerar os dois em um plano de cuidado, mas eles cumprem funções diferentes. Primeiro avalio; depois explico as opções.</p>
          </div>
          <PaulaVideo number={3} topic="o que é bioestimulador e por que ele não é preenchimento" className="comparison-video" />
          <div className="comparison-data">
            <div className="comparison-table" role="table" aria-label="Diferenças entre bioestimulador e preenchimento">
              <div className="table-row table-head" role="row"><div role="columnheader">Aspecto</div><div role="columnheader">Bioestimulador</div><div role="columnheader">Preenchimento</div></div>
              <div className="table-row" role="row"><div role="rowheader">Ação principal</div><div role="cell">Estimula a produção de colágeno</div><div role="cell">Repõe volume em áreas específicas</div></div>
              <div className="table-row" role="row"><div role="rowheader">Quando percebo</div><div role="cell">Mudança gradual</div><div role="cell">Efeito geralmente imediato</div></div>
              <div className="table-row" role="row"><div role="rowheader">O que avalio</div><div role="cell">Firmeza e qualidade da pele</div><div role="cell">Perda de volume localizada</div></div>
            </div>
            <WhatsAppButton label="Descobrir o que faz sentido para mim" light />
          </div>
        </div>
      </section>

      <section className="method-section"><div className="container"><div className="method-heading"><p className="eyebrow">Como funciona comigo</p><h2>Da primeira conversa ao acompanhamento.</h2><p className="section-intro">Eu examino sua pele antes de indicar qualquer tratamento. Assim, você entende o motivo de cada decisão.</p></div><div className="method-grid"><div className="method-image-wrap"><Image src="/images/paula-consultorio-oficial.jpg" alt="Dra. Paula Sian em seu consultório" width={749} height={560} className="method-image" /></div><div className="method-copy"><div className="steps"><div className="step"><span>01</span><div><h3>Eu escuto e examino</h3><p>Conversamos sobre suas queixas, seu momento e o que você deseja mudar.</p></div></div><div className="step"><span>02</span><div><h3>Eu explico o plano</h3><p>Apresento as possibilidades e digo com clareza quando o bioestimulador não é a melhor escolha.</p></div></div><div className="step"><span>03</span><div><h3>Eu acompanho a evolução</h3><p>Se decidirmos pelo tratamento, sigo com você nas etapas e reavaliações.</p></div></div></div><WhatsAppButton /></div></div></div></section>

      <section className="paula-section" id="dra-paula">
        <div className="container">
          <div className="paula-grid">
            <div className="paula-copy">
              <p className="eyebrow">Quem cuida de você</p>
              <h2>Sou a Dra. Paula. Cuido da sua pele por inteiro.</h2>
              <p className="section-intro">Sou médica formada pela UNESP, com residência em Clínica Médica e Dermatologia e especialização pela UNIFESP. Na minha prática, começo pela pessoa, não pelo procedimento.</p>
              <div className="credentials"><div><strong>+18</strong><span>anos de dermatologia</span></div><div><strong>+10 mil</strong><span>pacientes atendidos</span></div><div><strong>5,0</strong><span>nota na Doctoralia</span></div></div>
              <p className="doctor-registration">Dra. Paula Sian Lopes · CRM-SP 111963 · RQE 38348</p>
            </div>
            <div className="paula-image-wrap"><Image src="/images/paula-retrato-oficial.jpg" alt="Retrato da Dra. Paula Sian Lopes" width={1365} height={2048} className="paula-image" /></div>
          </div>

          <div className="services-block">
            <div className="services-intro">
              <p className="eyebrow">Além dos bioestimuladores</p>
              <h3>Também cuido de outras questões da sua pele.</h3>
              <p>Conheça algumas áreas em que posso ajudar você, sempre a partir de uma avaliação individual.</p>
            </div>
            <div className="services-grid">
              <article className="service-card"><Image src="/images/service-acne.webp" alt="Rosto de uma mulher em close" width={800} height={600} /><div className="service-copy"><span>Dermatologia clínica</span><h4>Acne e cicatrizes</h4><p>Eu avalio a origem e monto um cuidado adequado à sua pele.</p></div></article>
              <article className="service-card"><Image src="/images/service-pigmentacao.webp" alt="Rosto de uma mulher com sardas" width={800} height={600} /><div className="service-copy"><span>Pigmentação</span><h4>Manchas e melasma</h4><p>Eu considero sua rotina e a resposta da pele ao planejar o cuidado.</p></div></article>
              <article className="service-card"><Image src="/images/service-cabelo.webp" alt="Aplicação de sérum no couro cabeludo" width={800} height={600} /><div className="service-copy"><span>Saúde capilar</span><h4>Queda de cabelo</h4><p>Eu investigo possíveis causas antes de propor um tratamento.</p></div></article>
              <article className="service-card"><Image src="/images/avaliacao-pele-pexels.jpg" alt="Profissional examinando a pele de uma mulher" width={1125} height={750} /><div className="service-copy"><span>Dermatologia cirúrgica</span><h4>Lesões de pele</h4><p>Eu examino e explico quando um procedimento pode ser necessário.</p></div></article>
              <article className="service-card"><Image src="/images/consulta-espelho-pexels.jpg" alt="Mulher observando a pele no espelho" width={500} height={750} /><div className="service-copy"><span>Prevenção</span><h4>Saúde da pele</h4><p>Eu acompanho sua pele também fora dos procedimentos estéticos.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="duvidas">
        <div className="container faq-grid">
          <div className="faq-heading">
            <div className="faq-heading-copy">
              <p className="eyebrow">Dúvidas comuns</p>
              <h2>Antes de agendar, você pode perguntar.</h2>
              <p className="section-intro">Neste vídeo, respondo às perguntas que mais escuto sobre dor, resultado e duração do tratamento.</p>
            </div>
            <WhatsAppButton label="Falar com a equipe" />
          </div>
          <PaulaVideo number={5} topic="perguntas frequentes sobre dor e duração do bioestimulador" className="faq-video" />
          <div className="faq-list">{faqs.map(([question, answer], index) => <details className="faq-item" key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta"><div className="container final-cta-inner"><p className="eyebrow">Seu próximo passo</p><h2>Vamos cuidar da sua pele com confiança?</h2><p>Na consulta, eu avalio seu caso e explico, com calma e honestidade, qual caminho faz sentido para você.</p><WhatsAppButton label="Agendar minha avaliação pelo WhatsApp" /></div></section>

      <footer className="site-footer"><div className="container footer-inner"><Image src="/logo.svg" alt="Pele com Alma" width={130} height={37} /><p>R. Sampaio Viana, 75 · Paraíso · São Paulo, SP</p><p>© 2026 Pele com Alma · Dra. Paula Sian</p></div></footer>
    </main>
  );
}
