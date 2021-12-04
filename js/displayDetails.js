export default function closeModal(btn){
    document.addEventListener('click', e =>{
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)){
            document.querySelector('.modalContainer').remove();
        }
    })
}