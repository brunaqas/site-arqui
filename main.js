var ul = document.querySelector('nav ul');
var menuIcon =  document.querySelector('.menu-icon i');

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}
