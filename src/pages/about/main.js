export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
      <section class="page_section">
        <figure class="box">
          <img class="about-img shadow" src="assets/about-ori.png">
        </figure>
        <div class="box">
          <div class="section_text">
            <h2>Sobre</h2>
            <p>Em produção...</p>
          </div> 
        </div> 
      </section>  
    `
  
    return container; 
  }