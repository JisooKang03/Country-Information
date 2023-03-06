

function goBackToIndex() {
	// Go back to previous page
location.assign("../index.html");
	
}



 function loadCountry(){
     // Get the countryCode from the URL by looking for the query parameter called "code"
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const countryCode = urlParams.get('code');
  
    // Make a fetch API call to the following endpoint URL
    const api = `https://restcountries.com/v2/alpha?codes=${countryCode}`;
  
    fetch(api)
      .then(response => response.json())
      .then(data => {
        // Set the src property of the img to the flags.png of the result
        const flagImg = document.querySelector('#country-flag');
        flagImg.src = data[0].flags.png;
  
        // Set the innerHTML of the "capital" span to the capital property in the result
        const capitalSpan = document.querySelector('#capital');
        capitalSpan.innerHTML = data[0].capital;
  
        // Set the innerHTML of the "population" span to the population property in the result
        const populationSpan = document.querySelector('#population');
        populationSpan.innerHTML = data[0].population;
      })
      .catch(error => console.log(error));
 }


 