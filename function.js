// var phoneData;
// fetch('server/info.json')
//   .then(response => response.json())
//   .then(data => {
//      phoneData = data;
//   })
//   .catch(error => {
//     console.error('Error fetching JSON:', error);
//   });
//data like this till i learn backend
let phoneData = [
	{
		"ID" : 1,
		"NAME" : "realmeC67",
		"SELFIE_RATING" : 8,
		"CAMERA_RATING" : 9,
		"GAMING_RATING" : 9,
		"WORK_RATING" : 9,
		"PRICE" : 45000,
		"DROP_RATING" : 9,
		"IMG" : "https://images.priceoye.pk/realme-c67-pakistan-priceoye-pack3-500x500.webp"
	},
	{
		"ID" : 2,
		"NAME" : "realmeC53",
		"SELFIE_RATING" : 5,
		"CAMERA_RATING" : 6,
		"GAMING_RATING" : 4,
		"WORK_RATING" : 7,
		"PRICE" : 34999,
		"DROP_RATING" : 6,
		"IMG" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzuT2LunQXTlpdLpfoQOsJh4ANbMJ1PozZQ&usqp=CAU"
	}
	,
	{
		"ID" : 2,
		"NAME" : "realmeC51",
		"SELFIE_RATING" : 5,
		"CAMERA_RATING" : 6,
		"GAMING_RATING" : 3,
		"WORK_RATING" : 6,
		"PRICE" : 25000,
		"DROP_RATING" : 5,
		"IMG" : "https://technicafive.com/wp-content/uploads/2023/11/Realme-C51-1.png"
	}
	,
	{
		"ID" : 2,
		"NAME" : "Redmi A2",
		"SELFIE_RATING" : 4,
		"CAMERA_RATING" : 4,
		"GAMING_RATING" : 4,
		"WORK_RATING" : 4,
		"PRICE" : 20000,
		"DROP_RATING" : 6,
		"IMG" : "https://xiaomisale.com/cdn/shop/products/redmi-a2-813653_grande.jpg?v=1693731787"
	}
	,
	{
		"ID" : 2,
		"NAME" : "redmi 13c",
		"SELFIE_RATING" : 8,
		"CAMERA_RATING" : 8,
		"GAMING_RATING" : 9,
		"WORK_RATING" : 9,
		"PRICE" : 34999,
		"DROP_RATING" : 8,
		"IMG" : "https://xiaomisale.com/cdn/shop/products/redmi-13c-6gb-128gb-323188_grande.jpg?v=1701952316"
	}
]	

var currentData = {
	name : "",
	email : "",
	selfie : "",
	camera : "",
	gaming : "",
	work : "",
	price : "",
	drop : ""
};

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
	if(document.getElementById("a").value.trim() !== "" && document.getElementById("a1").value.trim())
	{
	allslides[0].style.marginLeft = "-25%";
	allsteps[0].classList.add("passed");
	currentData.name = document.getElementById("a").value;
	currentData.email = document.getElementById("a1").value;
	}
	else{
		window.alert("Kindly Fill the values and try again")
	}
};


function next_func1(){
	if(document.getElementById("a2").value.trim() !== "" && document.getElementById("a3").value.trim())
	{
	console.log("clicked0");
	allslides[0].style.marginLeft = "-50%";
	allsteps[1].classList.add("passed");
	currentData.selfie = document.getElementById("a2").value;
	currentData.camera = document.getElementById("a3").value;
	}
	else{
		window.alert("Kindly Fill the values and try again")
	}
};

function next_func2(){
	if(document.getElementById("a4").value.trim() !== "" && document.getElementById("a5").value.trim())
	{
	console.log("clicked0");
	allslides[0].style.marginLeft = "-75%";
	allsteps[2].classList.add("passed");
	currentData.gaming = document.getElementById("a4").value;
	currentData.work = document.getElementById("a5").value;
	}
	else{
		window.alert("Kindly Fill the values and try again")
	}
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


//extra
//document.getElementById("input1").addEventListener("input", func_inp);
var elements = document.querySelectorAll("input");

        elements[2].addEventListener("input", func_inp);
		elements[3].addEventListener("input", func_inp);
		elements[4].addEventListener("input", func_inp);
		elements[5].addEventListener("input", func_inp);
		elements[7].addEventListener("input", func_inp);
        

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

//range
getRange = document.querySelector(".rangee");

getRange.addEventListener("input",putRange);

var getRangeValue = document.querySelector('#a6');
var getRangeValuee = document.querySelector('#i81');


function putRange(){
    var currentval = parseInt(getRangeValue.value);
    console.log(currentval);
    getRangeValuee.innerHTML = currentval + "Rs";
}

//fetch server

   

let mainCont = document.querySelector(".result0")
let mainCont0 = document.querySelector(".result")

function call(){
	const filterData = phoneData.filter(product => product.SELFIE_RATING==currentData.selfie && product.CAMERA_RATING==currentData.camera && product.GAMING_RATING==currentData.gaming && product.WORK_RATING==currentData.work && product.WORK_RATING==currentData.work && product.PRICE<=currentData.price)
	if((filterData.length > 0)){
	const mappedData = `
	<div class="result">
	<div class="newdivCSS">
	<h2>phones above your ratings</h2>
		${filterData.map(product => `
			<h2>${product.NAME}</h2>
			<img src="${product.IMG}" alt="" />
			<h2>Price: ${product.PRICE}</h2>
			<h2>Gaming Rating: ${product.GAMING_RATING}</h2>
			<h2>Camera Rating: ${product.CAMERA_RATING}</h2>
			<h2>Drop Rating: ${product.DROP_RATING}</h2>
		`).join(" ")}
	</div></div>
`;
		mainCont.innerHTML = mappedData;
	}
	else {
	const filterData0 = phoneData.filter(product => product.PRICE<=currentData.price);	
	if((filterData0.length > 0)){
		const mappedData = `
		<div class="result">
		<div class="newdivCSS">
		<h2> No product according to your needs :( here are some at the price point though <h2>
			${filterData0.map(product => `
			<h2>${product.NAME}</h2>
			<img src="${product.IMG}" alt="" />
			<h2>Price: ${product.PRICE}</h2>
			<h2>Gaming Rating: ${product.GAMING_RATING}</h2>
			<h2>Camera Rating: ${product.CAMERA_RATING}</h2>
			<h2>Drop Rating: ${product.DROP_RATING}</h2>
		`).join(" ")}
		</div></div>
`;
		mainCont.innerHTML = mappedData;
	}
	else {
		mainCont.innerHTML = "<div class='result'><h2>sorry no product found on your requirement</h2></div>";

	}
}
}

// submit on-click in html method

function sub_func(){
	if(document.getElementById("a6").value.trim() !== "" && document.getElementById("a7").value.trim())
	{
	console.log("submit working");
	allsteps[3].classList.add("passed");
	currentData.price = document.getElementById("a6").value;
	currentData.drop = document.getElementById("a7").value;
	call();
	}
	else{
		window.alert("Kindly Fill the values and try again")
	}
console.log(currentData);
}

