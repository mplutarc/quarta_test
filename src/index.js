import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

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
			} else {}
		})
		console.log($('#password').val() === $('#password-confirm').val());
		if($('#password').val() === $('#password-confirm').val()) {
			$('.pass_confirm').removeClass('has-error');
		} else {
			$('.pass_confirm').addClass('has-error');
		}
		if (i >= 10 && checkbox === true && $('.pass_confirm').hasClass('has-error') === false) {
			$('#submit').prop('disabled', false);
		} else {
			$('#submit').prop('disabled', true);
		}
	});
	$('#myform').on ('submit', function (event){
		event.preventDefault ();
		event.stopImmediatePropagation ();

		$('form').css('display', 'none');
		$('h3').css('display', 'block');
	});
});

