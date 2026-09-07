import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bioestimulador de colágeno no rosto | Dra. Paula Sian",
  description:
    "Entenda se o bioestimulador de colágeno é indicado para a sua pele. Avaliação dermatológica individualizada com a Dra. Paula Sian, em São Paulo.",
};

const whatsappHref =
  "https://wa.me/5511989682841?text=Ol%C3%A1!%20Vim%20da%20p%C3%A1gina%20sobre%20bioestimulador%20de%20col%C3%A1geno%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Paula.";

const concerns = [
  "Sinto meu rosto mais caído e menos firme.",
  "Emagreci e meu rosto ficou mais derretido.",
  "Minha pele perdeu o viço e parece mais fina.",
  "Vejo a flacidez começando e quero entender como cuidar.",
];

const faqs = [
  ["Em quanto tempo aparece o resultado?", "O bioestimulador age de forma gradual. Os primeiros efeitos costumam aparecer em algumas semanas e evoluem ao longo dos meses, porque é o seu próprio colágeno sendo produzido. Isso varia de pessoa para pessoa."],
  ["Quantas sessões são necessárias?", "Em geral, podem ser indicadas de 1 a 3 sessões, com intervalo de cerca de 30 a 45 dias. A quantidade e o intervalo dependem da avaliação do seu caso."],
  ["Bioestimulador vai deixar meu rosto redondo ou inchado?", "Ele não é um preenchedor e não adiciona volume imediato. A proposta é estimular colágeno e cuidar da firmeza e da qualidade da pele de maneira progressiva."],
  ["Emagreci com caneta e meu rosto mudou. O bioestimulador resolve?", "Ele pode fazer parte do cuidado da flacidez após a perda de peso, mas o plano depende do momento do seu emagrecimento, da sua pele e da sua anatomia. A consulta define o caminho com segurança."],
  ["Por que preciso de consulta antes?", "Porque cada pele conta uma história. A avaliação evita que você faça um procedimento que não é o mais indicado para a sua queixa — mesmo que tenha chegado à página procurando por bioestimulador."],
];

