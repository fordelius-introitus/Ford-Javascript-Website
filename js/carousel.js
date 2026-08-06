

//carousel

//Array storage class
let carouselArr = [];

let carousel_img, carousel_text, carouself_href;

carousel_img = document.getElementById("carousel-image");
carousel_text = document.querySelector('h5');
carousel_href = document.getElementById("carousel-href");

let slideAnimation = document.querySelector(".slide-anim");

let buttonWrapper = document.querySelector(".button-wrapper");
let buttons = buttonWrapper.querySelectorAll("button")

//class Carousel
class Carousel {
    constructor(imagem, descricao, pagina) {
        this.imagem = imagem;
        this.descricao = descricao;
        this.pagina = pagina;
    }
      
    static Start(){
        // for each image, creates a button
        carouselArr.forEach((item, index) => {
            let button = document.createElement("button");
            button.style.backgroundColor = "rgb(100, 100, 100)"
            button.id = `${index + 1}`;
            button.addEventListener('click', () => this.ChangeImage(index));
            buttonWrapper.appendChild(button);
        });

        if(carouselArr){
            if(carouselArr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = carouselArr.length;
                Carousel.Next(); //start

                Carousel._interval = setInterval(function(){
                     Carousel.Next(); Carousel._sequence++;
                     if(Carousel._sequence == carouselArr.length) Carousel._sequence = 0;
                    }, 2000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static ResetButtonColors() {
        const buttons = buttonWrapper.querySelectorAll("button");

        for(let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "rgb(100, 100, 100)"
        }
    }

    static Next(){
        const buttons = buttonWrapper.querySelectorAll("button");

        carousel_text.textContent = carouselArr[Carousel._sequence].descricao;
        carousel_img.setAttribute('src', carouselArr[Carousel._sequence].imagem);
        carousel_href.setAttribute('href', carouselArr[Carousel._sequence].pagina);

        this.ResetButtonColors();
        buttons[Carousel._sequence].style.backgroundColor = "rgb(27, 91, 209)"
    }
    
    // particularly for buttons
    static ChangeImage(index) {
        const buttons = buttonWrapper.querySelectorAll("button");

        Carousel._sequence = index;

        carousel_text.textContent = carouselArr[index].descricao;
        carousel_img.setAttribute('src', carouselArr[Carousel._sequence].imagem);
        carousel_href.setAttribute('href', carouselArr[Carousel._sequence].pagina);

        this.ResetButtonColors();
        buttons[Carousel._sequence].style.backgroundColor = "rgb(27, 91, 209)"
    }
};