# Guia de edição, site AURA Growth

Guia rápido para você mexer no site sem depender de ninguém. Tudo é HTML/CSS/JS puro (sem framework), então basta abrir no VS Code e editar.

---

## 1. Estrutura de arquivos

```
aura-site/
├── index.html                          Página inicial
├── servicos.html                       Hub de serviços (âncoras #trafego, #seo-local, #tecnologia, #ia)
├── criacao-de-sites.html               Landing de Sites (WhatsApp da Adriane)
├── gestao-de-midias-e-marketing.html   Landing de Mídias (WhatsApp da Andreza)
├── sobre.html                          Fundadoras + carrossel de certificações
├── contato.html                        Dois contatos (Adriane e Andreza)
├── assets/
│   ├── style.css                       TODO o estilo do site (um arquivo só)
│   └── script.js                       TODO o JavaScript (menu, carrosséis, formulário)
├── logo-aura.png                       Logo (usada no menu, rodapé e compartilhamento)
├── Andreza.jpeg                        Foto da Andreza
├── (Adriane.jpeg)                      FALTA: coloque a foto da Adriane aqui (mesmo nome)
├── yurisoundcar.png / leolauxen.png / crc-acabamentos.png / doutor-refrigeracao.png   prints de clientes
├── sitemap.xml / robots.txt / llms.txt Arquivos de SEO/IA (não precisa mexer)
```

> **Importante:** não existe mais `pages.css`. Todo o CSS foi unido em `assets/style.css`. Se o antigo ainda estiver na sua pasta, pode apagar.

---

## 2. Trocar os números de WhatsApp

Os números estão nos links no formato `https://wa.me/55DDDNUMERO?text=...`.

- **Adriane** (sites, tráfego, tecnologia, IA): `5547988393646`
- **Andreza** (mídias, marketing, SEO local): `5547991518157`

Para trocar um número em todo o site, use **Localizar e Substituir em todos os arquivos** do VS Code (`Ctrl+Shift+H`):
- procure `5547988393646` e substitua pelo novo número da Adriane;
- procure `5547991518157` e substitua pelo novo da Andreza.

Também troque nos arquivos de SEO: `llms.txt` e nos blocos `"telephone"` dentro do `<script type="application/ld+json">` de cada página.
No `assets/script.js`, o número do formulário de depoimento está na linha `var AURA_WHATS = '5547991518157';`.

---

## 3. Mensagens automáticas do WhatsApp (o cliente clica e já chega a mensagem)

Cada botão de WhatsApp já leva uma mensagem pronta. Ela fica depois de `?text=` no link, com os espaços trocados por `%20` e acentos codificados.

Exemplo:
```
https://wa.me/5547988393646?text=Ol%C3%A1%20Adriane%21%20Tenho%20interesse%20em%20Cria%C3%A7%C3%A3o%20de%20Sites.
```
`%20` = espaço · `%C3%A1` = á · `%21` = !

**Jeito fácil de gerar uma mensagem nova:** escreva o texto normal e use um "URL encoder" (qualquer site de "codificar URL"), ou peça pra mim. Depois é só colar depois de `?text=`.

Os botões de serviço da home e da página de serviços já vêm comentados no HTML explicando isso (procure por "CARDS DE SERVIÇO").

---

## 4. Adicionar um CASE no portfólio (página inicial)

No `index.html`, procure o comentário **"PORTFÓLIO / CASES"**. Cada case é um bloco `<div class="port-card rv">`. Para adicionar, copie um bloco existente e troque o conteúdo.

