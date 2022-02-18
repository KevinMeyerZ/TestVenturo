$(".icon").on('click', function() {
			if ($(this).hasClass("fa fa-eye-slash") == true) {
				if($(this).data("id") == "password") {
					$("#password").attr("type", "text");
				}else {
					$("#confirm-password").attr("type", "text");
				}
				$(this).removeClass("fa fa-eye-slash");
				$(this).addClass("fa fa-eye");

			} else {
				if($(this).data("id") == "password") {
					$("#password").attr("type", "password");
				}else {
					$("#confirm-password").attr("type", "password");
				}
				$(this).removeClass("fa fa-eye");
				$(this).addClass("fa fa-eye-slash");
			}
		});


// buton-filter

$(".filter").on('click', function() {
			if ($(this).hasClass("active") == false) {
                $('.filter').removeClass("active");
                $(this).addClass("active")
            }
});
$(".filter2").on('click', function() {
			if ($(this).hasClass("active") == false) {
                $('.filter2').removeClass("active");
                $(this).addClass("active")
            }
});



// popup-modal
$(".moodal").click(function(){
    $("#pop-up").modal("show");
});
