function search(){
    
    let input = document.getElementById("movie-search").value;
    let mode = 'title'

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
    });

}