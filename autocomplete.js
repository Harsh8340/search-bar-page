let availabaleKeywords = [
    'HTML',
    'CSS',
    'Web design',
    'JavaScript',
    'Where to learn coding online',
    'How to create a website',
    'dhjgghj',
    'shjkghs',
    'sfnjrfjkgn',
    'sfbjkfhur',
    'scnjklfjnfg',
    'sfjfbjg',
    'sdfjnfbj',

];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availabaleKeywords.filter((keyword)=>{
           return  keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    
    });

    resultsBox.innerHTML = "<ul>" + content.join(' ') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}