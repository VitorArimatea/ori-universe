export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
      <section class="page-section">
        <figure class="box">
          <img class="home-img shadow" src="assets/home-ori.png">
        </figure>
        <div class="box">
          <div class="section-text">
            <h2>Vamos falar sobre essa obra de arte</h2>
            <p>Ori and the blind forest é um jogo em plataforma, onde você irá se aventurar em cenários mágnificos.<p>
          </div>
        </div> 
      </section>  
    `
  
    return container; 
  }