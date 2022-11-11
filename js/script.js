const form = document.getElementById('form');



function retryFormValue(event){
	const text = document.querySelector('.welcome_text');
	event.preventDefault();

	const name = form.querySelector('[name="name"]').value;
	const email = form.querySelector('[name="email"]').value;


	text.innerHTML = `${name}, Добро пожаловать в <span>PixelGames</span>`;

	/*window.location.replace("file:///C:/Users/User/Desktop/PixelGames/main/index.html");*/
	const elem = document.querySelector('.window');
	const welcome = document.querySelector('.welcome')
	const what = document.querySelector('.what');
	const box = document.querySelector('.box')
	elem.style.opacity = '0';
	welcome.style.opacity = '1';
	function dnone(){
		elem.style.display = 'none';
		console.log(elem.style.display);
	}
	function welc(){
		welcome.style.display = 'block';
	}
	function welc_end(){
		welcome.style.opacity = '0';


	}

	setTimeout(dnone, 1000);
	setTimeout(welc, 1000);
	setTimeout(welc_end, 2000);
	const container = document.querySelector('.container');
	function cont(){
		container.style.display = 'flex';
		welcome.style.display = 'none';
		box.style.display = 'none'
	};
	function cont_op(){
		container.style.opacity = '1';
	};
	setTimeout(cont, 3500);
	setTimeout(cont_op, 3600);
}

form.addEventListener('submit', retryFormValue);
