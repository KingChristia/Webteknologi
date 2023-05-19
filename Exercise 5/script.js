/* Part 2 */
// prints the numbers between 1 and 20 in console
function printNumbers(){
    console.log('PART 2')
    for (let index = 1; index < 21; index++) {
        console.log(index)
        
    }
}
// printNumbers()

/* Part 3 */
function epleAndKake() {
    console.log('PART 3')
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    // prints eplekake if modulo3 and 5 = 0, and eple if modulo 3, and kake if modulo 5, else number
    numbers.forEach(element => {
        if(element%3==0 && element%5==0){
            console.log("Eplekake")
        }else if (element%3==0){
            console.log("Eple")
        }else if (element%5==0){
            console.log("Kake")
        }else{
            console.log(element)
        }
    });
}
//epleAndKake()


/* Part 4 */

document.getElementById("title").textContent = 'Hello, JavaScript';



/* Part 5 */
function changeDisplay () {
    //First button
    var button1  = document.getElementsByClassName('buttons')[0].firstElementChild
    button1.addEventListener('click',function(event){
        var magic = document.getElementById('magic').style.display = 'none';
    })
        
}
changeDisplay()


function changeVisibility () {
    var button2  = document.getElementsByClassName('buttons')[0].firstElementChild.nextElementSibling
    
    button2.addEventListener('click', function(event){
        document.getElementById('magic').style.visibility = 'hidden';
        document.getElementById('magic').style.display = 'block';
    })
}
changeVisibility()

function reset () {
    var button3  = document.getElementsByClassName('buttons')[0].lastElementChild
    
    button3.addEventListener('click', function(e){
        document.getElementById('magic').style.display = "";
        document.getElementById('magic').style.visibility = "";
    })
}
reset()

/* Part 6 */
function part6(){
    
    const technologies = [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Python',
        'Java',
        'AJAX',
        'JSON',
        'React',
        'Angular',
        'Bootstrap',
        'Node.js'
    ];

    var ul = document.getElementById('tech')
    // appends the node for each element,
    technologies.forEach(element => {
        var node = document.createElement('li')
        var textnode = document.createTextNode(element)
        node.appendChild(textnode)
        ul.appendChild(node)
    });
}
part6()