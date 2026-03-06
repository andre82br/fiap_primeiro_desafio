# Desafio FSDT – Formulário de Contato

## 📌 Descrição

Este projeto foi desenvolvido como solução para o **Desafio FSDT**, cujo objetivo é criar uma página web utilizando **HTML, CSS e JavaScript puro (sem frameworks)**.

A aplicação apresenta um formulário onde os integrantes do grupo informam seus nomes e contam a história do protótipo desenvolvido.
Ao enviar o formulário, os dados são enviados para uma API através de uma **requisição HTTP POST no formato JSON**.

Após o envio:

- Em caso de **sucesso**, os campos são limpos e é exibido um `alert` informando que o envio foi realizado.
- Em caso de **erro**, é exibido um `alert` informando que ocorreu um problema.

---

# 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Fetch API

---

# 📡 Endpoint da API

A aplicação envia os dados para o seguinte endpoint:

```
POST https://fsdt-contact.onrender.com/contact
```

### Estrutura do JSON enviado

```
{
  "names": [
    "Nome 1",
    "Nome 2",
    "Nome 3",
    "Nome 4"
  ],
  "message": "História ou descrição do grupo"
}
```

---

# 📂 Estrutura do Projeto

```
project-folder
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# ▶️ Como Executar o Projeto

1. Clone o repositório:

```
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

2. Acesse a pasta do projeto:

```
cd SEU-REPOSITORIO
```

3. Abra o arquivo **index.html** no navegador

ou execute um servidor local:

```
python -m http.server
```

Depois acesse:

```
http://localhost:8000
```

---

# 👨‍💻 Integrantes do Grupo

- RM 370712 - Daniel Rocha
- RM 372340 - Wesley Lima
- RM 371697 - Diego Gonçalves
- RM 373940 - Gabriel Angelo
- RM 371179 - André Bessa

---

# 📋 Requisitos Atendidos

✔ Utilização apenas de **HTML, CSS e JavaScript**
✔ Arquivos separados conforme solicitado
✔ Envio de dados para API via **POST**
✔ JSON contendo **names (array)** e **message (string)**
✔ Limpeza do formulário após envio
✔ Alertas de sucesso e erro

---

# 📄 Licença

Projeto desenvolvido apenas para fins educacionais.
