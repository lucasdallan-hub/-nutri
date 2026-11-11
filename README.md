# Raissa Alcantara — Nutricionista

Site estático com três páginas: `index.html`, `acompanhamento.html` e `privacidade.html`. Paleta principal `#B19781`. Não há dependências ou etapa de build.

## Executar

Na pasta do projeto:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

## Publicar na Netlify

Conectar o repositório e a branch `main`, deixar o comando de build vazio e configurar `.` como diretório de publicação. O arquivo `_headers` configura cabeçalhos de segurança na Netlify; o servidor Python não os aplica. Conferir HTTPS e a aplicação desses cabeçalhos no domínio publicado.

## Contato e dados

O contato aponta para o perfil `@raissanutri1`, informado na captura enviada pela usuária. O formulário só prepara uma mensagem para copiar, com nome opcional; não envia dados ou confirma agendamento. O check-in não persiste as marcações. Não há analytics, pixels ou fontes externas. O logo é um PNG convertido do PDF fornecido. O retrato atual foi recortado da foto fornecida pela usuária, com fundo transparente, e é servido como arquivo local do próprio site.

## Informações ainda a confirmar pela profissional

- Região do CRN e situação do registro 22464, reproduzido da marca; o site não afirma verificação independente.
- Modalidade, cidade e endereço de atendimento, se houver.
- WhatsApp/e-mail, caso queira substituir ou complementar o contato pelo Instagram.
- As práticas efetivas de atendimento, conservação de dados e hospedagem devem corresponder à política de privacidade.

Não há promessa de aprovação de anúncios. Antes de anunciar, conferir o domínio público, HTTPS, disponibilidade real do atendimento e políticas vigentes das plataformas. Mudanças que adicionem coleta de dados ou rastreamento exigem revisão da política e dos mecanismos de consentimento, quando aplicáveis.


## Versões mobile, tablet e desktop

As três páginas usam o mesmo HTML responsivo, com adaptação automática à largura da tela. A navegação tem menu nativo abaixo de 961px, o conteúdo principal passa a uma coluna abaixo de 768px e os cartões usam uma coluna até 640px, duas até 960px e três em telas maiores. O menu funciona sem JavaScript; com `site.js`, também fecha por Escape, clique externo ou escolha de um link.

Campos usam 16px para evitar zoom automático no iPhone e os controles principais têm alvos de pelo menos 44px. A preferência por movimento reduzido é respeitada. O logotipo e o retrato usam WebP local com PNG como alternativa. O retrato oferece resoluções de 480, 800 e 1200px para que o navegador selecione uma imagem adequada à tela. Não é preciso configurar URLs distintas para mobile e desktop.


## Foto atual

A abertura usa o retrato sem fundo preparado a partir da nova foto enviada pela usuária. Os arquivos ficam no próprio site:

- `assets/raissa-retrato.png`: PNG com transparência, usado como alternativa aos WebP.
- `assets/raissa-retrato-480.webp`, `assets/raissa-retrato-800.webp` e `assets/raissa-retrato-1200.webp`: versões responsivas para celular e computador.

O retrato é exibido inteiro, elevado na abertura e sem quadro de fundo, preservando a paleta bege `#B19781`. A política CSP permite imagens apenas da própria origem (`img-src 'self'`). Se o arquivo de imagem não carregar, é exibido um aviso neutro, sem retornar à foto anterior.
