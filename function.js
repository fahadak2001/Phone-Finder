allslides = document.querySelectorAll(".slide"); //all having the class slide
allsteps = document.querySelectorAll(".step");
allnext = document.querySelectorAll(".next");

//addEventListener method

const next0 = allnext[0];
const next1 = allnext[1];
const next2 = allnext[2];


next0.addEventListener("click",next_func);
next1.addEventListener("click",next_func1);
next2.addEventListener("click",next_func2);


function next_func(){
	console.log("clicked0");
	allslides[0].style.marginLeft = "-25%";
	allsteps[0].classList.add("passed");
};


function next_func1(){
	console.log("clicked0");
	allslides[0].style.marginLeft = "-50%";
	allsteps[1].classList.add("passed");
};

function next_func2(){
	console.log("clicked0");
	allslides[0].style.marginLeft = "-75%";
	allsteps[2].classList.add("passed");
};
// prev on-click in js method

document.getElementById("prev0").onclick = function prev0()
	{
	console.log("working")
	allslides[0].style.marginLeft = "0%";
	allsteps[0].classList.remove("passed");
	};
document.getElementById("prev1").onclick = function prev1()
	{
	console.log("working")
	allslides[0].style.marginLeft = "-25%";
	allsteps[1].classList.remove("passed");
	};
document.getElementById("prev2").onclick = function prev2()
	{
	console.log("working")
	allslides[0].style.marginLeft = "-50%";
	allsteps[2].classList.remove("passed");
	};

// submit on-click in html method

function sub_func(){
	console.log("submit working");
	window.alert("database schemas are yet to be made to give you results ;)");
	allsteps[3].classList.add("passed");
}


//extra
//document.getElementById("input1").addEventListener("input", func_inp);
var elements = document.querySelectorAll('[id^="input1"]');

for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("input", func_inp);
        }

function func_inp(){
	
	var inputVal = this.value;
	
	if (inputVal < 0) {
		window.alert("add value between 1 and 10");
        this.value = 0;
    } else if (inputVal > 10) {
        this.value = 10;
		window.alert("add value between 1 and 10");
    }
}

