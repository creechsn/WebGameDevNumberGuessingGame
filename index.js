/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var generatedNumber;
var numberOfTries = 0;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

      //  listeningElement.setAttribute('style', 'display:none;');
      //  receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);


        generatedNumber = Math.floor((Math.random() * 10) + 1);

        console.log(generatedNumber);
    }
};

app.initialize();

document.getElementById("SubmitGuess").onclick = function(){Validate(generatedNumber)};

    function Validate(generatedNumber){

        var x, text;

        var guess = generatedNumber;

        numberOfTries = numberOfTries + 1;

          // Get the value of the input field with id="userGuess"
          x = document.getElementById("userGuess").value;

          // If x is Not a Number or less than one or greater than 10
          if (isNaN(x) || x < 1 || x > 10) {
            text = "Input not a number between 1-10";
          } 
          else {


            if(x == guess){

                text = "Correct! It took you " + numberOfTries + " Tries";

                document.getElementById("buttonChoices").style.display = "inline";

            }
            else{
                alert("Incorrect guess, please try again.");
            }
          }
          document.getElementById("demo").innerHTML = text;
      };

    function restartGame(){

       document.getElementById("buttonChoices").style.display = "none";

       document.getElementById("userGuess").value = "";

       document.getElementById("demo").innerHTML = "";

        app.initialize();
    }


document.getElementById("Restart").onclick = function(){restartGame()};