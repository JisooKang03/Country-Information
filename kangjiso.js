//function loadStudent() 
function loadStudent() {
    // Use fetch API to retrieve data from json file
    fetch("data/myInfo.json")
        .then(response => response.json())
        .then(data => {
            // Declare an object to hold the personal data
            const studentInfo = {};

            // Save personal data into the studentInfo object
            studentInfo.name = data.student.name;
            studentInfo.login = data.student.login;
            studentInfo.studentId = data.student.studentId;
            studentInfo.program = data.student.program;

            console.log(studentInfo);

            // Save data to Local Storage
            localStorage.setItem("studentInfo", JSON.stringify(studentInfo));
            updateHeader();
            updateFooter();
        });
       
}


function updateHeader() {
    // Retrieve student Info from
    const studentInfo = JSON.parse(localStorage.getItem("studentInfo"));

    // Build the output string using the student data
    const header = `<h2>Winter 2023 Assignment #2 for ${studentInfo.name}`;

    // Set the innerHTML of the header element to the output string
    document.getElementById("header").innerHTML = header;

    // Add a link to the student's name
    //document.getElementById("header").innerHTML = header.replace(studentInfo.name, `<a href="country.html">${studentInfo.name}</a>`);
}


function updateFooter() {
    // Get student Info from local storage
    const studentInfo = JSON.parse(localStorage.getItem("studentInfo"));

   
    // Build the output string using template literals
    const output = `My Login: ${studentInfo.login} / My ID: ${studentInfo.studentId} / My Program: ${studentInfo.program}`;

    // Update the footer div with the output string
    document.getElementById("footer").innerHTML = output;
}

function loadCountries() {
    fetch("data/countries.json")
        .then(response => response.json())
        .then(data => {

            document.getElementById("country-Info").innerHTML = "";
            document.getElementById("selectBox").innerHTML="<option> Select a Country</option>";
        for(let value of data.Countries){
            document.getElementById("selectBox").innerHTML += `
            <option>
            ${value.name}
            </option>`
        }
          

        for(let value of data.Countries){
            document.getElementById("country-Info").innerHTML += `<p>${value.name} - ${value.capital} - ${value.code}</p><hr>`;
        }
        
        });
}//loadCountries

function showCountryInfo(){
    //Get the selected Country code from json
    var selectBox = document.getElementById("selectBox");
    var countryCode = selectBox.value;

    //Navigate to the next page with the selected country code as a query string
    location.assign(`./pages/country.html?code=${data.Countries}`);

    // Call the showCountryInfo function when the dropdown list changes
    var selectBox = document.getElementById("selectBox");
    selectBox.onchange = function(){
        showCountryInfo();
    }
}

   
function showCountryInfo(){


    location.assign("./pages/country.html");
  
  }



function showCountryInfo() {
    // Get the selected country from the dropdown list
    var country = document.getElementById("selectBox").value;
    
    // Map the country name to its corresponding country code
    var countryCode;
    switch (country) {
      case "United States":
        countryCode = "USA";
        break;
      case "Canada":
        countryCode = "CAN";
        break;
      case "Germany":
        countryCode="DE";
        break;
      // add more cases for other countries as needed
    }
    
    // Navigate to the country.html page with the corresponding country code
    location.assign('./pages/country.html?code=' + countryCode);
   
  }

  
 
// function loadCountry(){
//     // Get the countryCode from the URL by looking for the query parameter called "code"
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const countryCode = urlParams.get('code');
  
//     // Make a fetch API call to the following endpoint URL
//     const api = `https://restcountries.com/v2/alpha?codes=${countryCode}`;
  
//     fetch(api)
//       .then(response => response.json())
//       .then(data => {
//         // Set the src property of the img to the flags.png of the result
//         const flagImg = document.querySelector('country-flag');
//         flagImg.src = data[0].flags.png;
  
//         // Set the innerHTML of the "capital" span to the capital property in the result
//         const capitalSpan = document.querySelector('#capital');
//         capitalSpan.innerHTML = data[0].capital;
  
//         // Set the innerHTML of the "population" span to the population property in the result
//         const populationSpan = document.querySelector('#population');
//         populationSpan.innerHTML = data[0].population;
//       })
//       .catch(error => console.log(error));
//  }
  

function loadCountry(){
    var urlParams = new URLSearchParams(window.location.search);
    var code = urlParams.get('code');

    var api = "https://restcountries.com/v2/alpha?codes=" + code;

    //Make the API call
    fetch(api)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        var flag = document.getElementById("flag");
        flag.src = data[0].flag;
        flag.alt = data[0].name;
    });
}

  function goBackToIndex() {
	// Go back to previous page
location.assign("../index.html");
	
}