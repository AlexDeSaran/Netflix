var main = document.querySelectorAll('.main .centro')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=1')
.then(response=> response.json())
 .then(data=>{
    data.results.map((i,j)=>{
        
        if(j > 14)
        
            return;
        
            if(j==0){
                main.innerHTML+=`
                <h2>Bem Vindo SR. Gado</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200`+i.poster_path+`" /></div>
                `;
            }else{

                main.innerHTML+=`
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200`+i.poster_path+`" /></div>
                `;
            }
        
        

    })
})

fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=2')
.then(response=> response.json())
 .then(data=>{
    data.results.map((i,j)=>{
        
        if(j > 15)
            return;
        if(j == 0){

            main.innerHTML+=`
                <h2>Assista Aos Melhores Filmes</h2>
                <div class="banner-principal" style="margin-top:20px;background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j==1){
                main.innerHTML+=`
                <h2>Assista Agora</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200`+i.poster_path+`" /></div>
                `;
            }else{

                main.innerHTML+=`
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200`+i.poster_path+`" /></div>
                `;
            }
        
        }

    })
})
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=3')
.then(response=> response.json())
 .then(data=>{
    data.results.map((i,j)=>{
        
        if(j > 15)
            return;
        if(j == 0){

            main.innerHTML+=`
            <h2>Em Cartaz</h2>
                 <div class="banner-principal" style="margin-top:20px;background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j==1){
                main.innerHTML+=`
                <h2>Para Assistir Agora</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200`+i.poster_path+`" /></div>
                `;
            }else{

                main.innerHTML+=`
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200`+i.poster_path+`" /></div>
                `;
            }
        
        }

    })
})
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=4')
.then(response=> response.json())
 .then(data=>{
    data.results.map((i,j)=>{
        
        if(j > 15)
            return;
        if(j == 0){

            main.innerHTML+=`
            <h2>Anima????es</h2>
                 <div class="banner-principal" style="margin-top:20px;background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j==1){
                main.innerHTML+=`
                <h2>A????o</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200`+i.poster_path+`" /></div>
                `;
            }else{

                main.innerHTML+=`
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200`+i.poster_path+`" /></div>
                `;
            }
        
        }

    })
})
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&languague=en-US&page=5')
.then(response=> response.json())
 .then(data=>{
    data.results.map((i,j)=>{
        
        if(j > 15)
            return;
        if(j == 0){

            main.innerHTML+=`
            <h2>Para Animar</h2>
                 <div class="banner-principal" style="margin-top:20px;background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j==1){
                main.innerHTML+=`
                <h2>Suspense</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200`+i.poster_path+`" /></div>
                `;
            }else{

                main.innerHTML+=`
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w200`+i.poster_path+`" /></div>
                `;
            }
        
        }

    })
})