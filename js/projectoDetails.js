export default function projectDetails(project){
    document.addEventListener('click', e=>{
        if(e.target.matches(project)){
            console.log(e)
            // * Obetener todos los valores de la tarjeta
            const $parentContainer = e.target.parentElement,
            title = $parentContainer.querySelector('h3').textContent,
            description = $parentContainer.querySelector('#description').textContent,
            // client = $parentContainer.querySelector('#client').textContent,
            date = $parentContainer.querySelector('#date').textContent,
            link = $parentContainer.querySelector('#link').textContent,
            image = $parentContainer.querySelector('#image').getAttribute('src'),
            $template = document.getElementById('template').content,
            body = document.querySelector('body');
            // * Crear el modal con los valores obtenidos
            let $clone = document.importNode($template, true);
            $clone.querySelector('#title').textContent += title;
            $clone.querySelector('#description').textContent += description;
            // $clone.querySelector('#client').textContent += client;
            $clone.querySelector('#date').textContent += date;
            $clone.querySelector('#link').textContent += link;
            $clone.querySelector('#link').setAttribute('href', link);
            $clone.querySelector('#image').setAttribute('src',image);
            $clone.querySelector('#image').setAttribute('alt',title);
            body.appendChild($clone);
        }
    })
}