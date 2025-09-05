    document.addEventListener('DOMContentLoaded', function() {
      const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
      const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
      const alternaContraste = document.getElementById('alterna-contraste');
      const aumentaFonteBotao = document.getElementById('aumentar-fonte');
      const diminuiFonteBotao = document.getElementById('diminuir-fonte');

      let tamanhoAtualFonte = 1;
      let temaAtual = "escuro";

      botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        const aberto = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', String(!aberto));
      });

      aumentaFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte = Math.min(1.6, tamanhoAtualFonte + 0.1);
        document.body.style.fontSize = tamanhoAtualFonte + 'rem';
      });

      diminuiFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte = Math.max(0.8, tamanhoAtualFonte - 0.1);
        document.body.style.fontSize = tamanhoAtualFonte + 'rem';
      });

      alternaContraste.addEventListener('click', function() {
        if (temaAtual === "escuro") {
          document.body.classList.add('alto-contraste');
          temaAtual = "contraste";
        } else {
          document.body.classList.remove('alto-contraste');
          temaAtual = "escuro";
        }
      });

      document.querySelectorAll('section').forEach(sec => {
        sec.setAttribute('tabindex','0');
      });

      if (window.ScrollReveal) {
        const sr = ScrollReveal({
          distance: '40px',
          duration: 800,
          easing: 'ease-out',
          origin: 'bottom',
          reset: false
        });

        sr.reveal('.hero h1', {origin: 'left', delay:100});
        sr.reveal('.hero .lead', {origin: 'left', delay:200});
        sr.reveal('.hero p', {origin: 'left', delay:300});
        sr.reveal('.hero .hero-actions', {origin: 'left', delay:400});
        sr.reveal('.hero-img', {origin: 'right', delay:500});
        sr.reveal('#sobre .card-decorator', {origin:'bottom', delay:150});
        sr.reveal('#historia .section-title', {origin:'left', delay:100});
        sr.reveal('#historia .section-sub', {origin:'left', delay:200});
        sr.reveal('.timeline-item', {interval:150, origin:'bottom'});
        sr.reveal('#legado .card-decorator', {origin:'bottom', delay:150});
        sr.reveal('.legado-item', {interval:150, origin:'bottom'});
        sr.reveal('#galeria .section-title', {origin:'left', delay:100});
        sr.reveal('#galeria .section-sub', {origin:'left', delay:200});
        sr.reveal('#galeria .card', {interval:150, origin:'bottom'});
        sr.reveal('#discografia .section-title', {origin:'left', delay:100});
        sr.reveal('#discografia .section-sub', {origin:'left', delay:200});
        sr.reveal('.disco', {interval:150, origin:'bottom'});
        sr.reveal('#contato .section-title', {origin:'left', delay:100});
        sr.reveal('#contato .formulario', {origin:'bottom', delay:200});
        sr.reveal('footer p, footer div', {interval:120, origin:'bottom'});
      }
    });
