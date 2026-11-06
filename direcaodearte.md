# DIREÇÃO DE ARTE & DESIGN SYSTEM — SITES DE ALTO PADRÃO (ANTI-IA)

> **REGRA DE OURO:** A Home é o **cartão de visitas definitivo da autoescola: impressionante, minimalista e memorável**.
> O visitante que clica no link pelo WhatsApp no celular **NÃO PODE gastar energia mental tentando decifrar o site**.
> Em 3 segundos ele deve bater o olho, sentir que a autoescola é séria e de alto nível, e encontrar o botão para falar na secretaria.

---

## 1. FLUXO OBRIGATÓRIO: DESIGN SYSTEM & BANCOS DE EFEITOS NO GITHUB

Para evitar designs amadores ou interfaces genéricas com cara de inteligência artificial, a IA construtora deve seguir **obrigatoriamente este fluxo em 3 etapas**, utilizando os repositórios oficiais de referência:

```
┌────────────────────────────────────────────────────────────────────────┐
│ ETAPA 1: NÚCLEO DO DESIGN SYSTEM (Arquitetura, Tokens e Semântica)    │
│ ➔ Referências: Open Props (argyleink/open-props) + Pico.css (picocss)  │
├────────────────────────────────────────────────────────────────────────┤
│ ETAPA 2: BANCO DE COMPONENTES, MOTION E TRANSIÇÕES (Escolha Cirúrgica) │
│ ➔ Botões & Cards: Uiverse (uiverse-io/galaxy)                          │
│ ➔ Micro-Interações & Hover: Hover.css (IanLunn/Hover)                  │
│ ➔ Animações de Entrada: Animate.css (animate-css/animate.css)          │
├────────────────────────────────────────────────────────────────────────┤
│ ETAPA 3: CONSOLIDAÇÃO EM CSS PURO EMBUTIDO (Zero Inchaço e Sem Lag)    │
│ ➔ Injeção direta no <style> do index.html (Sem Tailwind CDN / Sem npm)│
└────────────────────────────────────────────────────────────────────────┘
```

