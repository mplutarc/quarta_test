$(document).ready(function () {
	$("#myform").change(function() {
		let checkFields = [$.trim($('#name').val()),
			$.trim($('#bdate').val()),
			$.trim($('#email').val()),
			$.trim($('#password').val()),
			$.trim($('#password-confirm').val()),
			$.trim($('#secret-question').val()),
			$.trim($('#secret-answer').val()),
			$.trim($('#address').val()),
			$.trim($('#city').val()),
			$.trim($('#phone').val())]
		let checkbox = $('#checkbox').prop('checked');
		let i = 0;
		$.each(checkFields, function (index, value) {
			if (value.length > 0) {
				i++;
				// console.log('value не пустое, value = ', value, ', i = ', i);
			} else {
				// console.log('value пустое, value = ', value);
			}
		})
		console.log($('#password').val() === $('#password-confirm').val());
		if($('#password').val() === $('#password-confirm').val()) {
			$('.pass_confirm').removeClass('has-error');
			console.log('пароли совпадают');
		} else {
			$('.pass_confirm').addClass('has-error');
			console.log('пароли не совпадают');
		}
		if (i >= 10 && checkbox === true) {
			$('#submit').prop('disabled', false);
		} else {
			$('#submit').prop('disabled', true);
		}
	});
});

