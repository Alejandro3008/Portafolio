export default function titleEffect(){
    loop();
}

const words = ["I'm Developer", "I'm Alejandro"],
    // titleWord = ["Hi!"],
    $wordContainer = document.getElementById('wordChange');
    // $titleContainer = document.querySelector('.title');
let character = 0,
    word = 0,
    deleting = false,
    actualPhrase = [],
    // actualTitle = [],
    // titleCharacter = 0,
    end = false;

function loop(){
    end = false
    if(word < words.length){
        if(!deleting && character<=words[word].length){
            actualPhrase.push(words[word][character]);
            character++;
            // actualTitle.push(titleWord[0][titleCharacter]);
            // titleCharacter++;
            // $titleContainer.innerHTML = actualTitle.join('')
            $wordContainer.innerHTML = actualPhrase.join('');
        }
        if(deleting && character<= words[word].length){
            actualPhrase.pop(words[word][character]);
            character--;
            // actualTitle.pop(titleWord[0][titleCharacter]);
            // titleCharacter--;
            // $titleContainer.innerHTML = actualTitle.join('')
            $wordContainer.innerHTML = actualPhrase.join('');
        }
        if(character == words[word].length){
            end = true;
            deleting = true;
        }
        if(deleting && character === 0){
            actualPhrase = []
            deleting = false
            word++;
            if(word === words.length){
                word = 0;
            }
        }
    }
    const spedUp = Math.random() * (80 -50) + 50;
    const normalSpeed = Math.random() * (300 -200) + 200;
    const time = end ? 500 : deleting ? spedUp : normalSpeed;
    setTimeout(loop, time)
}