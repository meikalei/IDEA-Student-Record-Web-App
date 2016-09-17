$('.ui.dropdown').dropdown();

$('.special.cards .card').hover(function(){
    $(".delete.button").css("visibility","visible");
    $(".edit.button").css("visibility","visible");
}, function(){
    $(".delete.button").css("visibility","hidden");
    $(".edit.button").css("visibility","hidden");
});

$("#add-button .button").click(function(){
    $('.ui.modal')
        .modal('show')
    ;
});

$('.ui.radio.checkbox')
    .checkbox()
;

$('.ui.form')
    .form({
        fields: {
            name    : 'empty',
            batch   : ['empty','exactLength[4]','integer'],
            studno  : ['empty','exactLength[5]','integer'],
            course  : 'empty',
            college : 'empty',
            sex     : 'checked'
        }
    })
;