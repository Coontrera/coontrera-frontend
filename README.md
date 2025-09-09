# 🤸‍♀️ Coontrera - Frontend

Uma plataforma web para a **Clínica Coontrera**, um espaço de fisioterapia e pilates. O projeto está sendo reconstruído do zero com uma arquitetura moderna, utilizando **React** para o frontend e consumindo uma API C# separada para o backend.

O sistema foi projetado com foco em uma interface de usuário moderna, responsiva e intuitiva, com o objetivo de oferecer a melhor experiência para os clientes e administradores da clínica.

---

### 🚀 Tecnologias Utilizadas

* **Linguagens:** `JavaScript`, `HTML`, `CSS`
* **Biblioteca/Framework:** `React` v18+ (utilizando `Vite`)
* **Gerenciador de Pacotes:** `npm`
* **Bibliotecas Principais:**
    * `Bootstrap 5` para layout responsivo.
    * `React Router` para gerenciamento de rotas.
    * `AOS (Animate On Scroll)` para animações.
    * `Font Awesome` para ícones.
    * `Axios` (sugerido) para comunicação com a API.

---

### ⚙️ Pré-requisitos

Antes de rodar a aplicação, verifique se possui as ferramentas abaixo instaladas em seu ambiente de desenvolvimento:

* **Node.js** >= 18.0
* **npm** >= 9.0

---

### 🛠️ Instalação e Execução

Siga os passos abaixo para configurar e iniciar o projeto localmente:

```bash
# 1. Clone o repositório (substitua pela URL do seu repositório no GitHub)
git clone https://github.com/seu-usuario/coontrera-frontend.git

# 2. Acesse o diretório do projeto
cd coontrera-frontend

# 3. Instale todas as dependências do projeto
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

👉 O servidor de desenvolvimento estará disponível em: http://localhost:5173

---

# 📂 Estrutura de Diretórios

A estrutura do projeto foi organizada para facilitar a manutenção e a escalabilidade:

```bash
src/
 ├── assets/                # Arquivos estáticos (CSS, fontes)
 ├── components/
 │    ├── common/           # Componentes genéricos e reutilizáveis (Button, Card)
 │    └── layout/           # Componentes estruturais (Navbar, Footer, Layout)
 ├── contexts/              # Gerenciamento de estado global (ex: Autenticação)
 ├── hooks/                 # Hooks customizados (ex: useAuth)
 ├── pages/                 # Páginas principais, cada uma com sua própria pasta
 │    ├── HomePage/
 │    │    ├── HomePage.jsx
 │    │    └── HomePage.css
 │    └── ...
 ├── routes/                # Configuração das rotas da aplicação
 └── services/              # Lógica de comunicação com a API externa
```

---

# 📌 Convenções e Fluxo de Trabalho (Git Flow)

Para manter o código consistente e o trabalho em equipe organizado, seguiremos as convenções abaixo.

# Nomenclatura
   * Componentes: PascalCase (ex: Navbar.jsx, ServiceCard.jsx).

   * Pastas de Componentes/Páginas: PascalCase (ex: HomePage/, ServicesPage/).

   * Funções e Variáveis: camelCase (ex: handleLogin, userData).

# Branches e Fluxo de Trabalho
O trabalho será dividido em branches separadas para cada funcionalidade ou correção. Nunca se deve enviar código diretamente para a branch main.

Passo a Passo para Desenvolver uma Nova Funcionalidade:

1. Sincronize sua branch main local:
   
  ```bash
   git checkout main
   git pull origin main
   ```

2. Crie sua branch de trabalho a partir da main:
   Use um nome descritivo para a branch, por exemplo: feature/login-page ou lucas/header-component.
   
   ```bash
   git checkout -b nome-da-sua-branch
   ```
   
3. Desenvolva e Faça Commits:
   Trabalhe na sua funcionalidade e faça commits pequenos e descritivos.

   ```bash
   # Adiciona todos os arquivos modificados
   git add .
   
   # Cria um commit com uma mensagem clara
   git commit -m "feat: adiciona componente de login com validacao"
   
   # Envia suas alterações para o repositório remoto
   git push -u origin nome-da-sua-branch   
   ```

4. Abra um Pull Request (PR):
   Quando terminar o desenvolvimento na sua branch, acesse o GitHub e abra um Pull Request para que os outros membros da equipe possam revisar seu código antes de integrá-lo à branch main.

   ---

# 🔗 API Backend
Este projeto frontend consome dados de uma API C# separada. A URL base da API deve ser configurada no arquivo src/services/api.js.
   
