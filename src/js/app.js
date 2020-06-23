import '../scss/main.scss';

$(document).ready(function(){
    // Fetch Corona Data
    getCoronaData();

    // Window Width
    $(window).width() <= 768 ? $('.site-wrapper').removeClass('overflow-h') : $('.site-wrapper').addClass('overflow-h');

    // Button Submit Validation
    $('.input-submit-user').each(function(){
        $(this).on("keyup",function(){
            if(validateButtonSubmit()){
                $('#submitUserData').removeClass('btn--disabled');
                $('#submitUserData').removeAttr('disabled');
            }else{
                $('#submitUserData').addClass('btn--disabled');
                $('#submitUserData').attr('disabled', true);
            }
        });
    });    
});

// Input Number Validation
$('.input-number').keydown(function(e){
    var key = e.charCode || e.keyCode || 0;
    return (
        key == 8 || key == 9 || key == 13 || key == 46 || key == 110 || key == 190 || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
}); 

$('#submitUserData').click(function(){
    const userPhone = $('#inputUserNumber').val();
    const userName  = $('#inputUserName').val();

    submitUserData($(this), userPhone, userName);
});

function validateButtonSubmit(){
    const validateStatus = [];

    $('.input-submit-user').each(function(){
        if($(this).hasClass('input-number')){
            if($(this).val() == "" || $(this).val() == null){
                validateStatus.push(0)
            }else{
                if($(this).val().length <= 10){
                    validateStatus.push(0)
                }else{
                    validateStatus.push(1)
                }
            }
        }else{
            $(this).val() == "" || $(this).val() == null ? validateStatus.push(0) : validateStatus.push(1);
        }
    });  

    return validateStatus.includes(0) ? false : true;
}

function getCoronaData(){
    $.ajax({
        type: 'GET',
        url : 'https://indonesia-covid-19.mathdro.id/api',
        success: function(res){
            // console.log(res);
            $('#totalCase').html(res.jumlahKasus);
            $('#totalTreatedCase').html(res.perawatan);
            $('#totalDeathCase').html(res.meninggal);
            $('#totalHealthCase').html(res.sembuh);
        },error: function(err){
            console.log(err);
        }
    })
}

function submitUserData(element, phone, name){
    submitProcess(element, 'MENDAFTARKAN ...');
    $.ajax({
        type: 'POST',
        url : '',
        data: {
            phone: phone,
            name : name
        },
        success: function(res){
            console.log(res);
            submitProcess(element, 'SUKSES ...');
            setTimeout(() => {submitProcess(element, 'DAFTARKAN NOMOR')}, 2000);
        },error: function(err){
            console.log(err);
            submitProcess(element, 'GAGAL ...');
            setTimeout(() => {submitProcess(element, 'DAFTARKAN NOMOR')}, 2000);
        }
    })
}

function submitProcess(param, text){
    $(param).html(text)
}