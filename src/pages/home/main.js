export default () => {
  const container = document.createElement("div")
  container.classList.add("container")

  container.innerHTML = `
    <section class="page_section">
        <figure class="box">
          <img src="./assets/home-ori.png" alt="Ori segurando um coração">
        </figure>
        <div class="box">
          <div class="section_text">
            <h2>Sobre</h2>
            <p>Ori and the blind forest é um jogo em plataforma, onde você irá se aventurar em cenários mágnificos.<p>

            <h2>Vamos falar sobre essa obra de arte</h2>
            <p>A floresta de Nibel está morrendo. Após uma grande tempestade colocar em andamento uma série de eventos devastadores, Ori deve viajar em busca da coragem para confrontar um inimigo sombrio e salvar a floresta de Nibel. "Ori and the Blind Forest conta a história de uma jovem órfão destinado ao heroísmo, em um jogo de Ação em Plataformas com visual incrível criado pela Moon Studios. Apresentando artes pintadas à mão, personagens animados meticulosamente, uma trilha sonora totalmente orquestral e dezenas de novos recursos na Definitive Edition, "Ori and the blind Forest" explora uma história profundamente emocional sobre amor e sacrifício e sobre a esperança que existe em todos nós.<p>
          </div>
        </div> 
      </section>  
    `

  return container
}
