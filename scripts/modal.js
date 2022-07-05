import { inputs } from "./app.js";

const btn = document.querySelector(".btn");

export const callModal = () => {
  btn.addEventListener("click", () => modal());
};

const modal = () => {
  const modalContainer = document.createElement("DIV");
  modalContainer.classList.add("modal-container");

  const modal = document.createElement("DIV");
  modal.classList.add("modal-sn");

  const close = document.createElement("BUTTON");
  close.classList.add("close");
  close.textContent = "Cerrar";

  close.onclick = function () {
    modalContainer.remove();
  };
// ( NL ) = next line / ( IND ) = tabulation
  const modalInputs = document.createElement("DIV");
  modalInputs.classList.add("input-container");
  modalInputs.innerHTML = `
    <span>Titulo: <span style='color: red'><i>*</i></span></span>
    <input type='text' id='title' class='form-control form-control-sm'></input>
    <span>Explicacion: <span style='color: red'><i>*</i></span></span>
    <textarea id="explanation" class="form-control" rows='2'></textarea>
    <span>Ejemplo:</span>
    <span style='color: gray'>Keys: NL = Next Line // TAB = Tabulation</span>
    <textarea id="code" class="form-control" rows='3'></textarea>
    <span>Aclaraciones: <span style='color: gray'><i>opcional</i></span></span>
    <input type='text' id='optional' class='form-control form-control-sm'></input>
    <div class="side">
        <div>
            <input class="form-check-input" type="radio" name="radio" id="0" value="left" checked>
            <label class="form-check-label" for="leftSide" style='color: gray'>Izquierda</label>
        </div>
        <div>
            <input class="form-check-input" type="radio" name="radio" id="1" value="right">
            <label class="form-check-label" for="leftSide" style='color: gray'>Derecha</label>
        </div>
    </div>
    `;

  const accept = document.createElement("BUTTON");
  accept.id = "accept";
  accept.classList.add("btn", "btn-primary", "mb-2");
  accept.textContent = "Aceptar";

  accept.onclick = function (e) {
    const titleInput = document.querySelector("#title").value;
    const explanationInput = document.querySelector("#explanation").value;
    const codeInput = document.querySelector("#code").value;
    const optionalInput = document.querySelector("#optional").value;
    const checkedInput = document.querySelector(
      'input[name = "radio"]:checked'
    );

    if (titleInput === "" || explanationInput === "") {
      return console.log("Relleno los campos");
    }

    const obj = {
      title: titleInput,
      exp: explanationInput,
      code: codeInput,
      optional: optionalInput,
      checked: checkedInput.id, 
      id: uuid.v4(),
    };

    modalContainer.remove();
    inputs(obj);
  };

  modal.appendChild(close);
  modal.appendChild(modalInputs);
  modal.appendChild(accept);
  modalContainer.appendChild(modal);
  document.body.appendChild(modalContainer);
};
