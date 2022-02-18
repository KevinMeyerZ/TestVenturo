var showPass = 0;
    $("body").on("click", "#show-password", function (n) {
        if (showPass == 0) {
            $("#password").attr('type', 'text');
            $("#show-password").removeClass('fa fa-eye-slash');
            $("#show-password").addClass('fa fa-eye');
            showPass = 1;
        } else {
            $("#password").attr('type', 'password');
            $("#show-password").removeClass('fa fa-eye');
            $("#show-password").addClass('fa fa-eye-slash');
            showPass = 0;
        }
    });