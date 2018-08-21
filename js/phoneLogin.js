$(document).ready(function() {

//获取验证码
    $('.verify_code').click(function () {
        if (!validate()) {
            return false;
        }

        if (!this.b) {
            setTimer();
            this.b = true;
        }

        showToast("领取成功");

        $(this).attr("disabled", "disabled");
        $(this).css("background-color", "#b4b2b3")

    });

    $('#phone-num').keyup(function () {
        if($(this).val().length < 11 ){
            $('.verify_code').attr("disabled", "disabled");
            $(".verify_code").css("background-color", "#b4b2b3")
        }else{
            $('.verify_code').removeAttr("disabled", "disabled");
            $(".verify_code").css("background-color", "#4185e6");
        }
    })


// 点击提交
    $('.phone-login').click(function () {
        if (validate()) {
            checkCode();
        }
    })

//验证手机号
    function validate() {
        var phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57]|199|166)[0-9]{8}$/;

        if ($('#phone-num').val() == '') {
            showToast('手机号码不能为空！');
            return false;
        }

        if (!phoneReg.test($('#phone-num').val())) {
            showToast('请输入正确的手机号码！');
            return false;
        }
        if (!phoneReg.test($('#phone-num').val())) {
            showToast('请输入正确的手机号码！');
            return false;
        }
        return true;
    }
// 验证码的校验
    function checkCode() {
        if ($('#verifi-code').val() == '') {
            showToast('验证码不能为空！');
            return false;
        }
    }


//显示倒计时
    function setTimer() {
        var time = 60;
        var timers = setInterval(function () {
            time--;
            if (time <= 0) {
                time = 0;
                console.log(time);
                $('.verify_code').eq(0)[0].b = false;
                $('.verify_code').val('获取验证码');
                clearInterval(timers);
                $('.verify_code').removeAttr("disabled", "disabled");
                $(".verify_code").css("background-color", "#4185e6");
                return false;

            }
            $('.verify_code').val(time + '秒后重新获取');
        }, 1000)
    }

// 弹窗部分
        function showToast(msg){
        $("#showToast").text(msg);
        $("#toast_div").show()
        setTimeout(function(){
            $("#toast_div").hide()
        },2000);
    }
})