**Case COM print do site/rede** (recomendado):
```html
<div class="port-card rv">
  <div class="port-preview">
    <img src="NOME-DO-ARQUIVO.png" alt="Descrição do case" loading="lazy" decoding="async" width="900" height="600" class="port-preview-img" />
    <div class="port-ig-badge">@instagram_do_cliente</div>
  </div>
  <div class="port-info">
    <div class="port-info-top">
      <span class="port-tag-seg">Segmento · Cidade</span>
      <a href="LINK" target="_blank" rel="noopener" class="port-visit-btn">Ver Instagram ↗</a>
    </div>
    <h3>Nome do Cliente</h3>
    <p>Uma frase sobre o que foi feito e o resultado real.</p>
    <div class="port-tags"><span>Tag 1</span><span>Tag 2</span><span>Tag 3</span></div>
  </div>
</div>
```

**Case SEM print** (usa um card colorido no lugar da imagem):
```html
<div class="port-preview"><div class="port-mock">Nome do Cliente<br />Tipo de projeto</div></div>
```

O primeiro bloco de cases fica na aba "Sites criados" (`id="portServicos"`) e o segundo na aba "Redes gerenciadas" (`id="portEmpresas"`).

> **Regra da AURA:** só cases reais. Nada de cliente ou número inventado.

---

## 5. Adicionar imagens

1. Coloque o arquivo (`.png`, `.jpg`) na pasta `aura-site/` (mesma pasta dos HTML).
2. No HTML, referencie por `src="nome-do-arquivo.png"`.
3. Sempre inclua `alt="..."`, `loading="lazy"`, `decoding="async"` e `width`/`height` (ajuda a velocidade e o SEO).
4. **Otimize antes de subir:** imagens grandes deixam o site lento. Ideal: até ~150 KB por imagem. (Posso otimizar pra você quando quiser.)

---

## 6. Editar as CERTIFICAÇÕES (carrossel da página Sobre)

Abra `assets/script.js` e procure o array **`CERTIFICACOES`** (tem um comentão explicando). Cada item:

```js
{ nome: 'Certificação Google Ads', org: 'Google', ano: '2025', icone: '🎯', img: '' },
```
- `nome`, `org`, `ano`: texto.
- `icone`: um emoji.
- `img`: (opcional) se você tiver um selo/badge em imagem, coloque o arquivo na pasta e ponha `img: 'nome.png'` (ele aparece no lugar do emoji).

Para **adicionar**, copie uma linha e edite. Para **remover**, apague a linha.

> **Atenção:** os exemplos que deixei (Google Ads, GA4, Meta, etc.) são **modelos**. Deixe só as certificações que vocês **realmente têm**. Nada de prova social fabricada.

---

## 7. Editar os CLIENTES do mural (faixa que passa na home)

No `assets/script.js`, procure o array **`CLIENTES`**. Mesma lógica das certificações: cada cliente é uma linha com `nome`, `local`, `seg` (segmento), `insta` e `txt` (descrição). Copie/edite/remova à vontade. Só clientes reais.

---

## 8. Trocar textos, cores e fontes

- **Textos:** é só editar direto no HTML. Cada seção tem comentário ou classe que ajuda a localizar.
- **Cores:** no topo do `assets/style.css`, dentro de `:root`, estão as variáveis:
  ```css
  --purple:#7C4DDB;  --orange:#E8602C;  --ink:#1A1917;  --bg:#F8F6F3;
  --grad: ...gradiente roxo->laranja...
  ```
  Trocando ali, muda no site todo.
- **Fontes:** também em `:root` (`--font-d` para títulos, `--font-b` para texto).

---

## 9. Não mexa nisto (rastreamento)

No topo de cada página tem o código do **Google Tag Manager** (`GTM-NR9CGCS4`) e do **Google Ads/Analytics** (`AW-18253939997`, `G-0EVMF76012`). Não apague, é o que mede as conversões dos anúncios.

---

## 10. Hospedagem

Os links usam `.html` (ex: `servicos.html`), então o site funciona em **qualquer lugar**: GitHub Pages, Vercel, Cloudflare Pages, hospedagem comum. É só subir a pasta inteira.

- A página inicial abre em `auragrowth.com.br/`
- As outras em `auragrowth.com.br/servicos.html`, etc.

