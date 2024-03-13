'use strict';

let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-var-container')

window.onscroll = () =>{
    //searchBtn.classList.remove('fa-times');
    //searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});