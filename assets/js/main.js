
      
        var redBtnElement = document.getElementById('redBtn');
        var greenBtnElement = document.getElementById('greenBtn');
        var blueBtnElement = document.getElementById('blueBtn');
        var defaultBtnElement = document.getElementById('defaultBtn');


        redBtnElement.onclick = function(){
            var mystyleElement = document.getElementById('mystyle');
            mystyleElement.className = 'styleOne';
        };
        greenBtnElement.onclick = function(){
            var mystyleElement = document.getElementById('mystyle');
            mystyleElement.className = 'styleTwo';
        };
        blueBtnElement.onclick = function(){
            var mystyleElement = document.getElementById('mystyle');
            mystyleElement.className = 'styleThree';
        };
        defaultBtnElement.onclick = function(){
            var mystyleElement = document.getElementById('mystyle');
            mystyleElement.className = 'style';
        };



/*        var greenBtnElement = document.getElementById('greenBtn');
        var blueBtnElement = document.getElementById('blueBtn');
        var defaultBtnElement = document.getElementById('defaultBtn');*/

/*
        redBtnElement.onclick = function(){
            var mystyleElement = document.getElementById('mystyle');
            mystyleElement.style.backgroundColor = 'red';
        }

        greenBtnElement.onclick = function(){
            var mystyleElement = document.getElementById('mystyle');
            mystyleElement.style.backgroundColor = 'green';
        }

        blueBtnElement.onclick = function(){
            var mystyleElement = document.getElementById('mystyle');
            mystyleElement.style.backgroundColor = 'blue';
        }

        defaultBtnElement.onclick = function(){
            var mystyleElement = document.getElementById('mystyle');
            mystyleElement.style.backgroundColor = 'transparent';
        }*/
