export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
      <section class="page_section">
        <figure class="box">
          <img class="about-img shadow" src="./assets/about-ori.png">
        </figure>
        <div class="box">
          <div class="section_text">
            <h2>Sobre</h2>
            <p>Ori and the will of the wisps é um jogo em plataforma, onde você irá se aventurar em cenários mágnificos.<p>

            <h2>Vamos falar sobre essa obra de arte</h2>
            <p>O título é a sequência do game original Ori and the Blind Forest, lançado em 2015. Neste novo segundo capítulo, os jogadores devem ajudar Ori a encontrar Kun, sua amiga coruja que se perdeu durante um voo.<p>
          </div> 
        </div> 
      </section>  
    `
  
    return container; 
  }