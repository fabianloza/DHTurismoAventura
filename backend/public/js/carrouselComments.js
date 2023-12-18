const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const conteCarrousel = document.querySelector('.conteCarrousel');

var testimonioWidth = document.getElementById('testimonio-7').scrollWidth;

const carrouselDot1 = document.querySelector('.carrousel-dot1');
const carrouselDot2 = document.querySelector('.carrousel-dot2');
const carrouselDot3 = document.querySelector('.carrousel-dot3');

var tarjetaCarrouselWidth = document.getElementById('itemCarrousel-3').scrollWidth;

var ultimaPos =1;

prev.addEventListener('click',()=>{    
    conteCarrousel.scrollLeft -= testimonioWidth;
})

next.addEventListener('click',()=>{    ;  
    conteCarrousel.scrollLeft += testimonioWidth;
})

carrouselDot1.addEventListener('click',()=>{     
    if (ultimaPos ==2){
        conteCarrousel.scrollLeft -= tarjetaCarrouselWidth;
    }
    if (ultimaPos ==3){
        conteCarrousel.scrollLeft -= tarjetaCarrouselWidth*2;
    }     
    ultimaPos = 1;  
})

carrouselDot2.addEventListener('click',()=>{ 
    if (ultimaPos ==1){
        conteCarrousel.scrollLeft += tarjetaCarrouselWidth;
    }
    if (ultimaPos ==3){
        conteCarrousel.scrollLeft -= tarjetaCarrouselWidth;
    }     
    ultimaPos = 2;  
})

carrouselDot3.addEventListener('click',()=>{
      
    if (ultimaPos ==1){
        conteCarrousel.scrollLeft += tarjetaCarrouselWidth*2;
    }
    if (ultimaPos ==2){
        conteCarrousel.scrollLeft += tarjetaCarrouselWidth;
    }    
    ultimaPos = 3; 
})
