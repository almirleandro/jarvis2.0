    // Buttons in the footer

    function dropdownMenu() {
      document.querySelector(".menuPointer").classList.toggle("active");
      document.querySelector(".menuAfazeres").classList.toggle("active");
    };

    function dropdownConfig() {
      document.querySelector(".infoPointer").classList.toggle("active");
      document.querySelector(".infoBox").classList.toggle("active");
    }

    document.querySelector(".bottomLeft").addEventListener("click", function() {dropdownMenu()});
    document.querySelector("#infoButton").addEventListener("click", function() {dropdownConfig()});

    // Display time and date

    let weekArray = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    let monthArray = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

    function displayTime() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let weekDay = date.getDay();
      let month = date.getMonth();
      let day = date.getDate();
      let year = date.getFullYear();
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      let fullTime = hours + ":" + minutes;
      let fullDate = weekArray[weekDay] + ", " + day + " " + monthArray[month] + " " + year;
      document.getElementById("time").innerText = fullTime;
      document.getElementById("date").innerText = fullDate;
    }

    displayTime();
    setInterval(displayTime, 1000);

    // Display to dos dynamic

    let afazeresArray = [];

    let writeImput = document.getElementById("writeHere");
    writeImput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("moveButton").click();
      }
    });

    function moveValue() {
      let value = document.getElementById("writeHere").value;
      document.getElementById("writeHere").value = "";
      if (value !== "") {
        afazeresArray.push(value);
        displayAfazer();
      }
    }

    function displayAfazer() {
      // Create the box
      let afazerBox = document.createElement('div');
      let menuBox = document.querySelector('.menuAfazeres');
      menuBox.appendChild(afazerBox); // Put the div in the menu box
      let lastAfazerBox = menuBox.lastChild;
      lastAfazerBox.setAttribute('class', 'afazerBox'); // Give it a class

      // Display afazer
      let lastItem = afazeresArray[afazeresArray.length - 1];
      let newAfazer = document.createElement('div');
      newAfazer.textContent = lastItem; // Put the text in the div
      lastAfazerBox.appendChild(newAfazer);
      let lastAfazer = lastAfazerBox.lastChild;
      lastAfazer.setAttribute('class', 'afazer'); // Give it a class

      // Display edit button
      

      // Display delete button
      let createDelBut = document.createElement('i');
      lastAfazerBox.appendChild(createDelBut);
      lastAfazerBox.lastChild.setAttribute('class', 'fas fa-times fa-xs');

      // display number of to dos
      let totalNum = afazeresArray.length;
      document.querySelector('#afazeresLenght').textContent = "[" + totalNum + "]";
    }