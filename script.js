console.log('teste');




/*...o código abaixo se refere a tentativa de colocar um Json nos filtros da pagina Cursos...*/

function fnLoadPortfolio() {
    /*
    <div class="card m-2 p-2" style="width: 18rem; float:left">
        <img src="assets/img/aluno_03.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    */
    /*
    
    {
        "img":"aluno_03.jpg",
        "title":"Card title",
        "text":"Some quick example text to build on the card title and make up the bulk of the card's content."
    }*/
    
    const container = document.querySelector("#container-portfolio");
        fetch('./dados/portfolio.json')
        .then(res=> res.json())
        .then(dadosJson => {
    
            dadosJson.map(item => {
                container.innerHTML += `<div class="card m-2 p-2" style="width: 18rem; float:left">
                <img src="assets/img/${item.img}" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`;
            })
    
        })
    }
    
    fnLoadPortfolio();