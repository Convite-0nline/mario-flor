let nextBtn =document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
 
let thumbnail = document.querySelector('.thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// function for next button

nextBtn.onclick = function(){
    moveSlider('next')
}

//function for prev button
prevBtn.onclick = function(){
    moveSlider('prev')
}

function moveSlider(direction){
   let sliderItems = slider.querySelectorAll('.item')
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    }else{
        sliderList.appendChild(sliderItems[sliderItems.length -1])

        thumbnail.appendChild(thumbnailItems[thumbnailItems.length -1])
        slider.classList.add('prev')
    }

slider.addEventListener('animationend',function(){ 
    
        let sliderItems = sliderList.querySelectorAll('.item')
        let thumbnailItems = document.querySelectorAll('.thumbnail .item')
        if(direction === 'next'){
            slider.classList.remove('next')
        }else{
            slider.classList.remove('prev')
        } {once: true} // remove the event listener after
    })
}