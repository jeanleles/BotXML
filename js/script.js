const url = "data/dataset.xml";

$.ajax(url)
  .done(function (xml) {
    $(xml).find("usuario").each(function () {
      $("#cards").append(`<div class="card">
        <img src="${$(this).find("foto").text()}" class="img-card">
        <h2>${$(this).find("nome").text()}</h2>
        <p class="idade">${$(this).find("idade").text()} anos</p>
        <p>${$(this).find("cargo").text()}</p>
        <p>${$(this).find("cidade").text()}, ${$(this).find("estado").text()}</p>
        <div class="redes-sociais">
          <ul>
            <li>
              <a href="${$(this).find("linkedin").text()}" target="blanck"><img src="images/linkedin.png" alt="Linkedin"></a>
            </li>
            <li>
              <a href="${$(this).find("github").text()}" target="blanck"><img src="images/github.png" alt="Github"></a>
            </li>
            <li>
              <a href="${$(this).find("twitter").text()}" target="blanck"><img src="images/twitter.png" alt="Twitter"></a>
            </li>
          </ul>
        </div>
      `);
    })
  })
  .fail(function () {
    alert('Ocorreu um erro na leitura do arquivo XML');
  })