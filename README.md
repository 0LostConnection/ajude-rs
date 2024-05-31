# Desafio Cajuí Collab - Ajude RS 

Este repositório contém o código do **Desafio de Habilidade** do processo seletivo da empresa júnior [**Cajuí Collab**](https://www.instagram.com/cajuicollab).

## Índice
- [Desafio Cajuí - Ajude RS](#desafio-cajuí---ajude-rs)
  - [Objetivo](#objetivo)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
    - [Design/Prototipagem](#designprototipagem)
    - [Programação](#programação)
  - [Protótipo no Figma](#protótipo-no-figma)
  - [Iniciando pela primeira vez](#iniciando-pela-primeira-vez)
  - [Devlog](#devlog)
    - [Planejamento Inicial](#planejamento-inicial)
    - [Desenvolvimento](#desenvolvimento)
      - [Prototipagem](#prototipagem)
      - [Implementação de Código](#implementação-de-código)
    - [Principais Desafios](#principais-desafios)
  - [Lições Aprendidas](#lições-aprendidas)
    - [Aprimoramento de Habilidades Técnicas](#aprimoramento-de-habilidades-técnicas)
    - [Ferramentas e Tecnologias](#ferramentas-e-tecnologias)
    - [Gerenciamento de Tempo e Recursos](#gerenciamento-de-tempo-e-recursos)
    - [Melhoria Contínua](#melhoria-contínua)
  - [Melhorias Futuras](#melhorias-futuras)
    - [Refatoração de Código](#refatoração-de-código)
    - [Melhor Uso do React](#melhor-uso-do-react)
    - [Acessibilidade e Usabilidade](#acessibilidade-e-usabilidade)
    - [Otimização para Diferentes Telas](#otimização-para-diferentes-telas)
    - [Práticas de SEO](#práticas-de-seo)
## Objetivo
Desenvolver uma landing page responsiva para promover um projeto de ajuda às pessoas que estão passando por dificuldades no Rio Grande do Sul. O site deverá incentivar doações de itens essenciais e suporte comunitário.
## Tecnologias Utilizadas

### Design/Prototipagem
- Figma
- ChatGPT
- Google Earth Studio

### Programação
- TeleportHQ
- React
- CSS
## Protótipo no Figma
[Abrir no Figma](https://www.figma.com/proto/30bSvEYcxWoe0Taim0C7gk/Projeto---Ajude-RS?node-id=1-236&t=2XiUTq0kXg2F8Rmr-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A236)<br>
<sub>
Link curto: <a href="https://lost-url.vercel.app/KuuG">https://lost-url.vercel.app/KuuG</a>
</sub>
## Iniciando pela primeira vez

### Instalando dependências
> **Node**
> ```bash
>   npm install
> ```

> **Bun**
> ```bash
>   bun install
> ```

### Iniciando o projeto
> **Node**
> ```bash
>   npm run start
> ```

> **Bun**
> ```bash
>   bun start
> ```

Agora você poderá visualizar o projeto no seu navegador.
```
  Local:            http://localhost:3000
```
## Devlog

### Planejamento Inicial
O objetivo inicial era criar um protótipo da landing page no Figma e, em seguida, recriá-la utilizando React. Esta abordagem permitiria um design bem estruturado antes de partir para a implementação do código.

### Desenvolvimento

#### Prototipagem
A primeira etapa foi buscar inspirações de landing pages para definir um estilo e uma estrutura visual. Utilizei o Figma para criar o design, empregando grids para garantir uma interface organizada e coerente. Além disso, utilizei a ferramenta ChatGPT para auxiliar na criação do conteúdo textual da página.

#### Implementação de Código
Inicialmente, comecei a recriar a landing page do zero utilizando React. No entanto, devido a alguns problemas pessoais, perdi um tempo significativo no desenvolvimento. Para recuperar o atraso, decidi utilizar o [**TeleportHQ**](https://teleporthq.io/), um plugin que permite exportar o protótipo diretamente em código.

### Principais Desafios
O uso do plugin **TeleportHQ** facilitou a geração do código, mas trouxe alguns desafios. O código gerado era desorganizado e pouco otimizado, o que exigiu uma revisão completa. Tive que analisar cuidadosamente o código exportado e realizar diversas alterações para que ele ficasse o mais próximo possível do protótipo original.

Apesar desses desafios, consegui implementar a estrutura básica da landing page conforme planejado. Embora não tenha sido possível concluir todas as funcionalidades desejadas, o essencial está pronto e funcional.
## Lições Aprendidas
Durante o desenvolvimento deste projeto, obtive várias percepções valiosas que melhoraram minhas habilidades e processos:

### Aprimoramento de Habilidades Técnicas
- **CSS e HTML**: A experiência de trabalhar com o design no Figma e depois implementá-lo em código reforçou significativamente meu entendimento de CSS e HTML. Aprendi técnicas avançadas de layout e design responsivo, além de melhorar minha capacidade de criar interfaces visualmente atraentes e funcionalmente eficazes.

### Ferramentas e Tecnologias
- **Uso de Plugins para Exportação de Código**: A utilização do TeleportHQ me expôs às vantagens e limitações dos plugins de exportação de código. Entendi que, embora possam acelerar o processo inicial, a qualidade do código gerado pode exigir ajustes manuais para otimização e organização.
- **Figma**: Aprimorei minhas habilidades no Figma, especialmente no uso de grids e na criação de designs consistentes. A integração com ferramentas de conteúdo, como o ChatGPT, também se mostrou valiosa para criar conteúdo de maneira eficiente.

### Gerenciamento de Tempo e Recursos
- **Planejamento e Adaptação**: A experiência de lidar com contratempos pessoais durante o desenvolvimento destacou a importância de planejar *buffers* de tempo para imprevistos. Aprendi a ser mais flexível e a adaptar minhas estratégias para garantir a entrega dos elementos essenciais do projeto dentro dos prazos.

### Melhoria Contínua
- **Revisão e Otimização de Código**: A necessidade de revisar e otimizar o código exportado me ensinou a importância de manter um padrão de qualidade no desenvolvimento. Aprendi a avaliar criticamente o código gerado automaticamente e a fazer as alterações necessárias para melhorar a eficiência e a legibilidade.
## Melhorias Futuras

Para aprimorar ainda mais o projeto, identifiquei algumas áreas-chave que precisam de melhorias:

### Refatoração de Código
- **Estrutura do Código JSX e CSS**: Pretendo refatorar toda a estrutura do código JSX e CSS para reduzir o tamanho e melhorar a organização. Isso incluirá a remoção de código redundante e a simplificação das classes CSS para garantir um estilo mais consistente e eficiente.

### Melhor Uso do React
- **Criação de Componentes Reutilizáveis**: Vou aproveitar melhor os benefícios do React, criando componentes reutilizáveis. Isso facilitará a criação repetitiva de elementos semelhantes, como botões, cards e seções da página, tornando o código mais modular e fácil de manter.
- **Divisão de Componentes**: Dividirei componentes grandes em componentes menores e mais gerenciáveis. Isso não só tornará o código mais limpo, mas também permitirá uma melhor reutilização e testes mais fáceis.

### Acessibilidade e Usabilidade
- **Melhorias na Acessibilidade**: Trabalharei para melhorar a acessibilidade da página, garantindo que ela esteja em conformidade com os padrões WCAG (Web Content Accessibility Guidelines). Isso incluirá a adição de descrições alternativas para imagens, navegação por teclado e melhorias no contraste de cores.

### Otimização para Diferentes Telas
- **Responsividade**: Otimizarei o site para diferentes tamanhos de tela, garantindo que ele funcione bem em dispositivos móveis, tablets e desktops. Isso incluirá o uso de media queries no CSS e o ajuste do layout e elementos interativos para proporcionar uma experiência de usuário consistente em todas as plataformas.

### Práticas de SEO
- **Otimização de Conteúdo**: Vou otimizar o conteúdo da página para motores de busca, incluindo a utilização de palavras-chave relevantes, meta descrições, títulos e tags de cabeçalho apropriadas (H1, H2, H3).
- **SEO Técnico**: Implementarei práticas de SEO técnico, como a criação de um sitemap XML, a configuração de redirecionamentos adequados, e a melhoria da estrutura de URLs para torná-las mais amigáveis e descritivas.

