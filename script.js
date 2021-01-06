let open = false;

function search(){

    // let input = document.getElementById("movie-search").value;
    let input = 'Star Wars';
    let mode = 'title';

    let i = 0;
    while (i < input.length){
        if(input[i] === ' '){
            input = input.substring(0, i) + input.substring(i+1, input.length);
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

function openNominationsMenu(){

    if(open === false){
        document.getElementById("nominationsMenu").style.width = "300px";
        document.getElementById("gray-filter").style.display = "block";
        document.getElementById("gray-filter").style.opacity = "0.5";
        open = true;
    }
    else{
        document.getElementById("nominationsMenu").style.width = "100px";
        document.getElementById("gray-filter").style.opacity = "0";
        document.getElementById("gray-filter").style.display = "none";
        open = false;
    }

}
