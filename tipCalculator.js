$('.plus').click(function(){
    $('#people').val(Number($('#people').val()) + 1)   ;
});

$('.minus').click(function(){
    if($('#people').val() == '1'){
        $('#people').val(1);
    } else {
        $('#people').val(Number($('#people').val()) - 1)   ;
    }
});


$('.submit').click(function(e){
    e.preventDefault();
    var bill     = Number($('#bill').val());
    var people   = Number($('#people').val());
    var quality  = Number($("input[name='quality']:checked").val()) /100;

    if(!isNaN(quality)){
        if(bill < 0 || people <= 0){
            $('.total-amount').addClass('error');
            $('.total-amount').html('Wrong data');
        } else {
            var tips     = bill * quality;
            var yourTip  = tips / people;
            var total    = bill + tips;
            $('.total-amount').removeClass('error');
            $('.total-amount').html('$' + total.toFixed(2));
            $('.tips-amount').html('$' + yourTip.toFixed(2));
        }
    } else {
        $('.total-amount').addClass('error');
        $('.total-amount').html('Please rate the quality of service!');
    }


});
