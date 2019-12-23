var 버튼들 = document.querySelectorAll('.tab-button');
var 내용들 = document.querySelectorAll('.tab-content');
//0번째버튼을 눌렀을 경우... 
for (let i = 0; i < 3; i++){
버튼들[i].addEventListener('click', function(){
	버튼들[0].classList.remove('orange');
	버튼들[1].classList.remove('orange');
	버튼들[2].classList.remove('orange');
	버튼들[i].classList.add('orange');
	
	내용들[0].classList.remove('show');
	내용들[1].classList.remove('show');
	내용들[2].classList.remove('show');
	내용들[i].classList.add('show');
});
}



//
//버튼들[1].addEventListener('click', function(){
//	버튼들[0].classList.remove('orange');
//	버튼들[1].classList.remove('orange');
//	버튼들[2].classList.remove('orange');
//	버튼들[1].classList.add('orange');
//	
//	내용들[0].classList.remove('show');
//	내용들[1].classList.remove('show');
//	내용들[2].classList.remove('show');
//	내용들[1].classList.add('show');
//});
//
//버튼들[2].addEventListener('click', function(){
//	버튼들[0].classList.remove('orange');
//	버튼들[1].classList.remove('orange');
//	버튼들[2].classList.remove('orange');
//	버튼들[2].classList.add('orange');
//	
//	내용들[0].classList.remove('show');
//	내용들[1].classList.remove('show');
//	내용들[2].classList.remove('show');
//	내용들[2].classList.add('show');
//});
//i 는 0으로 시작하는데
//3이 되기 전까지
//1더해주면서 반복해주세요 
for (var i = 0; i < 3; i++){
	console.log('안녕');
}





//0. 0,1,2번째 버튼에 있는 주황색 제거
//1. 0번째버튼에 주황색칠해야함 (orange 클래스명 붙임)
//2. 0,1,2번째 탭내용은 안보여줌
//3. 0번째탭내용을 보여줌 
	
	