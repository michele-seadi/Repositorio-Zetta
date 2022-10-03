console.log('teste');






function fnLoadPortfolio() {
    
   
    
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

    AOS.init();

    function logar(){

        var login = document.getElementById('email').value;
        var senha = document.getElementById('password').value;

        if(login == "admin@admin" && senha == "admin"){
            alert('Sucesso');
        }else{
            alert('Erro');
        }
    }