function WhatsAppButton({ label = "Agendar minha avaliação", light = false }: { label?: string; light?: boolean }) {
  return <a className={`button ${light ? "button-light" : ""}`} href={whatsappHref} target="_blank" rel="noreferrer" data-analytics-event="whatsapp_bioestimulador">{label}</a>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Pele com Alma — início"><Image src="/logo.svg" alt="Pele com Alma" width={161} height={46} priority /></a>
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
            <h1>Seu rosto <em>mudou</em> e você não se reconhece mais no espelho?</h1>
            <p className="hero-lede">Vamos entender o que a sua pele precisa — antes de indicar qualquer coisa.</p>
            <p className="hero-support">Bioestimulador pode ser um caminho. Mas a resposta honesta começa com uma avaliação, não com um kit pronto.</p>
            <WhatsAppButton />
            <div className="authority-line"><span className="authority-mark">✦</span><span><strong>Dra. Paula Sian</strong> · Dermatologista · 20 anos de experiência</span></div>
          </div>
          <div className="hero-portrait" aria-label="Vídeo da Dra. Paula Sian">
            <div className="hero-video-card">
              <Image src="/images/paula-jornada.webp" alt="Dra. Paula Sian em atendimento" width={700} height={467} priority className="hero-video-poster" />
              <div className="hero-video-overlay" aria-hidden="true" />
              <div className="hero-video-play" aria-hidden="true">▶</div>
              <div className="hero-video-meta"><strong>Vídeo da Dra. Paula</strong><span>Uma dermatologia que começa pela escuta</span></div>
            </div>
          </div>
        </div>
        <a className="scroll-hint" href="#incomoda" aria-label="Continuar lendo"><span>↓</span> entender antes de escolher</a>
      </section>

      <section className="concern-section" id="incomoda">
        <div className="container concern-grid">
          <div><p className="eyebrow">Antes do procedimento, vem a escuta</p><h2>O que te incomoda?</h2><p className="section-intro">Essa é uma das primeiras perguntas na consulta da Dra. Paula. Não para encaixar você em um procedimento, mas para entender a sua queixa de verdade.</p><div className="quote-block">“Às vezes o que está no estoque é mais indicado para você do que o que está na vitrine.”<span>— Dra. Paula Sian</span></div></div>
          <div className="concern-list">{concerns.map((concern) => <div className="concern-item" key={concern}><span className="check" aria-hidden="true">✓</span><span>{concern}</span></div>)}<p className="concern-footnote">Se você se reconheceu em alguma delas, a avaliação é o lugar certo para começar.</p></div>
        </div>
      </section>

      <section className="education-section">
        <div className="container"><div className="section-heading centered"><p className="eyebrow">Informação para decidir com calma</p><h2>O que é o bioestimulador de colágeno?</h2><p className="section-intro">É um injetável que estimula o seu próprio corpo a produzir colágeno novo, de dentro para fora. Diferente do preenchimento, o efeito é gradual e não acontece pela adição imediata de volume.</p></div>
          <div className="education-cards">
            <article className="education-card"><span className="card-number">01</span><h3>Para que costuma ser indicado</h3><p>Flacidez difusa, perda de sustentação, pele fina e queda na qualidade da pele. A indicação é sempre individual.</p></article>
            <article className="education-card featured-card"><span className="card-number">02</span><h3>Como ele age</h3><p>O organismo é estimulado a produzir colágeno. Por isso, a evolução é progressiva e varia conforme cada pessoa.</p></article>
            <article className="education-card"><span className="card-number">03</span><h3>Quais produtos existem</h3><p>Ácido poli-L-lático, como Sculptra, e hidroxiapatita de cálcio, como Radiesse, são exemplos. A escolha depende da avaliação.</p></article>
          </div>
        </div>
      </section>

      <section className="procedure-section" id="procedimento">
        <div className="container">
          <div className="section-heading procedure-heading">
            <p className="eyebrow">O que acontece na prática</p>
            <h2>Você entende cada etapa antes de decidir.</h2>
            <p className="section-intro">A aplicação é apenas uma parte do cuidado. Antes dela, existe avaliação, planejamento e uma indicação feita para a sua pele — não para uma tendência.</p>
          </div>
          <div className="procedure-grid">
            <article className="procedure-image-card procedure-application">
              <Image src="/images/procedimento-aplicacao.png" alt="Aplicação facial realizada por profissional habilitada em ambiente dermatológico" width={1536} height={1024} />
              <div className="procedure-image-caption"><span>02</span><strong>Aplicação cuidadosa</strong><small>técnica e precisão em cada etapa</small></div>
            </article>
            <article className="procedure-image-card procedure-evaluation">
              <Image src="/images/procedimento-avaliacao.png" alt="Avaliação e marcação da pele antes de um procedimento dermatológico" width={1536} height={1024} />
              <div className="procedure-image-caption"><span>01</span><strong>Avaliação e planejamento</strong></div>
            </article>
            <article className="procedure-image-card procedure-consultation">
              <Image src="/images/consultorio.webp" alt="Ambiente de consulta dermatológica" width={400} height={267} />
              <div className="procedure-image-caption"><span>03</span><strong>Acompanhamento</strong></div>
            </article>
          </div>
          <div className="procedure-note"><span>✦</span> As imagens são ilustrativas. O produto, a técnica, a área e o número de sessões são definidos somente após a avaliação médica.</div>
        </div>
      </section>

      <section className="doctor-video-section" id="video-dra-paula">
        <div className="container video-grid">
          <div className="video-copy">
            <p className="eyebrow">A Dra. Paula explica</p>
            <h2>Bioestimulador pode ser um caminho — mas não é uma resposta pronta.</h2>
            <p className="section-intro">Neste vídeo, a Dra. Paula fala sobre o que observar quando o rosto perde firmeza, por que a avaliação vem antes do procedimento e como construir expectativas reais.</p>
            <WhatsAppButton label="Agendar minha avaliação" />
          </div>
          <div className="video-placeholder" data-video-slot="dra-paula-bioestimulador" aria-label="Espaço reservado para o vídeo da Dra. Paula">
            <Image src="/images/paula-jornada.webp" alt="Dra. Paula Sian em atendimento" width={700} height={467} />
            <div className="video-overlay" aria-hidden="true" />
            <div className="video-play" aria-hidden="true">▶</div>
            <div className="video-label"><span>Vídeo da Dra. Paula</span><small>aprox. 45 segundos · inserir gravação aqui</small></div>
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="container comparison-grid"><div className="comparison-copy"><p className="eyebrow">Uma confusão comum</p><h2>Bioestimulador não é preenchimento.</h2><p className="section-intro">Os dois podem fazer parte de um plano, mas cumprem funções diferentes. O nome do procedimento não vem antes do diagnóstico.</p><WhatsAppButton label="Descobrir o que faz sentido para mim" light /></div>
          <div className="comparison-table" role="table" aria-label="Diferenças entre bioestimulador e preenchimento">
            <div className="table-row table-head" role="row"><div role="columnheader"> </div><div role="columnheader">Bioestimulador</div><div role="columnheader">Preenchimento</div></div>
            <div className="table-row" role="row"><div role="rowheader">O que faz</div><div role="cell">Estimula seu colágeno</div><div role="cell">Repõe volume em um ponto</div></div>
            <div className="table-row" role="row"><div role="rowheader">Resultado</div><div role="cell">Gradual, ao longo de semanas</div><div role="cell">Percebido logo após</div></div>
            <div className="table-row" role="row"><div role="rowheader">Melhor para</div><div role="cell">Flacidez e qualidade da pele</div><div role="cell">Volume localizado</div></div>
          </div>
        </div>
      </section>

      <section className="method-section"><div className="container method-grid"><div className="method-image-wrap"><Image src="/images/consulta.webp" alt="Atendimento e conversa durante uma consulta" width={4096} height={2732} className="method-image" /><div className="image-caption"><span>✦</span> cuidado que começa pela escuta</div></div><div className="method-copy"><p className="eyebrow">Como funciona</p><h2>Uma consulta para entender sua pele por inteiro.</h2><p className="section-intro">A Dra. Paula não indica um tratamento antes de examinar você. O plano nasce da sua história, das suas queixas e do que é possível construir com segurança.</p><div className="steps"><div className="step"><span>01</span><div><h3>Avaliação individual</h3><p>Entendemos sua pele, suas queixas, seu momento e seus objetivos.</p></div></div><div className="step"><span>02</span><div><h3>Plano personalizado</h3><p>Você conhece as possibilidades e o caminho pensado para o seu caso.</p></div></div><div className="step"><span>03</span><div><h3>Acompanhamento</h3><p>O cuidado continua durante todo o processo, com clareza em cada etapa.</p></div></div></div><WhatsAppButton /></div></div></section>

      <section className="paula-section" id="dra-paula"><div className="container paula-grid"><div className="paula-copy"><p className="eyebrow">Quem cuida de você</p><h2>Dermatologia clínica, estética e cirúrgica com um olhar individual.</h2><p className="section-intro">Formada em Medicina pela UNESP, com residência em Clínica Médica e Dermatologia e especialização pela UNIFESP, a Dra. Paula Sian construiu sua prática em torno de uma ideia simples: atender pessoas, não procedimentos.</p><div className="credentials"><div><strong>+20</strong><span>anos de dermatologia</span></div><div><strong>+10k</strong><span>pacientes atendidos</span></div><div><strong>5.0</strong><span>nota na Doctoralia</span></div></div><p className="legal-placeholder">Dra. Paula Sian · Dermatologista · CRM [confirmar] · RQE [confirmar]</p></div><div className="paula-image-wrap"><Image src="/images/paula-retrato.webp" alt="Dra. Paula Sian em seu consultório" width={700} height={1050} className="paula-image" /><div className="paula-stamp">verdade<br /><em>antes da vitrine</em></div></div></div></section>

      <section className="faq-section" id="duvidas"><div className="container faq-grid"><div className="faq-heading"><p className="eyebrow">Dúvidas comuns</p><h2>Antes de agendar, você pode perguntar.</h2><p className="section-intro">A resposta mais importante continua sendo individual: o que é indicado para você só aparece depois da avaliação.</p><WhatsAppButton label="Falar com a equipe" /></div><div className="faq-list">{faqs.map(([question, answer], index) => <details className="faq-item" key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="final-cta"><div className="container final-cta-inner"><p className="eyebrow">Seu próximo passo</p><h2>Sua pele merece ser cuidada com confiança.</h2><p>Agende uma avaliação dermatológica e descubra, com calma e honestidade, qual caminho faz sentido para você.</p><WhatsAppButton label="Agendar minha avaliação pelo WhatsApp" /><span className="cta-note">Mensagem pré-preenchida · atendimento em São Paulo</span></div></section>

      <footer className="site-footer"><div className="container footer-inner"><Image src="/logo.svg" alt="Pele com Alma" width={130} height={37} /><p>R. Sampaio Viana, 75 · Paraíso · São Paulo, SP</p><p>© 2026 Pele com Alma · Dra. Paula Sian</p></div></footer>
      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Agendar avaliação pelo WhatsApp">◔<span>Agendar avaliação</span></a>
    </main>
  );
}
