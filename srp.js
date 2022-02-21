
let students = [
	{id: 1, name:"Андрей", surname:"Артамонов"},
{id: 2, name:"Дарья", surname:"Архипова"},
{id: 3, name:"Николай", surname:"Баркалов"},
{id: 4, name:"Георгий", surname:"Бочкарев"},
{id: 5, name:"Матвей", surname:"Гаврилов"}

]

	function load_all() {
		let table = document.getElementById('tbl_al')
		for (let i = 0; i < students.length; i++){
		let id =  students[i].id
		let name =  students[i].name
		let surname =  students[i].surname
	//создадим строку и 3 ячейки
	 let tr = document.createElement('tr')
	let td1 = document.createElement('td')
	let td2 = document.createElement('td')
	let td3 = document.createElement('td')
	//запишем данные в ячейки
	td1.textContent = id
	td2.textContent = name
	td3.textContent = surname
	//вставим ячейки в строку
	tr.appendChild(td1)
	tr.appendChild(td2)
	tr.appendChild(td3)
	//вставим строку в таблицу
	table.appendChild(tr)
}
	}

let name = document.getElementById('name')
function load_student(id){
	let head = document.getElementById('zagolovok')
	head.textContent = "Информация о студенте №" + students[id].id
	let name = document.getElementById('name')
	name.textContent =" "+ students[id].name
		let surname = document.getElementById('surname')
	surname.textContent = " "+students[id].surname
}
let idk = 0;
function next() {
	idk++;
	if (idk > 0 ) {document.getElementById('btn_prev').disabled = false;}
	if ( idk === students.length-1) {
		document.getElementById("btn_next").disabled = true;
	}
	load_student(idk)
}
function prev() {
	idk=idk -1;
	if (idk < 5 ) {document.getElementById('btn_next').disabled = false;}
	if (idk === 0){
		document.getElementById('btn_prev').disabled = true;
	}
	load_student(idk)
}