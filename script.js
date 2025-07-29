const app = document.getElementById("App")
function sMediaProva(atividade,prova){
  return ((atividade*0.4) + (prova*0.6))
}

function sMediaExame(mAtividadeProva,exame){
  return ((mAtividadeProva*0.25) + (exame*0.5))
}

function vProva (atividade){
  return ((atividade*0.4 -5)/ -0.6)
}

function vExame(atividadeProva){
  return ((-atividadeProva*0.5 + 5)/ 0.5)
}

function passarResultado(path, resultado){
  path.innerText = resultado.toFixed(2)
}

document.getElementById("buttonOpenMedia").addEventListener("click", opensMediaProva)

function opensMediaProva(){
  app.innerHTML = `<div class="mediaProva"><p>Insira a nota das suas atividades:</p>
  <input type="number" id="notaAtividade" placeholder="Insira sua media das atividades" />
  <input type="button" value="Calc" onclick='passarResultado(document.getElementById("result"), vProva(document.getElementById("notaAtividade").value))' />
  <p>Você precisará de <span id="result" class="result"> porr </span> para passar! </p>
  </div>`;
}