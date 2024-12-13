const form =document.querySelector('.form');
const message = document.querySelector('.meassage');
const popup = document.querySelector('.popupWrapper');
const dismiss = document.querySelector('.dismiss');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const value = form.email.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(pattern.test(value)){
       message.innerHTML = ''
       popup.style.display = 'block';
    }else{
       message.innerHTML = 'its not a valid email!'
       form.email.style.border = "2px solid red"
    }
})
dismiss.addEventListener('click', () => { 
    popup.style.display = 'none'; });
popup.addEventListener('click', () => {
    popup.style.display = 'none'
})
