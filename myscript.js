var fActive = '';

function filterColor(color){
    if(fActive != color){
        $('.products-filter div').filter('.'+color).slideDown();
        $('.products-filter div').filter(':not(.'+color+')').slideUp();
        fActive = color;
    }
}

$('.f-t-shirts').click(function(){ filterColor('t-shirts'); });
$('.f-sweaters').click(function(){ filterColor('sweaters'); });
$('.f-shorts').click(function(){ filterColor('shorts'); });
$('.f-jackets').click(function(){ filterColor('jackets'); });
$('.f-accessoires').click(function(){ filterColor('accessoires'); });

$('.f-all').click(function(){
    $('.products-filter div').slideDown();
    fActive = 'all';
});