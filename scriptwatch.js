let one = 00;
let two = 00;
let getone = document.querySelector(".one");
let gettwo= document.querySelector(".two");
let btnstart= document.querySelector(".btn-start");
let btnstop= document.querySelector(".btn-stop");
let btnreset= document.querySelector(".btn-reset");

btnstart.addEventListener("click" ,() =>{
	inveral =setInterval(startTimer , 10)
	 })
	 btnstop.addEventListener("click", ()=>{
		clearInterval(inveral);
	 })
	 btnreset.addEventListener("click", ()=>{
		clearInterval();
		two = "00";
		one = "00";
		getone.innerHTML = one;
		gettwo.innerHTML = two;
	 })

	 function startTimer(){
	two++;
	if(two <= 9 ){
		gettwo.innerHTML= "0" + two;
	}
	if(two > 9 ){
		gettwo.innerHTML= two;
	}
	if(two > 99){
		one++;
		getone.innerHTML= "0" + one;
		two = 0;
		gettwo.innerHTML ="0"+ 0;
	}
	if(one > 9 )
	getone.innerHTML= one;
}