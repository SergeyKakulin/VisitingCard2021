// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: $(this).serialize()
		});
		alert('Спасибо за сообщение!');
		form.reset();
		return false;
	});

});

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);
	let error = formValidate(form);

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
	
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);
	
			if (input.classList.contains('_email')){
				if (emailTest(input)){
					formAddError(input);
					error++;
				}
			} else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	if (error === 0) {
        form.classList.add('_sending');
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let resault = await response.json();
            alert(resault.message);
            formPreview.innerHTML = '';
            form.reset();
            form.classList.remove('_sending');
        } else {
            alert("Ошибка");
            form.classList.remove('_sending');
        }
    } else {
        alert('Заполните обязательные поля');
    }

});