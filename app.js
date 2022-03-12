var row = document.querySelector(".row");
var column = document.querySelector(".column")
var calc = document.getElementById("calc");
var divParentInput = document.createElement("div");

const colors = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];


calc.addEventListener("click", function() {
    //div includes buttons
    document.getElementById("btnPlay").style.display = "block";
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute("style", "display:flex; box-sizing:border-box; flex-flow: row wrap; justify-content: space-evenly;")

    for (let i = 0; i < row.value * column.value; i++) {
        //creating button 
        var btn = document.createElement("button");
        btn.classList = "btnSound";
        div.appendChild(btn);
        let btnStyles = `color:cornsilk; height:120px;  margin-bottom:10px;border: inset; border-radius: 20px; cursor:pointer`;
        if (row.value * column.value % 3 == 0) {
            btn.setAttribute("style", `width:30%; ${btnStyles}`)
        } else if (row.value * column.value % 4 == 0) {
            btn.setAttribute("style", `width:22%; ${btnStyles}`)
        } else {
            btn.setAttribute("style", `width:18%; ${btnStyles}`)
        }
        var getRandomNr = Math.floor(i * Math.random() * 10)
        btn.style.backgroundColor = colors[getRandomNr];
        btn.innerHTML = i + 1;

        //create audio element

        let audio = document.createElement("audio");
        audio.src = `sounds/${i+1}.wav`;

        //inputs display none when clicked
        column.setAttribute("style", "display:none");
        row.setAttribute("style", "display:none");
        calc.setAttribute("style", "display:none");

        btn.addEventListener("click", function(e) {
            audio.load();
            audio.play();

            var data = [];
            data = audio.src;
            var audioPlay = document.createElement("audio");
            audioPlay.src = data


            document.getElementById("btnPlay").addEventListener("click", function() {

                setTimeout(function() {

                    audioPlay.load();
                    audioPlay.play();

                }, audioPlay.duration * 1000);

            });
        });
    };
});