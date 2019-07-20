var btn = document.querySelector('button')

// btn.addEventListener("click", () => {
//     if (document.body.style.background == 'purple'){
//         document.body.style.background = 'white'
//     }else{
//         document.body.style.background = 'purple';
//     }
// })

btn.addEventListener('click', () => document.body.classList.toggle('purple'))