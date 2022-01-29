// initialization
const avatarClick = document.querySelector('.avatar');
const wrapper = document.querySelector('.wrapper');
const wrapperImg = document.querySelector('.wrapper img');
const previous = document.querySelector('.previous-icon img');
const dropDown = document.querySelectorAll('.wrapper .avatar-dropdown p')

// click
avatarClick.addEventListener('click', function(){
    wrapper.classList.add('avatar-click');
    wrapperImg.style.display = 'inline-block';
    wrapperImg.style.width = '30%';
    wrapperImg.style.alignSelf = 'center';
    previous.style.display = 'block';

    for(i = 0; i<dropDown.length; i++){
        dropDown[i].style.display = 'block';
        dropDown[i].style.margin = '10px';
        dropDown[i].style.color = 'black';
        dropDown[i].style.cursor = 'pointer';
    }
})

// previous
previous.addEventListener('click', function(){
    wrapper.classList.remove('avatar-click');
    wrapperImg.style.display = 'none';
    for(i = 0; i<dropDown.length; i++){
        dropDown[i].style.display = 'none';
    }
    previous.style.display = 'none';
})
