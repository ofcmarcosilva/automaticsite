# BlogIA - Blog Automático com Inteligência Artificial

Um blog moderno e estético que publica artigos gerados por IA automaticamente a cada dois dias.

## Características

- 🤖 Geração automática de conteúdo usando sua API de IA
- 🎨 Design moderno e responsivo com Tailwind CSS
- ⚡ Construído com Next.js para performance e SEO
- 📱 Experiência de usuário otimizada em todos os dispositivos
- 📊 Categorias organizadas de artigos
- 🔄 Publicação programada a cada dois dias

## Configuração

### Pré-requisitos

- Node.js 16.8.0 ou superior
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://seu-repositorio/automatic-blog.git
   cd automatic-blog
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   ```

3. Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:
   ```
   # Configurações da API de IA
   IA_API_KEY=sua_chave_api_aqui
   IA_API_ENDPOINT=https://sua-api-de-ia.com/generate

   # Configurações do site
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Gerando artigos manualmente

Para gerar um artigo manualmente:

```bash
npm run generate-article
# ou
yarn generate-article
```

### Configurando a geração automática

Para configurar a geração automática de artigos:

1. Compile o scheduler:
   ```bash
   npm run build-scheduler
   # ou
   yarn build-scheduler
   ```

2. Execute o scheduler:
   ```bash
   npm run scheduler
   # ou
   yarn scheduler
   ```

O scheduler iniciará a geração automática de artigos seguindo o intervalo configurado (a cada dois dias às 8h por padrão).

## Personalização

### Categorias

Você pode modificar as categorias disponíveis editando o arquivo `src/lib/articles.ts`.

### Design

O design do blog pode ser personalizado através dos arquivos:
- `src/app/globals.css` - Estilos globais
- `tailwind.config.js` - Configuração do Tailwind

### Intervalo de publicação

O intervalo de publicação pode ser modificado alterando a constante `ARTICLE_GENERATION_INTERVAL` no arquivo `src/scripts/article-generator.ts`.

## Produção

Para construir o projeto para produção:

```bash
npm run build
# ou
yarn build
```

Para iniciar o servidor em produção:

```bash
npm run start
# ou
yarn start
```

## Sugestões para implantação

Para manter o scheduler de artigos rodando em produção, considere:

1. Usar um serviço de PM2 para manter o processo ativo
2. Configurar um cron job no servidor
3. Utilizar serviços como AWS Lambda ou GitHub Actions para disparar a geração periódica

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes. 