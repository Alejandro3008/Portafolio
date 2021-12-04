export default function sendMail(){
    const $form = document.querySelector('.contact-form');
    $form.addEventListener('submit', e=>{
        e.preventDefault();
        let x = new FormData(e.target)
        console.log(x.get('name'))
        fetch('https://formsubmit.co/ajax/ferralalejandro17@gmail.com',{
            method: 'POST',
            body: new FormData($form)
        })
        .then(resp => resp.ok? resp.json() : Promise.reject(resp))
        .then(json =>{
            console.log(json);
            $form.reset();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'thanks for the message',
                showConfirmButton: false,
                timer: 1500
                })
        })
        .catch(error => {
            console.log(error)
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Ups, something went wrong :c',
                showConfirmButton: false,
                timer: 1500
                })
        });
    })
}