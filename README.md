# 🍽️ eFood - Plataforma de Delivery de Comida

Uma aplicação web moderna e responsiva para delivery de comida, construída com **React** e **TypeScript**. O projeto oferece uma experiência completa de pedidos online, desde a escolha dos pratos até a finalização da compra com validação de pagamento.

## ✨ Funcionalidades

- 🎯 **Catálogo de Restaurantes**: Listagem dinâmica de estabelecimentos com filtro por especialidade.
- 🍕 **Cardápio Detalhado**: Visualização de pratos com fotos, descrições e preços.
- 🛒 **Carrinho de Compras**:
  - Adição e remoção de itens em tempo real.
  - Resumo de valores calculado automaticamente.
  - Persistência de estado durante a navegação.
- 📱 **Design Responsivo**: Interface totalmente adaptada para dispositivos móveis, tablets e desktops.
- 🚀 **Checkout Completo**:
  - Formulário de entrega com validações.
  - Processamento de pagamento simulado.
  - Confirmação de pedido com ID gerado pela API.

## 🛠️ Tecnologias Utilizadas

- **React 18**: Biblioteca principal para construção da UI.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **Redux Toolkit**: Gerenciamento de estado global (Carrinho e Modais).
- **Styled Components**: Estilização baseada em componentes (CSS-in-JS).
- **React Router DOM 7**: Navegação entre páginas sem recarregamento.
- **Fetch API**: Comunicação com API REST para busca de dados e checkout.
- **ESLint + Prettier**: Padronização e qualidade do código.

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** (versão 18 ou superior recomendada)
- **npm** ou **yarn**

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/LuizEduardoSC/Project6-eFood.git
   cd Project6-eFood
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm start
   ```
   A aplicação estará disponível em `http://localhost:3000`.

## 🌐 Visualização no Vercel

O projeto está configurado para deploy contínuo na Vercel. Você pode visualizar a versão mais recente através do link:

🔗 **[Acesse o eFood no Vercel (Clique Aqui)](https://project6-e-food.vercel.app/)**

O deploy é acionado automaticamente a cada _push_ para a branch principal.

## 📁 Estrutura de Pastas

```text
src/
├── assets/         # Imagens e recursos estáticos
├── components/     # Componentes compartilhados (Header, Footer, Cart)
├── data/           # Dados estáticos ou mocks
├── models/         # Definições de tipos e interfaces
├── pages/          # Páginas da aplicação (Home, Restaurante)
├── services/       # Configuração de API e chamadas assíncronas
├── store/          # Configuração do Redux (Slices e Store)
└── styles.ts       # Estilos globais e temas
```

## 👨‍💻 Autor

Desenvolvido por **[Luiz Eduardo](https://www.linkedin.com/in/luiz-eduardosc/)**.

---
⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
