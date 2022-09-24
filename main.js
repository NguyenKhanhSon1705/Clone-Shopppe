var input = document.querySelector('.header__search-input');
var historySearch = document.querySelector('.header__search-history');
function SHOW() {
    historySearch.style.display = 'block';
}
input.addEventListener('click', SHOW);



// log in  
const modal = document.querySelector('.modal');
const logIns = document.querySelectorAll('.js__logIn');
const creates = document.querySelectorAll('.js__create');
const modalLogIn = document.querySelector('.modal__logIn');
const modalCreate = document.querySelector('.modal__create');
const Closes = document.querySelectorAll('.js__close');
const modalContainer = document.querySelector('.modal__container');

function ShowModalLogIn (){
    modalLogIn.style.display = 'flex';
    modalCreate.style.display = 'none';
    modal.style.display = 'flex';
    closeLogIn();
}
function ShowModalCreate(){
    modalCreate.style.display = 'flex';
    modalLogIn.style.display = 'none';
    modal.style.display = 'flex';
    closeLogIn();
}
function CloseModal(){
    modal.style.display = 'none';
}

for(var logIn of logIns){
    logIn.addEventListener('click' , ShowModalLogIn);
}
for(var create of creates){
    create.addEventListener('click' , ShowModalCreate);
}
modal.addEventListener('click', function(){
    modal.style.display = 'none';
})
for(var Close of Closes){
    Close.addEventListener('click' , CloseModal)
}
modalContainer.addEventListener('click' , function(e){
    e.stopPropagation();
})


// header category mobile 
const menu = document.querySelector('.header__menu__mobile');
const category = document.querySelector('.category');
const categoryClose = document.querySelector('.category__close-icon');
const logInClose = document.querySelector('.logIn__close-icon');
const userIcon = document.querySelector('.header__user-icon ');
const menuLogIn = document.querySelector('.LogIn-list');
function CLOSE(){
    category.style.display = 'none';
}
function closeLogIn(){
    menuLogIn.style.display = 'none';
}
categoryClose.addEventListener('click' , CLOSE )
logInClose.addEventListener('click' , closeLogIn )

menu.addEventListener('click', function(){
    category.style.display = 'block';
});
userIcon.addEventListener('click' , function(){
    menuLogIn.style.display = 'block';
})
