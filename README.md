# 🌎 World Explorer

Um painel interativo desenvolvido em React + Vite para explorar informações de países de forma simples, visual e organizada.

## 💡 Problemática

Informações sobre países estão disponíveis em APIs públicas, mas consultar esses dados diretamente nem sempre proporciona uma experiência simples e intuitiva.

O **World Explorer** foi desenvolvido para transformar esses dados em uma interface visual que facilite a consulta e a exploração das informações.

## 🎯 Objetivo

Criar uma aplicação capaz de consumir uma API pública e apresentar informações de países de forma organizada, permitindo que o usuário pesquise, filtre e visualize detalhes de cada país.

## 🛠️ Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS
- HTML
- Git e GitHub

## 🔌 API utilizada

O projeto utiliza a **REST Countries API** para obter os dados dos países.

Os dados utilizados incluem informações como:

- nome;
- bandeira;
- capital;
- região;
- população;
- moeda;
- idiomas;
- área;
- fuso horário;
- código telefônico.

Os dados recebidos pela API são tratados pela aplicação para trabalhar com os **195 países** considerados na proposta do projeto.

## ✨ Funcionalidades

### 🔎 Busca por país

O usuário pode pesquisar um país pelo nome utilizando o campo de busca.

### 🌎 Filtro por região

É possível filtrar os países de acordo com sua região:

- África;
- Américas;
- Ásia;
- Europa;
- Oceania.

### 📋 Detalhes do país

Ao clicar em um país, é aberto um modal com informações adicionais.

### ⏳ Loading

Enquanto os dados da API estão sendo carregados, a aplicação apresenta uma tela de carregamento com a mensagem:

> Explorando o mundo...

### 📱 Interface responsiva

A aplicação foi desenvolvida para se adaptar a diferentes tamanhos de tela, funcionando em:

- desktop;
- tablet;
- celular.

## 🧩 Componentização

A aplicação foi organizada em componentes com responsabilidades específicas:

```text
src/
├── components/
│   ├── CountryCard.jsx
│   ├── CountryModal.jsx
│   ├── CountrySearch.jsx
│   ├── Loading.jsx
│   └── RegionFilter.jsx
│
├── services/
│   └── countryApi.js
│
├── App.jsx
├── App.css
└── main.jsx
```

Essa organização facilita a manutenção e separa as responsabilidades da aplicação.

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/andressarodriguesdev/World_Explorer.git
```

### 2. Acesse a pasta

```bash
cd World_Explorer
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a variável de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_COUNTRIES_API_KEY=sua_chave_aqui
```

Substitua `sua_chave_aqui` pela chave necessária para consumir a API.

> O arquivo `.env` não deve ser enviado para o GitHub.

### 5. Execute o projeto

```bash
npm run dev
```

Depois, acesse a URL exibida pelo Vite no terminal.

## 🌐 Aplicação publicada

**Link da aplicação:**  
A definir após o deploy.

## 💻 Repositório

[GitHub — World Explorer](https://github.com/andressarodriguesdev/World_Explorer)

## 🤖 Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

### Prompt utilizado

> "Estou desenvolvendo um painel interativo com React + Vite que consome uma API pública de países. Quero organizar o projeto em componentes e criar funcionalidades de busca, filtro e visualização de detalhes. Pode me orientar sobre como estruturar esses componentes e a comunicação com a API, sem escrever o projeto completo?"

### Objetivo

Utilizei esse prompt para entender melhor como organizar a aplicação em componentes e estruturar as funcionalidades de interação com os dados da API, mantendo a implementação e as decisões do projeto sob minha responsabilidade.

## 📚 Desafio

Projeto desenvolvido como parte do **Bootcamp Desenvolvedor de Soluções Digitais — Kodie**, no desafio de criação de um Painel Interativo com API Pública utilizando React + Vite.