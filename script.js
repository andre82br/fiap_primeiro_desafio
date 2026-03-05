var form = document.getElementById("groupForm");

form.addEventListener("submit", async function (event) {

  event.preventDefault();

  const names = [
    document.getElementById("name1").value,
    document.getElementById("name2").value,
    document.getElementById("name3").value,
    document.getElementById("name4").value,
    document.getElementById("name5").value
  ];

  var message = document.getElementById("history").value;

  const data = {
    names: names,
    message: message
  };

  try {

    const response = await fetch("https://fsdt-contact.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    console.log(result);

    alert("Mensagem enviada com sucesso!");

  } catch (error) {

    console.error(error);
    alert("Erro ao enviar");

  }

});