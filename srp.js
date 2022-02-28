
let students = []
let id_current = 0

function load_from_site() {
	$.get ('http://217.71.129.139:4035/students.php', function(data){
		students = JSON.parse(data)['response']
	});
	
}
function load_all() {
	load_from_site()
		let table = document.getElementById('tbl_all')
		for (let i = 0; i < students.length; i++){
		let id =  students[i].id
		let name =  students[i].name
		let surname =  students[i].surname
	//создадим строку и 3 ячейки
	 let tr = document.createElement('tr')
	let td1 = document.createElement('td')
	let td2 = document.createElement('td')
	let td3 = document.createElement('td')
	let btn = document.createElement('button')
	btn.textContent = 'Подробнo'
	$(btn).on("click", function() {
		show_info(i)
	});
	//запишем данные в ячейки
	td1.textContent = id
	td2.textContent = name
	td3.textContent = surname
	//вставим ячейки в строку
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	//вставим строку в таблицу
	table.appendChild(tr)

}
function show_info(id)
$('#btn').attr('disabled' , false)
	}

let name = document.getElementById('name')
function load_student(id){
	let head = $('#zagolovok')
	head.prop('textContent', "Информация о студенте №" + students[id].id)

	let name = $('#name')
	name.prop('textContent', " "+ students[id].name)
	let surname = $('#surname')
	surname.prop('textContent',  " "+students[id].surname)
	let scores = $('#scores')
	let sum = 0
	for (let i = 0; i <students[id].scores.length; i ++) {
		//console.log(students[id].scores[i]);
		sum = sum  + students[id].scores[i]
	}
		console.log(sum);
scores.prop('textContent',  students[id].scores)
let sred = $('#sred')
let kek = sum/5;
sred.prop('textContent', kek)

let logo = $('#logo').attr('src','http://217.71.129.139:4035/' + students[id].logo)



}
let idk = 0;
function next() {
	idk++;
	if (idk > 0 ) {$('#btn_prev').attr('disabled' , false)}
	if ( idk === students.length-1) {
		$("#btn_next").attr('disabled',  true)
	}
	load_student(idk)
}
function prev() {
	idk=idk -1;
	if (idk < students.length ) {$("#btn_next").attr('disabled',  false)}
	if (idk === 0){
		$('#btn_prev').attr('disabled' , true);
	}
	load_student(idk)
}
function all_upd(){
	if(all_flag == false){
		load_all()
		all_flag ==true
		$('btn_all_upd').Attr({'disabled':true})
	}


}