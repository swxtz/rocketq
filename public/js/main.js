import Modal from './modal.js'
const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

//Verificar quando o usuario abrir o modal
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
  button.addEventListener("click", handleClick);
});

//Verificar quando o usuario clicar no botão de deletar
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button =>  {
  button.addEventListener("click", (event) => handleClick(event, false) )
});


function handleClick(event, check = true) {
  modalTitle.innerHTML= check ? "Marcar como lida esta pergunta" : "Excluir esta pergunta";
  modalDescription.innerHTML = check ? "Tem certeza que deseja marcar como lida esta pergunta?" : "Tem certeza que deseja excluir essa pergunta?"
  modal.open();
};