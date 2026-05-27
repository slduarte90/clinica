# Clínica — Site institucional e landing pages

Projeto de site institucional e comercial para uma clínica/centro de especialidades, com foco em **impulsionamentos**, **captação de leads**, **agendamento via WhatsApp** e boas práticas de **SEO técnico e conteúdo**.

O objetivo é criar uma base visual moderna, leve e orientada à conversão, para depois evoluir aos poucos com a identidade final, logo oficial, serviços reais, textos definitivos, rastreamento e integrações.

---

## Contexto do projeto

O site será usado principalmente para campanhas de tráfego pago, como Google Ads, Meta Ads e impulsionamentos em redes sociais. Por isso, a prioridade não é apenas ter uma página bonita, mas sim uma estrutura rápida, clara e preparada para converter visitantes em contatos.

A referência inicial usada foi o site:

```txt
https://diagnosticoclinica.com.br/home
```

A referência foi considerada apenas para entender uma estrutura comum de site de clínica: menu simples, chamada de agendamento, serviços em destaque, informações institucionais, contato e páginas auxiliares.

Todo o projeto deve ter identidade própria. Não será copiado conteúdo, imagens, marca, textos, médicos, endereços, exames, convênios ou qualquer elemento institucional da clínica de referência.

---

## Direção visual

A primeira direção visual definida foi uma estética mais acolhedora, moderna e feminina, com uso de tons de rosa, nude e vinho/ameixa.

### Paleta inicial

| Uso | Cor |
|---|---|
| Rosa principal | `#E94F8A` |
| Rosa escuro | `#B92D62` |
| Rosa claro de fundo | `#FFF1F6` |
| Rosa nude | `#F7C6D9` |
| Ameixa para títulos | `#4A1F33` |
| Branco | `#FFFFFF` |
| Cinza texto | `#5F5F68` |
| Cinza fundo alternativo | `#F8F6F7` |

### Estilo desejado

- Visual moderno, limpo e acolhedor.
- Botões arredondados e bem visíveis.
- Cards com bordas arredondadas e sombra suave.
- Seções com bastante respiro visual.
- Layout responsivo com prioridade para celular.
- Imagens humanizadas e profissionais.
- Ícones simples e leves.
- Tom comercial, direto e orientado à ação.

---

## Identidade e logo

Neste momento, o projeto voltou para uma versão inicial com placeholder de marca:

```txt
Nome da Marca
```

A logo definitiva ainda será enviada em arquivo sem fundo. Quando o arquivo correto for recebido, ele deve ser salvo em:

```txt
public/logo.png
```

Depois disso, o layout deve ser ajustado para carregar a logo real no header, hero e rodapé.

---

## Estrutura inicial do site

A página inicial foi planejada com a seguinte estrutura:

1. **Header**
   - Logo ou placeholder de marca.
   - Menu principal.
   - Botão de agendamento pelo WhatsApp.

2. **Hero principal**
   - Chamada forte para atendimento rápido e humanizado.
   - Texto curto de apoio.
   - Botões de ação.
   - Selos de confiança, como resposta rápida e atendimento com horário.

3. **Benefícios**
   - Agendamento facilitado.
   - Atendimento acolhedor.
   - Serviços organizados.
   - Foco em praticidade.

4. **Serviços**
   - Cards provisórios para os serviços.
   - Cada card terá depois o nome real do serviço e uma chamada para ação.

5. **Chamada de campanha**
   - Bloco forte para conversão.
   - Texto voltado para quem chegou por anúncio.
   - CTA para WhatsApp.

6. **Sobre a marca**
   - Texto institucional curto.
   - Foco em cuidado, clareza e praticidade.

7. **FAQ**
   - Perguntas frequentes para reduzir dúvidas antes do contato.

8. **CTA final**
   - Chamada direta para agendamento.

9. **Rodapé**
   - Marca.
   - Links principais.
   - Dados de contato provisórios.

---

## Páginas recomendadas para evolução

Além da home, o projeto deve evoluir para as seguintes páginas:

### Home

Página principal com foco em autoridade, clareza e conversão.

### Serviços

Página dedicada para listar e explicar os serviços reais da clínica. Ideal para SEO e para campanhas segmentadas.

### Landing pages por serviço