Se um dia você hospedar em Vercel/Cloudflare e quiser URLs sem `.html` (ex: `/servicos`), me avisa que ajusto os `canonical` e o `sitemap.xml`.

---

## Precisa de ajuda?
Qualquer alteração maior (nova página, novo serviço, nova identidade), me chama que eu faço. Este guia cobre o dia a dia.

---

# Novidades (v5): ofertas, blog, diagnóstico e voltar-ao-topo

## 11. Faixa de ofertas que passa em loop (home)
No `index.html`, procure o comentário **"FAIXA DE OFERTAS"**. Cada item é um `<span class="offer-item">`. O conteúdo aparece duplicado (2x) só para o loop ficar contínuo, então, se editar, altere os dois blocos iguais (ou me peça). Para preço em destaque, use `<span class="offer-price">R$90/mês</span>`.
> Preços reais: manutenção R$90/mês, consultoria R$250. Não invente valores.

## 12. Seção de Blog (slider)
Os posts saem do array **`POSTS`** em `assets/script.js` (tem um comentão explicando cada campo: `titulo`, `cat`, `data`, `resumo`, `icone`, `url`). Para publicar um conteúdo, adicione um item no array. Enquanto não tiver a página do artigo, deixe `url: '#'`. Quando criar o artigo (ex: um `blog-post.html`), troque pelo caminho do arquivo, aí o card vira link clicável.
> Os posts que deixei são exemplos de pauta. Troque pelos seus conteúdos reais.

## 13. Cases de sites (portfólio)
Na aba **"Sites criados"** estão os 8 sites com o segmento em destaque (pra pessoa se identificar) e o selo **"Indexado no Google"**. Cada card é um `<div class="port-card rv">`.
- Case **sem print** (mock colorido por segmento): usa `<div class="port-mock seg">` com emoji, segmento e nome.
- Case **com print**: usa `<img class="port-preview-img">` (coloque a imagem na pasta).
Para adicionar um case novo, copie um bloco e troque emoji, segmento, nome, link (`Ver site`), descrição e as tags. O selo do Google é o `<span class="port-google-badge">Indexado no Google</span>`.

## 14. Botão "voltar ao topo"
Já aparece **em todas as páginas** automaticamente (some no topo e aparece quando o cliente rola pra baixo). Ele é criado pelo `assets/script.js` (procure "BOTÃO VOLTAR AO TOPO"). Não precisa mexer.

## 15. Fundo animado da hero
O painel principal agora tem um fundo "aura" que se move devagar (efeito no `assets/style.css`, procure "FUNDO ANIMADO DA HERO"). Ele respeita quem prefere menos movimento (acessibilidade). Para deixar mais/menos intenso, ajuste a opacidade das manchas ou o tempo da animação (`auroraDrift`).

## 16. Landing de Diagnóstico (arquivo `diagnostico.html`)
É uma página **independente**, self-contained (CSS e JS embutidos), que faz a triagem do lead com perguntas (objetivo, quanto investir, resultado esperado, cidade/região e se já conhece os serviços) e, no final, mostra as soluções recomendadas e um botão que manda tudo pronto pro WhatsApp.

- **Publicar no seu outro domínio:** é só subir esse arquivo. Depois, dentro dele, troque o `<link rel="canonical">` pela URL real e, se quiser a logo, copie o `logo-aura.png` pro mesmo servidor.
- **Para onde vai o resultado:** WhatsApp da Andreza (`5547991518157`). Para trocar, procure `WHATS_DESTINO` no script da página.
- **Editar as perguntas:** procure o array `STEPS` (cada passo tem título e opções). As recomendações finais estão no objeto `RECS`.
- **O site principal já aponta pra ela:** os botões "Quero meu diagnóstico" da home levam para `diagnostico.html`. Se publicar num domínio separado, troque esses dois `href` pela URL de lá (estão comentados no `index.html`).
