# Folium

## Objetivo do Projeto
O Folium é uma aplicação inspirada na Netflix, mas voltada para o universo dos livros, mangás e HQs.
Seu objetivo é oferecer uma plataforma interativa e intuitiva onde os usuários possam navegar, explorar e gerenciar suas obras favoritas.
A aplicação busca unir praticidade e design moderno, permitindo que cada usuário tenha sua própria biblioteca personalizada, com recursos de autenticação e organização.

## Tecnologias Utilizadas
### Front-end

React

React Router DOM (para controle de rotas)

Axios (para comunicação com a API)

CSS (para estilização)

### Back-end

Node.js com Express

Dotenv (para gerenciamento de variáveis de ambiente)

### Banco de Dados

PostgreSQL

### Criptografia

bcrypt (para criptografar senhas dos usuários)

### Containerização

Docker

Docker Compose

### Arquitetura da Aplicação

Arquitetura Full-Stack com integração entre Front-end (React) e Back-end (Node.js + Express) via API REST

Organização modular de componentes no Front-end

Rotas protegidas para garantir o acesso apenas de usuários autenticados

### Aplicação Web
https://folium-test-q3dl.vercel.app/

### Imagens
![Catalogo] (<img width="1907" height="807" alt="catalogo" src="https://github.com/user-attachments/assets/e7e9ad0b-d879-4072-8921-28385ee10ae1" />)

<img width="1906" height="752" alt="singup" src="https://github.com/user-attachments/assets/8717fa34-3daf-4149-a7cc-03d608c0d1e3" />





## Diagrama de arquitetura da aplicação

    ┌───────────────────────────┐
    │         Usuário           │
    │ (Navegador / Desktop)     │
    └─────────────┬─────────────┘
                  │
                  ▼
    ┌───────────────────────────┐
    │      Frontend React      │
    │  • Interface do usuário  │
    │  • Rotas                 │
    │  • Consome API Rest      │
    ─────────────┬─────────────┘
                 │ Requisições HTTP (GET/POST/PUT/DEL)
                 ▼
    ┌────────────────────────────────────────────────┐
    │               Backend Node.js                  │
    │                 (Express.js)                   │
    │  • Endpoints REST                              │
    │  • Lógica de negócio                           │
    │  • Autenticação/Autorização                    │
    │  • Validação de dados                          │
    │  • Integração com APIs externas (ex: Google)   │
    └─────────────┬──────────────────────────────────┘
                  │ Consultas SQL
                  ▼
    ┌──────────────────────────────────────┐
    │        Banco de Dados Relacional	   │
    │              (PostgreSQL)            │
    │ • Tabelas de usuários                │
    │ • Tabelas de livros/mangás           │
    │ • Histórico e favoritos              │
    │ • Registros de avaliações            │
    └──────────────────────────────────────┘

