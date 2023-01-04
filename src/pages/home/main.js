export default () => {
    const container = document.createElement("div");
    container.classList.add("container");
    
    container.innerHTML = `
      <section class="page-section">
        <figure class="box">
          <img class="home-img shadow" src="">
        </figure>
        <div class="box">
          <div class="section-text">
            <h2>Início</h2>
            <p>Em produção...<p>
          </div>
        </div> 
      </section>  
    `
  
    return container; 
  }