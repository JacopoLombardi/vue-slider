
const {createApp} = Vue;


createApp({

    data(){
        return{

            objectArray:[
                {
                    url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
                    title: 'Svezia',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
                },
                {
                    url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
                    title: 'Perù',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
                },
                {
                    url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
                    title: 'Chile',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
                },
                {
                    url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
                    title: 'Argentina',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
                },
                {
                    url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
                    title: 'Colombia',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
                }
            ],


            indice: 0,

            urlArray: [],
            titleArray: [],
            descriptionArray: [],

            userActivit: false,
        }
    },






    methods:{

        // pusho gli Url - title - description in 3 array separati
        pushIn(){
            this.objectArray.forEach((element) => {
                
                this.urlArray.push(element.url);
                this.titleArray.push(element.title);
                this.descriptionArray.push(element.description);
            })
        },



        nextOrPrev(value){
            // controllo se abbiamo cliccato il pulsate next o prev
            if(value === true){
                this.indice++;
            }else{
                this.indice--;
            };

            console.log(this.indice)

            // controllo che indice abbia un valore compreso tra 0 e 5
            if(this.indice === this.objectArray.length){
                this.indice = 0;
            }else if(this.indice < 0){
                this.indice = this.objectArray.length - 1;
            };
        },

        
        // auto play dello slider con il controllo del cursore
        autoPlay(){
            setInterval( () => {
                if(!this.userActivit){
                    this.nextOrPrev(true);
                }
            }, 3000);
        },
    },
    




    mounted(){

        this.pushIn();
        this.autoPlay();
    }



}).mount('#app');
















// // input btn
// const btnPrev = document.querySelector('.my-previous');
// const btnNext = document.querySelector('.my-next');


// // output delle cards
// const outputcard = document.querySelector('._outputcard');


// let counter = 0;



// // con 'for of' seleziono tutti gli oggetti e le loro proprietà
// for(object of objectArray){

//     outputcard.innerHTML += `
    
//     <div class="_card  d-none  my-carousel-item active">
//         <img class="img-fluid" src="${object.url}">
//         <div class="item-description px-3">
//             <h2>${object.title}</h2>
//             <p>${object.description}</p>
//         </div>
//     </div> 
    
//     `;
// };




// // seleziono tutte le cards richiamando la classe _card e le metto dentro un array
// const cardsHtmlArray = document.querySelectorAll('._card');

// // mostro subito la prima card
// cardsHtmlArray[0].classList.remove('d-none');




// setInterval(next, 2000);




// btnNext.addEventListener('click', next);


// btnPrev.addEventListener('click', prev);





// // funzione che mostra l'immagine successiva e controlla i pulsanti
// function next(){

//     cardsHtmlArray[counter].classList.toggle('d-none');    // nascondo l'immagine corrente
//     counter++;

//     // se il contatore ha raggiunto l'ultima immagine, nascondi ArrowUp
//     if(counter === cardsHtmlArray.length){
//        counter = 0;
//     }

//     cardsHtmlArray[counter].classList.toggle('d-none');    // mostro l'immagine successiva
//  }






// // funzione che mostra l'immagine precedente e controlla i pulsanti
//  function prev(){
    
//     cardsHtmlArray[counter].classList.toggle('d-none');    // nascondo l'immagine corrente

//     // se il counter è minore di 0
//     if(counter === 0){
//         counter = cardsHtmlArray.length;
//     }

//     counter--;
//     cardsHtmlArray[counter].classList.remove('d-none');    // mostro l'immagine successiva
//  }
