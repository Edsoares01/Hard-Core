var header = document.querySelector('.header');

//consele.log(header);


window.addEventListener('scroll',function(){


//console.log('rolou');
//console.log(windows.scrolly);


if(window.scrollY > 100){

header.classList.add('header-fixed');

}else{


    header.classList.remove('header-fixed');
}

var btnMenu = document.querySelector('.btn-menu');
    var menu = document.querySelector('.menu');
    
    
    btnMenu.addEventListener('click',function(){     
        menu.classList.toggle('menu-open');                
    })


})