Páginas específicas para anúncios. Cada serviço importante pode ter uma landing page própria, com promessa clara, benefício, prova de confiança, FAQ e CTA.

### Sobre

Página institucional para reforçar credibilidade, propósito e diferenciais.

### Contato

Página com WhatsApp, formulário, endereço, horário de atendimento e mapa, se houver localização física.

### Política de Privacidade

Página obrigatória para campanhas e captação de dados.

### Página de Obrigado

Página usada após envio de formulário para rastrear conversões.

---

## SEO e boas práticas

Mesmo sendo um site voltado a impulsionamentos, a base deve respeitar boas práticas de SEO para melhorar qualidade da página, experiência do usuário e consistência das campanhas.

### Requisitos de SEO

- Apenas um `H1` por página.
- Uso correto de `H2` e `H3` nas seções.
- URLs curtas e descritivas.
- Meta title e meta description únicos por página.
- Conteúdo original, sem cópia da referência.
- Imagens comprimidas e preferencialmente em WebP.
- Texto alternativo em imagens relevantes.
- Links internos entre páginas.
- Layout responsivo.
- Boa velocidade no mobile.
- Página de Política de Privacidade.
- Conteúdo claro, comercial e útil.

### Meta title provisório da home

```txt
Atendimento Humanizado com Agendamento Rápido | Nome da Marca
```

### Meta description provisória da home

```txt
Agende seu atendimento com praticidade, tire dúvidas pelo WhatsApp e conte com uma equipe preparada para orientar você com clareza e cuidado.
```

---

## Tráfego pago e rastreamento

O projeto deve ser preparado para campanhas de tráfego pago e mensuração de conversões.

### Configurações futuras recomendadas

- Google Tag Manager.
- Google Analytics 4.
- Meta Pixel.
- Google Ads Conversion Tag.
- Evento de clique no WhatsApp.
- Evento de envio de formulário.
- Página de obrigado.
- Conversões separadas por campanha ou serviço.

---

## Stack atual

A primeira versão foi criada como projeto frontend simples para facilitar edição e versionamento.

- React
- Vite
- CSS puro
- Lucide React para ícones
- Framer Motion para animações leves

---

## Estrutura de arquivos

```txt
clinica/
├── README.md
├── index.html
├── package.json
└── src/
    ├── main.jsx
    └── styles.css
```

Estrutura futura esperada:

```txt
clinica/
├── public/
│   └── logo.png
├── src/
│   ├── main.jsx
│   ├── styles.css
│   └── assets/
└── README.md
```

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

## Conteúdo provisório atual

Os textos e serviços atuais são placeholders. Eles devem ser substituídos quando forem definidos os dados reais da marca.

### Serviços provisórios

- Avaliação inicial
- Consulta especializada
- Atendimento preventivo
- Procedimentos personalizados
- Acompanhamento contínuo
- Orientação pelo WhatsApp

### Dados pendentes

- Nome definitivo da marca.
- Logo oficial sem fundo.
- Segmento exato da clínica.
- Serviços reais.
- WhatsApp.
- Endereço.
- Horário de atendimento.
- Cidades ou regiões atendidas.
- Fotos próprias, se houver.
- Oferta principal para anúncios.
- Público-alvo principal.

---

## Decisões já tomadas

- Usar o site de referência apenas como inspiração funcional.
- Não copiar conteúdo, imagens, layout exato ou identidade visual da referência.
- Criar uma identidade própria baseada em rosa, nude e ameixa.
- Priorizar velocidade, clareza e conversão.
- Manter a primeira versão sem logo definitiva até receber o arquivo correto.
- Preparar o projeto para receber a logo em `public/logo.png`.
- Trabalhar com evolução gradual pelo GitHub.

---

## Próximos passos

1. Enviar a logo oficial sem fundo.
2. Criar a pasta `public/` e subir `public/logo.png`.
3. Atualizar o header, hero e rodapé para usar a logo real.
4. Substituir `Nome da Marca` pelo nome definitivo.
5. Substituir serviços provisórios pelos serviços reais.
6. Inserir WhatsApp e links de CTA.
7. Criar página de Política de Privacidade.
8. Criar página de Obrigado para conversões.
9. Ajustar textos para SEO e campanhas.
10. Configurar rastreamento de eventos.
