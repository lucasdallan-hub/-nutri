# Nutrir

Landing page estática e responsiva para atendimento nutricional, em português.

## Executar

Na pasta do projeto, execute:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

Não há dependências de build. HTML, CSS e JavaScript são servidos diretamente. Fontes do Google Fonts e fotografia do Unsplash requerem conexão externa; fontes locais são usadas como alternativa.

## Personalizar

Antes de publicar, substitua a marca pelos dados reais da profissional, inclua nome e registro no CRN e configure o canal de agendamento. O formulário atual prepara uma mensagem para copiar e informa que o canal ainda será disponibilizado; não envia nem armazena dados.

## Segunda página

`acompanhamento.html` apresenta as etapas do atendimento, perguntas frequentes e um check-in de hábitos interativo. As marcações são temporárias e não representam um prontuário ou plano nutricional individual. A página inicial inclui links para essa página.
