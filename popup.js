
function showImage(responseAsJSON) {

  var imgURL = JSON.stringify(responseAsJSON)

 var end = imgURL.indexOf('.jpg"');
 var url = imgURL.substring(12,end+4)
 console.log(url)

    document.getElementById("dogImage").src = url;

}

function logError(error) {
    console.log('Looks like there was a problem: \n', error);
}

function validateResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function readResponseAsJSON(response) {
    return response.json();
}

function fetchJSON(pathToResource) {
    fetch(pathToResource) // 1
        .then(validateResponse) // 2
        .then(readResponseAsJSON) // 3
        .then(showImage) // 4
        .catch(logError);
}
fetchJSON('https://dog.ceo/api/breeds/image/random')

document.getElementById("button!").addEventListener("click", function() {
    fetchJSON('https://dog.ceo/api/breeds/image/random');
});
