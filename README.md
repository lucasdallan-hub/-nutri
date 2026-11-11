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

O contato aponta para o perfil `@raissanutri1`, informado na captura enviada pela usuária. O formulário só prepara uma mensagem para copiar, com nome opcional; não envia dados ou confirma agendamento. O check-in não persiste as marcações. Não há analytics, pixels ou fontes externas. O logo é um PNG convertido do PDF fornecido. O retrato atual usa diretamente a URL de imagem do ImgBB fornecida pelo usuário, com `referrerpolicy="no-referrer"`. A política de privacidade informa essa conexão externa.

## Informações ainda a confirmar pela profissional

- Região do CRN e situação do registro 22464, reproduzido da marca; o site não afirma verificação independente.
- Modalidade, cidade e endereço de atendimento, se houver.
- WhatsApp/e-mail, caso queira substituir ou complementar o contato pelo Instagram.
- As práticas efetivas de atendimento, conservação de dados e hospedagem devem corresponder à política de privacidade.

Não há promessa de aprovação de anúncios. Antes de anunciar, conferir o domínio público, HTTPS, disponibilidade real do atendimento e políticas vigentes das plataformas. Mudanças que adicionem coleta de dados ou rastreamento exigem revisão da política e dos mecanismos de consentimento, quando aplicáveis.


## Versões mobile, tablet e desktop

As três páginas usam o mesmo HTML responsivo, com adaptação automática à largura da tela. A navegação tem menu nativo abaixo de 961px, o conteúdo principal passa a uma coluna abaixo de 768px e os cartões usam uma coluna até 640px, duas até 960px e três em telas maiores. O menu funciona sem JavaScript; com `site.js`, também fecha por Escape, clique externo ou escolha de um link.

Campos usam 16px para evitar zoom automático no iPhone e os controles principais têm alvos de pelo menos 44px. A preferência por movimento reduzido é respeitada. O logotipo usa WebP local com PNG como alternativa. O retrato atual é uma imagem externa e seu peso depende do arquivo hospedado pelo usuário. Não é preciso configurar URLs distintas para mobile e desktop.


## Foto atual

A abertura usa `https://i.ibb.co/W4MqbQ1q/3a184043-2256-4981-a2e0-7f1821a42ca5.jpg`. A CSP libera apenas esse host adicional para imagens. O enquadramento mantém a moldura responsiva e preserva a imagem inteira. Se o serviço externo falhar, é exibido um aviso neutro, sem retornar à foto anterior.

O ambiente de desenvolvimento bloqueou o download real com HTTP 403. Os testes locais cobrem a integração com uma imagem controlada e a falha de carregamento; não comprovam disponibilidade ou aparência da foto no endereço externo. Após acesso de rede ser liberado, recomenda-se importar a foto para `assets/` e gerar formatos responsivos locais novamente.
