export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
      <section class="page_section">
        <figure class="box">
          <img class="contact-img shadow" src="./assets/credits-naru-ori.png">
        </figure>
        <div class="box">
          <div class="section_text">
            <h2>Créditos</h2>
            <p>Esse game é uma IP da Moon Studios
            </p>
          </div>
        </div> 
      </section>  
    `
  
    return container; 
  }