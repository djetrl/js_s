// загрузка данных с сервера
function loadStudents() {
	$.get('http://217.71.129.139:4035/api/students.php', function (data) {
		let students = JSON.parse(data)['students'];
		showTable(students)
	});
}

// отрисовка таблицы
function showTable(students) {
	let table = $('#tbl_all>tbody')
	for (let i = 0; i < students.length; i++) {
		// создадим новую строку
		let tr = $('<tr>')
		// создадим 5 ячеек и кнопку
		let td1 = $('<td>' + students[i].id + '</td>')
		let td2 = $('<td>' + students[i].name + '</td>')
		let td3 = $('<td>' + students[i].surname + '</td>')
		let td4 = $('<td>' + students[i].group + '</td>')
		let td5 = $('<td></td>')
		let btn = $('<button>Подробно</button>')
		btn.click(function () {
			showInfo(students[i])
		})

		td5.append(btn)
		// прикрепим ячейки к строке
		tr.append(td1).append(td2).append(td3).append(td4).append(td5)

		// прикрепим строку к таблице
		table.append(tr)
	}
}

function showInfo(student) {
	// находим блок
	let div = $('#info')
	// очистим блок
	div.html('')

	let head = $('<h1>Информация о студенте № ' + student.id + '</h1>')
	let name = $('<span>Имя: </span><input id="s_name" value="' + student.name + '"></input><br>')
	let surname = $('<span>Фамилия: </span><input id="s_surname" value="' + student.surname + '"></input><br>')
	let btn_save = $('<button>Сохранить</button>')
	// повесим обработчик события на кнопку сохранить
	btn_save.click(function () {
		save(student)
	})
	// прикрепим элементы к блоку
	div.append(head).append(name).append(surname).append(btn_save)
}

// отправка запроса на изменение
function save(student) {
	let id = student.id
	let name = $('#s_name').val()
	let surname = $('#s_surname').val()

	$.get('http://217.71.129.139:4035/api/students_update.php?id=' + id + '&name=' + name +
		'&surname=' + surname, function (data) {
			alert(data)
		});
}