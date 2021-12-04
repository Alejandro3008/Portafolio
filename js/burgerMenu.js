export default function burgerMenu(menu,btn,link){
    const d = document;
    d.addEventListener('click', e =>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            d.querySelector(menu).classList.toggle('display');
            d.querySelector('.gg-menu').classList.toggle('none');
            d.querySelector('.gg-close').classList.toggle('none');
        }
        if(e.target.matches(link)){
            d.querySelector(menu).classList.toggle('display');
            d.querySelector('.gg-menu').classList.toggle('none');
            d.querySelector('.gg-close').classList.toggle('none');
        }
    })

}