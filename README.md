# Clínica — Site institucional e landing pages

Projeto de site institucional e comercial para uma clínica/centro de especialidades, com foco em campanhas, captação de leads, agendamento via WhatsApp, SEO local e publicação via GitHub Pages.

O projeto usa uma base visual leve e responsiva, com identidade em verde petróleo, páginas por especialidade e estrutura preparada para evoluir com textos definitivos, rastreamento e integrações.

---

## Stack atual

- React
- Vite
- CSS puro
- Lucide React para ícones
- Framer Motion para animações leves
- GitHub Pages para deploy

---

## Objetivo do site

O site foi pensado para:

- apresentar a clínica de forma clara e profissional;
- direcionar usuários para agendamento pelo WhatsApp;
- apoiar campanhas de tráfego pago;
- criar páginas específicas por especialidade para SEO local;
- manter uma base simples de evoluir sem backend nesta fase.

---

## Estrutura atual

```txt
clinica/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── 404.html
│   ├── favicon.png
│   ├── footer-logo.css
│   ├── footer-specialty-layout.css
│   ├── green-theme.css
│   ├── logo.png
│   └── logo02.png
├── src/
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## Arquivos principais

### `src/main.jsx`

Concentra a aplicação React, incluindo:

- dados principais da marca;
- número de WhatsApp;
- endereço;
- horários de atendimento;
- header;
- footer;
- home;
- página de Política de Privacidade;
- páginas de especialidades;
- roteamento simples baseado em `window.location.pathname`.

### `src/styles.css`

CSS base da aplicação. Ainda contém variáveis e estilos originais da primeira versão visual.

### `public/green-theme.css`

Camada atual de tema verde petróleo aplicada sobre o CSS base.

### `public/footer-logo.css`

Ajuste temporário que troca a logo do rodapé para `logo02.png` via CSS.

### `public/footer-specialty-layout.css`

Ajustes complementares do rodapé e das páginas de especialidade.

### `public/404.html`

Arquivo usado para redirecionamento de rotas internas no GitHub Pages, preservando o caminho acessado e retornando para `/clinica/`.

### `vite.config.js`

Define o `base: '/clinica/'`, necessário para o GitHub Pages deste repositório.

### `.github/workflows/deploy.yml`

Workflow de deploy automático para GitHub Pages quando houver push na branch `main`.

### `.env.example`

Modelo de variáveis públicas futuras para marca, WhatsApp, endereço e rastreamento.

---

## Como rodar localmente

```bash
npm install
npm run dev
```

Para gerar build de produção:

```bash
npm run build
```

Para visualizar o build:

```bash
npm run preview
```

---

## Deploy

O deploy é feito automaticamente pelo GitHub Actions em pushes para a branch `main`.

Fluxo atual:

1. checkout do repositório;
2. instalação do Node 20;
3. instalação das dependências com `npm install`;
4. build com `npm run build`;
5. publicação da pasta `dist` no GitHub Pages.

---

## Rotas atuais

- `/clinica/` — Home
- `/clinica/politica-de-privacidade` — Política de Privacidade
- `/clinica/especialidades/ginecologia`
- `/clinica/especialidades/uroginecologia`
- `/clinica/especialidades/obstetricia`
- `/clinica/especialidades/fertilidade`
- `/clinica/especialidades/oncologia`
- `/clinica/especialidades/odontologia`
- `/clinica/especialidades/nutricao`

---

## Especialidades cadastradas

- Ginecologia
- Uroginecologia
- Obstetrícia
- Fertilidade
- Oncologia
- Odontologia
- Nutrição

---

## Pontos técnicos pendentes

A base funciona, mas há pontos planejados para limpeza gradual:

1. Consolidar o tema verde dentro do CSS principal.
2. Reduzir o uso de `!important` nos arquivos auxiliares.
3. Mover a troca da logo do rodapé do CSS para o componente React.
4. Mover conteúdos criados via pseudo-elementos CSS para HTML/JSX real.
5. Corrigir o listener global de clique no `main.jsx` para remover o evento no cleanup.
6. Substituir textos provisórios por conteúdo definitivo.
7. Fixar versões de dependências e adicionar lockfile.
8. Implementar eventos de rastreamento para WhatsApp e campanhas.

---

## Conteúdo ainda provisório

Alguns textos ainda são placeholders e devem ser revisados antes de divulgação definitiva, principalmente:

- descrições dos serviços;
- respostas do FAQ;
- textos explicativos nas páginas de especialidade;
- chamadas comerciais finais;
- dados institucionais completos, caso sejam ampliados.

---

## Variáveis futuras

O arquivo `.env.example` documenta valores que podem ser movidos futuramente do código para variáveis públicas do Vite:

```txt
VITE_BRAND_NAME
VITE_WHATSAPP_NUMBER
VITE_WHATSAPP_DISPLAY
VITE_WHATSAPP_MESSAGE
VITE_ADDRESS
VITE_GA_MEASUREMENT_ID
VITE_GTM_ID
VITE_META_PIXEL_ID
```

No momento, o `main.jsx` ainda usa constantes internas. A migração para variáveis deve ser feita em uma etapa específica para evitar regressões.

---

## Próximos passos recomendados

1. Corrigir vazamento do listener no `main.jsx`.
2. Consolidar o CSS de tema.
3. Transformar ajustes do rodapé em estrutura React real.
4. Revisar textos provisórios.
5. Travar versões das dependências.
6. Adicionar rastreamento de conversão.
