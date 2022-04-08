const up_btn=document.querySelector('.up-button')
const down_btn=document.querySelector('.down-button')
const left_slides=document.querySelector('.left_slider')
const right_slides=document.querySelector('.right_slider')
const slider_container=document.querySelector('.slider_container')
const right_slider_length=right_slides.querySelectorAll('div').length

let activeIndex=0;

up_btn.addEventListener('click',()=>changeSlides('up'))
down_btn.addEventListener('click',()=>changeSlides('down'))

left_slides.style.top=`-${(right_slider_length-1)*100}vh`
function changeSlides(direction){
    let sliderHeight=slider_container.clientHeight
    if(direction=='up'){
        activeIndex++;
       
          if(activeIndex>right_slider_length-1){
        activeIndex=0;
    }
    
    }
   
    else if(direction=='down'){
        if(activeIndex==0){
            activeIndex=right_slider_length-1;
            console.log(activeIndex)
        }
        else{
  activeIndex-- ;
        }
      
        
   
    }
    right_slides.style.transform=`translateY(-${activeIndex*sliderHeight}px)`
     left_slides.style.transform=`translateY(${activeIndex*sliderHeight}px)`

}
