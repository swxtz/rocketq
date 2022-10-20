import Modal from './modal.js'
const modal = Modal();

//Verificar quando o usuario abrir o modal
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
  button.addEventListener("click", event => {
    modal.open();
  });
});

//Verificar quando o usuario clicar no botão de deletar
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button =>  {
  button.addEventListener("click", event => {
    modal.open()
  });
});
