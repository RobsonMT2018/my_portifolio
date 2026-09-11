# 🚀 Personal Web Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

Este repositório contém o código-fonte do meu portfólio profissional interativo, projetado para apresentar minha trajetória, formação acadêmica, habilidades técnicas e projetos em desenvolvimento web, mobile e segurança da informação.

---

## 🌟 Recursos & Destaques

- **Navegação Horizontal Contínua (Desktop):** Transição fluida em estilo *dashboard/slider* entre as seções.
- **Layout Totalmente Responsivo (Mobile):** Adaptação automática para rolagem vertical intuitiva em telas menores.
- **Tema Light / Dark:** Alternância de tema escuro e claro com persistência via `localStorage`.
- **Menu Lateral Mobile:** Navegação limpa e acessível via *drawer* em dispositivos móveis.
- **Design Moderno:** Estilização com conceito *Glassmorphism*, paleta de cores balanceada e tipografia moderna (*Plus Jakarta Sans*).

---

## 📁 Estrutura do Repositório

```text
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   └── profile.png
│   └── curriculo_robson_maciel.pdf
├── portifolio.html
└── README.md
```

---

## 📐 Arquitetura e Fluxo do Projeto

```text
┌────────────────────────────────────────────────────────────────────────┐
│                              INDEX.HTML                                │
│                                                                        │
│  ┌────────────────────┐   ┌───────────────────┐   ┌─────────────────┐  │
│  │    Header / Nav    │   │  Sidebar (Mobile) │   │  Theme Switcher │  │
│  └─────────┬──────────┘   └─────────┬─────────┘   └────────┬────────┘  │
└────────────┼────────────────────────┼──────────────────────┼───────────┘
             │                        │                      │
             ▼                        ▼                      ▼
┌────────────────────────────────────────────────────────────────────────┐
│                          DASHBOARD GRID (500%)                         │
│                                                                        │
│   [#home]     ──►   [#about]     ──►   [#portfolio]   ──► [#skills]    │
│  Intro & UI        Trajetória         Projetos & PDV       Techs       │
│                                                                        │
│                                  │                                     │
│                                  └──► [#contact]                       │
│                                       Links & Loc                      │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
              ┌────────────────────┴────────────────────┐
              ▼                                         ▼
┌───────────────────────────┐             ┌───────────────────────────┐
│     ASSETS / CSS / JS     │             │      RECURSOS MÍDIA       │
│                           │             │                           │
│  • style.css (Vars, Grid) │             │  • profile.png            │
│  • DOM Manipulation       │             │  • curriculo_maciel.pdf   │
│  • localStorage (Theme)   │             │  • Boxicons (CDN)         │
└───────────────────────────┘             └───────────────────────────┘
```
---

### Alternative: Gerar uma imagem ilustrativa (PNG/SVG)

Caso queira gerar uma imagem real (imagem de capa/banner para o topo do repositório) para salvar na sua pasta `assets/img/`, você pode utilizar ferramentas gratuitas como:

* **[Mermaid.live](https://mermaid.live):** Você cola o código de fluxo abaixo e baixa o diagrama em `.png` ou `.svg`.
* **[Excalidraw](https://excalidraw.com):** Para desenhar diagramas em estilo moderno/sketch.

**Código Mermaid (para colar em mermaid.live):**
```mermaid
graph TD
    A[index.html] --> B[Navbar & Theme Switcher]
    A --> C[Dashboard Grid Slider]
    
    subgraph Seções do Portfólio
        C --> D[#home: Apresentação]
        C --> E[#about: Sobre & Formação]
        C --> F[#portfolio: Projetos]
        C --> G[#skills: Tecnologias]
        C --> H[#contact: Contatos]
    end

    subgraph Módulos & Estilos
        B --> I[assets/css/style.css]
        E --> J[assets/curriculo_robson_maciel.pdf]
        D --> K[assets/img/profile.png]
    end
```
---

## 🛠️ Tecnologias Utilizadas

  - **HTML5 & CSS3 (Variáveis CSS, Flexbox, Grid Layout, Media Queries)**
  - **JavaScript (Vanilla) para manipulação de DOM e lógica de navegação/tema**
  - **Boxicons (Biblioteca de ícones vetoriais)**
  - **Google Fonts (Plus Jakarta Sans)**

---

## 👨‍💻 Sobre o Autor

- 🎓 **Formação:**
   - Análise e Desenvolvimento de Sistemas — Cruzeiro do Sul
   - Jogos Digitais — Uniso
   - Redes de Computadores — Senac

- 📜 **Certificações:** 
   - CCNAv7, Cybersecurity Essentials e CyberOps Associate (Cisco).

- 💡 **Áreas de Atuação:**
   - Desenvolvimento Full-stack (React, React Native, Node.js, Express, PostgreSQL/MySQL), Análise de Segurança Web/DOM e Infraestrutura de Redes.

---


## 🚀 Como Executar o Projeto Localmente

1. **Clone o repositório:**

```git clone [https://github.com/robson-maciel/portfolio.git](https://github.com/robson-maciel/portfolio.git)```

2. **Acesse a pasta do projeto:**

```cd portfolio```

3. **Abra o projeto:**

```Abra o arquivo index.html diretamente no seu navegador ou utilize a extensão Live Server no VS Code.```

---

## 📬 Contato

- **LinkedIn:** [linkedin.com/in/robson-maciel-tomosique](https://linkedin.com/in/robson-maciel-tomosique)
- **Credly:** [credly.com/users/robson-maciel-tomosique](https://credly.com/users/robson-maciel-tomosique)
- **GitHub:** [github.com/robson-maciel](https://github.com/robson-maciel)

## *Full-Stack Developer | Sorocaba - SP, Brasil*


