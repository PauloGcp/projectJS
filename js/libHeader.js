import grupo from "./grupo.js"
import cards from "./cards.js"

export  function SelecaoDeIntegrante(aluno, matricula){
    const view =  `<div class="card border-dark mb-3" style="max-width: 8rem; min-width: 80px">
                    <div class="card-header bg-transparent border-dark">Aluno</div>
                    <div class="card-body text-dark">
                      <h5 class="card-title">${aluno}</h5>
                    </div>
                    <div class="card-footer bg-transparent border-dark">${matricula}</div>
                  </div>`

    const apresentaçao = document.querySelector("div.card-group")
    apresentaçao.insertAdjacentHTML("afterbegin", view)
  }
  
export function ExibicaodeIntegrante(){
    grupo.forEach((grupo) => SelecaoDeIntegrante(grupo.aluno, grupo.matricula))
}




export function createCardFromAdd(nome, linkpage, linkrep){
  return `<div class="col">
  <div class="card">
      <a href="${linkpage}" target="_blank">
        <img src="imgs/JavaScript.png" class="card-img-top" alt="..."></a>
      </a>
      <div class="card-body">
      <h5 class="card-title">${nome}</h5>
      <a href="${linkrep}" target="_blank">
        <p class="card-text"><i>Código Fonte<\i></p>
      </a>
  </div>
  </div>
</div>`
}

export function createCardDefault(linkPage, nome, linkRep){
    const view = `<div class="col">
    <div class="card">
        <a href="${linkPage}" target="_blank">
          <img src="imgs/JavaScript.png" class="card-img-top" alt="..."></a>
        </a>
        <div class="card-body">
        <h5 class="card-title">${nome}</h5>
        <a href="${linkRep}" target="_blank">
          <p class="card-text"><i>Código Fonte<\i></p>
        </a>
    </div>
    </div>
  </div>`

  const apresentaçao = document.querySelector("#mainContent")
  apresentaçao.insertAdjacentHTML("afterbegin", view)
}

export function ExibicaoDeProjeto(){
  cards.forEach((cards) => createCardDefault(cards.app, cards.nome, cards.repositorio))
}

export function loadHandCreateCard() {
  const form = document.querySelector("#formProject")
  const modal = new bootstrap.Modal(document.getElementById('formProjectModal'), {
      keyboard: false
    })
  form.onsubmit =  (event) =>{
    event.preventDefault()
    const formData = new FormData(form)
    const name = formData.get("name")
    const linkPage= formData.get("link-page")
    const linkRep = formData.get("link-rep")
    const novoCard= createCardFromAdd(name,linkPage, linkRep)
    const conteudo = document.querySelector("#mainContent")
    conteudo.insertAdjacentHTML("beforeend", novoCard)
    form.reset()
    modal.hide()
  }

}



