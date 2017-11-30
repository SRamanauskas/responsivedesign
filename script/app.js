"use strict";
document.querySelector('.js-hamburger').addEventListener('click', function(){
    document.querySelector('.js-hamburger-menu').classList.toggle('is-visible');
    document.querySelector('.js-hamburger-icon').classList.toggle('is-close');
}); 

document.querySelector('.js-all').addEventListener('click', function(){
    this.classList.toggle('is-hidden');
    document.querySelector('.js-panel').classList.toggle('is-scrollable');
    document.querySelector('.js-other').classList.toggle('is-visible');
}); 

document.querySelector('.js-less').addEventListener('click', function(){
    document.querySelector('.js-all').classList.toggle('is-hidden');
    document.querySelector('.js-panel').classList.toggle('is-scrollable');
    document.querySelector('.js-other').classList.toggle('is-visible');
});

document.querySelector('.js-all-mobile').addEventListener('click', function(){
    this.classList.toggle('is-hidden');
    document.querySelector('.js-other-mobile').classList.toggle('is-visible');
}); 

document.querySelector('.js-less-mobile').addEventListener('click', function(){
    document.querySelector('.js-all-mobile').classList.toggle('is-hidden');
    document.querySelector('.js-other-mobile').classList.toggle('is-visible');
}); 

(function () {
    var dropdowns = document.getElementsByClassName('js-dropdown');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].onclick = function() {
            this.querySelector('.js-content').classList.toggle('is-active');
        }
    }
}());

(function () {
    var accordion = document.getElementsByClassName('js-accordion');
    var i;
    for (i = 0; i < accordion.length; i++) {
        accordion[i].onclick = function() {
            if(this.querySelector('.js-accordion-icon')) {
                this.querySelector('.js-accordion-icon').classList.toggle('is-icon-minus');
            }
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        }
    }
}());

(function setDate() {
    var date = new Date();
    var year = date.getFullYear();
    document.querySelector('.js-rights').innerHTML = '© ' + year + ' Cromwell Leicester, England.';
}()); 