# Master Toxina — Método Anatomy in Motion

Landing page do treinamento Master Toxina.

## Arquivos da versão publicada (HTML estático)

- `static/index.html` — página principal
- `static/css/style.css` — estilos
- `static/js/main.js` — menu, FAQ e scroll
- `static/images/` — imagens
- `vercel.json` — configuração de deploy na Vercel

## Executar localmente

```bash
npx serve static
```

Abra `http://localhost:3000` (ou a porta indicada no terminal).

## Salvar e versionar com Git

Na pasta do projeto:

```bash
git init
git add .
git commit -m "Landing page Master Toxina"
```

## Publicar no GitHub

1. Crie um repositório vazio em [github.com/new](https://github.com/new) (sem README).
2. Conecte e envie:

```bash
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/master-toxina.git
git push -u origin main
```

Substitua `SEU-USUARIO/master-toxina` pelo nome do seu repositório.

## Publicar na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub.
2. **Add New Project** → importe o repositório.
3. A Vercel detecta o `vercel.json` automaticamente:
   - **Output Directory:** `static`
   - **Build Command:** vazio (site estático)
4. Clique em **Deploy**.

O site ficará disponível em um endereço como `https://master-toxina.vercel.app`. Depois você pode conectar um domínio próprio nas configurações do projeto.

## Checkout

O botão principal de compra aponta para:

`https://pay.kiwify.com.br/7GbDlKg`

## Versão React / Next.js (opcional)

O repositório também contém uma versão Next.js em `app/`. Para desenvolvimento:

```bash
npm install
npx vite
```

Para publicar só a landing estática, use a configuração do `vercel.json` acima.