### ETAPA 1: O Núcleo do Design System (Fundações e Tokens)
* **Repositório Central:** [`argyleink/open-props`](https://github.com/argyleink/open-props) + Estrutura Semântica de [`picocss/pico`](https://github.com/picocss/pico).
* **Como a IA deve aplicar:**
  1. No `:root` do CSS, a IA deve definir o Design System estruturado em **Design Tokens nativos**:
     - **Tipografia fluida:** Escalas proporcionais que se adaptam naturalmente entre mobile e desktop usando `clamp()`.
     - **Superfícies & Asfalto:** Níveis de elevação e profundidade física (`--surface-1`, `--surface-2`, `--border-subtle`).
     - **Cores de Sinalização:** Acentos funcionais viários (ex: Verde Placa L oficial `#009540`, Amarelo Tráfego `#FFD000`, WhatsApp `#25D366`).
     - **Sombras Físicas:** Sombras táteis e suaves inspiradas nos tokens de elevação do Open Props.
  2. A estrutura HTML deve ser estritamente semântica (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`), garantindo que o design se sustente com clareza mesmo antes dos efeitos.

### ETAPA 2: O Banco de Efeitos, Micro-Interações e Motion
A IA não deve inventar efeitos aleatórios do zero. Ela deve **consultar os catálogos dos repositórios abaixo**, escolher os elementos mais elegantes e adaptá-los para o tema da autoescola:

1. **Catálogo de Botões e Cards:** [`uiverse-io/galaxy`](https://github.com/uiverse-io/galaxy) *(Uiverse)*
   - **Botões:** Escolha um estilo magnético com efeito shimmer sutil, glow pulsante ou transição de luz para o botão de WhatsApp.
   - **Cards de Cursos:** Escolha cards táteis com gradientes de borda ativos no hover, efeito asfalto fosco ou bento grid refinado.
2. **Micro-Interações e Transições:** [`IanLunn/Hover`](https://github.com/IanLunn/Hover) *(Hover.css)*
   - Aplique efeitos suaves de hover para links, cards e botões (ex: elevação suave tipo `float-shadow`, expansão sutil `grow` ou preenchimento `sweep-to-right`).
3. **Animações de Entrada Suaves:** [`animate-css/animate.css`](https://github.com/animate-css/animate.css)
   - Utilize keyframes leves como `fadeInUp` para os tópicos do Hero e pulso sutil contínuo para o indicador de status da secretaria aberta.

### ETAPA 3: Regra de Ouro da Consolidação (Sem Conflitos e Sem Travamentos)
* **Extração Cirúrgica:** A IA **NUNCA deve carregar pacotes pesados inteiros de terceiros via CDN** que deixem o site lento ou travem a máquina.
* **CSS Nativo Consolidado:** A IA deve extrair apenas o CSS puro dos componentes e keyframes escolhidos e embuti-los harmoniosamente dentro da tag `<style>` do arquivo único `index.html`.

---

## 2. A REGRA DOS 3 SEGUNDOS (O CARTÃO DE VISITAS)

Em qualquer tela (especialmente no celular), a primeira dobra deve entregar apenas estes 3 dados essenciais:

1. **Quem É & Onde Fica:** Nome imponente + Bairro e Cidade (ex: `AUTOESCUELA LISAMA · PLA DEL BON REPÓS · ALICANTE`) + Selo oficial DGT.
2. **O Que Faz de Melhor:** Proposta de valor em **1 linha curta** (máximo 10 a 12 palavras). Ex: *"Formação técnica nas rotas reais de exame da DGT para o seu aprovado de primeira."*
3. **Canal Direto:** Botão de WhatsApp em destaque com status da secretaria em tempo real.

---

## 3. O ANTÍDOTO CONTRA SITES IGUAIS: 6 FORMATOS PARA A PRIMEIRA DOBRA

> **PROIBIÇÃO DE REPETIÇÃO:** Os 3 dados acima **NUNCA devem ser apresentados da mesma forma em todo site**.  
> A cada novo projeto, a IA deve escolher ou inventar entre estes 6 formatos visuais exclusivos:

```
┌────────────────────────────────────────────────────────────────────────┐
│ FORMATO 1: O TICKET / CARTÃO FÍSICO BRUTALISTA (Tátil & Objeto Real)   │
├────────────────────────────────────────────────────────────────────────┤
│ • O Hero é um cartão de papel grosso flutuante com sombra dura física  │
│   (box-shadow: 6px 6px 0px var(--asphalt)).                            │
│ • No topo do cartão: carimbo de aprovação oficial DGT + Nome da escola.│
│ • No meio: a proposta de valor em 1 linha em tipografia de trânsito.   │
│ • Na base: horário da secretaria e um botão com visual de chip de      │
│   ativação: [CONSULTAR MATRÍCULA NO WHATSAPP ↗].                       │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│ FORMATO 2: A CAPA DE REVISTA AUTOMOTIVA (Editorial Widescreen)         │
├────────────────────────────────────────────────────────────────────────┤
│ • O Nome da Autoescola ocupa toda a largura superior em caixa alta     │
│   monumental (fonte display gigante com tracking fino), como a capa    │
│   da Vogue ou revista automotiva européia.                             │
│ • Foto cinematográfica do carro ou aluna ocupando 65% da viewport.     │
│ • A proposta de valor e o botão vêm integrados em uma legenda suspensa │
│   translúcida no rodapé da imagem com o horário alinhado à direita.    │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│ FORMATO 3: A FACHADA DE BOUTIQUE / VITRINE URBANA (Local-First)        │
├────────────────────────────────────────────────────────────────────────┤
│ • Inspirada na placa luminosa minimalista de uma alfaiataria ou café. │
│ • O endereço físico do bairro vem primeiro em letras finas no topo     │
│   (ex: C/ CARDENAL PAYÁ, 8 · PLA DEL BON REPÓS · ALICANTE).            │
│ • O nome da autoescola vem em tipografia serifada ou grotesca refinada.│
│ • O botão de WhatsApp funciona como uma "Campainha Virtual" com status │
│   em tempo real: [SECRETARÍA ABIERTA · ENTRAR POR WHATSAPP ↗].         │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│ FORMATO 4: O COCKPIT DIGITAL / HUD DE PRECISÃO (Técnico Minimalista)   │
├────────────────────────────────────────────────────────────────────────┤
│ • Dividido em um grid 2x2 limpo por fios sutis de 1px (estilo painel). │
│ • Quadrante 1: Homologação DGT e nota real do Google Maps com estrelas.│
│ • Quadrante 2: Nome da Autoescola + modelo exato do carro de exame.    │
│ • Quadrante 3: Proposta de valor em 1 linha (rotas reais de exame).    │
│ • Quadrante 4: Botão tátil de WhatsApp contrastante em amarelo tráfego.│
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│ FORMATO 5: SPLIT-SCREEN 50/50 ASSIMÉTRICO (Equilíbrio Editorial)       │
├────────────────────────────────────────────────────────────────────────┤
│ • Coluna Esquerda (50%): Bloco de cor sólida profunda com tipografia   │
│   em alto contraste, proposta de valor e botões de contato.            │
│ • Coluna Direita (50%): Fotografia imersiva e natural de condução real │
│   ou aluna com a placa 'L' verde espanhola (sem poses de banco).       │
│ • No mobile, a imagem vira uma faixa de respiro elegante.              │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│ FORMATO 6: O PÔSTER SUÍÇO TIPOGRÁFICO (Zero Fotos na Primeira Dobra)   │
├────────────────────────────────────────────────────────────────────────┤
│ • Para autoescolas muito tradicionais (+30 anos): sem fotos no Hero.   │
│ • Impacto gerado 100% pelo peso e elegância da tipografia (ex: Barlow  │
│   Condensed 800) em fundo papel off-white (#F6F4EE) ou asfalto puro.   │
│ • Três faixas horizontais de leitura divididas por linhas pretas finas:│
│   Linha 1: Nome da Autoescola + "Centro Homologado DGT".               │
│   Linha 2: Proposta de valor em tamanho generoso de leitura rápida.    │
│   Linha 3: Horário contínuo de secretaria e botão de WhatsApp.         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. O CHECKLIST ANTI-IA (PROIBIÇÕES ABSOLUTAS)

Se o site tiver qualquer uma dessas falhas, ele tem "cara de IA genérica":

1. ❌ **Proibido a "Trinca de Cards com Ícone Redondo":** Nunca crie 3 caixas simétricas com "Instrutores / Frota / Aprovação". Use linhas técnicas, tabelas de 1 linha ou bento grids.
2. ❌ **Proibido Textão Filosófico:** Títulos com no máximo **6 a 8 palavras**. Subtítulos com no máximo **2 linhas**. Zero redações motivacionais sobre "o sonho da liberdade".
3. ❌ **Proibido Visual de SaaS / Hotmart:** Sem gradientes roxo/azul neon, sem pílulas piscando no topo tipo produto digital e sem widgets caóticos (calculadoras, 10 abas, simuladores complexos).
4. ❌ **Proibido Fotos Artificiais:** Use sempre fotos naturais e contextualizadas (aluno com placa 'L' verde espanhola oficial ou carros de autoescola europeus nas ruas da cidade). Nunca use carros de luxo na neve ou modelos americanos de banco de imagens.
5. ❌ **Proibido Mais de 5 Seções:** O site inteiro deve ser compacto e focado em fechar matrículas pelo WhatsApp:
   - 1. Cartão de Visitas (Hero em 1 dos 6 formatos)
   - 2. Cursos em Linhas Técnicas ou Fichas Viárias
   - 3. Método / Rotas DGT Oficiais da Cidade
   - 4. Sede Física, Horários, Mapa e WhatsApp
   - 5. Rodapé Institucional Sóbrio

---

## 5. TIPOGRAFIAS RECOMENDADAS (GOOGLE FONTS)

- **Editorial Viário Europeu (Padrão Autoescolas):** `Barlow Condensed` (Títulos) + `Plus Jakarta Sans` (Texto) + `JetBrains Mono` (Dados/Horários/DGT).
- **Boutique Sofisticada:** `Instrument Serif` ou `Fraunces` (Títulos) + `Plus Jakarta Sans` (Texto).
- **Engenharia & Técnica:** `Space Grotesk` (Títulos) + `Manrope` (Texto) + `Space Mono` (Dados).

---

## 6. DIRETRIZES TÉCNICAS E DE HARDWARE (MANDATÓRIO)

- **Arquivo Único:** Entregue sempre um único arquivo `index.html` com todo o CSS embutido na tag `<style>`.
- **Zero Inchaço:** **NÃO use** o script pesado do Tailwind via CDN (`cdn.tailwindcss.com`) e **NÃO use** filtros pesados de SVG (`feTurbulence`) que travam o processador da máquina.
- **Mobile-First:** 100% responsivo com botões confortáveis para o polegar no celular (`padding: 0.85rem` a `1.1rem`).
- **Links de WhatsApp Padronizados:** Todos os botões devem ter link direto:
  `https://wa.me/[NUMERO_SEM_ESPACOS]?text=[MENSAGEM_EM_ESPANHOL_CODIFICADA]`
- **PROIBIÇÃO ABSOLUTA DE NAVEGADOR AUTOMATIZADO:** Nunca utilize `browser_subagent`, Puppeteer, Playwright ou Chrome DevTools. Conclua o trabalho diretamente nos arquivos de código para não congelar a máquina do usuário.
