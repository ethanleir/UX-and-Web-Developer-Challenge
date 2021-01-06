const axios = require('axios');

function search(){

    // let input = document.getElementById("movie-search").value;
    let input = 'Star Wars';
    let mode = 'title';

    let i = 0;
    while (i < input.length){
        if(input[i] === ' '){
            input = input.substring(0, i) + '+' + input.substring(i+1, input.length);
        }
        else{
            i++;
        }
    }

    axios.get('http://www.omdbapi.com/?apikey=d5fbf29f&t='.concat(input))
    .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    }, (error)=> {
        console.log(error);
    });

}

// function handleCalls(){
//     search();

// }

// $(function() {
//     handleCalls();
// });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function openNominationsMenu(){

    if(open === false){
        document.getElementById("nominationsMenu").style.width = "300px";
        document.getElementById("gray-filter").style.display = "block";
        document.getElementById("gray-filter").style.opacity = "0.5";

        await sleep(350);
        let nodeList = document.getElementsByClassName("text fade");
        let i = 0;
        while (i < nodeList.length){
            nodeList[i].style.cursor = "text";
            nodeList[i].style.opacity = "1";
            i++;
        }

        open = true;
    }
    else{
        document.getElementById("nominationsMenu").style.width = "100px";
        document.getElementById("gray-filter").style.opacity = "0";
        document.getElementById("gray-filter").style.display = "none";

        let nodeList = document.getElementsByClassName("text fade");
        let i = 0;
        while (i < nodeList.length){
            nodeList[i].style.cursor = "default";
            nodeList[i].style.opacity = "0";
            i++;
        }

        open = false;
    }

}
