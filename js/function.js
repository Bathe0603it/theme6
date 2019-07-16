$(document).ready(function(){
    $(window).scroll(function(){
        t = parseInt($(window).scrollTop());
        t>100?$('.box-header-main').addClass('fixTop'):$('.box-header-main').removeClass('fixTop');
    });
});
function show_toast_success(){
    $.toast({
        heading: 'Success',
        text: 'And these were just the basic demos! Scroll down to check further details on how to customize the output.',
        showHideTransition: 'slide',
        position: 'top-right',
        icon: 'success'
    })
}
function show_toast_errors(){
    $.toast({
        heading: 'Error',
        text: 'Report any <a href="https://github.com/kamranahmedse/jquery-toast-plugin/issues">issues</a>',
        showHideTransition: 'fade',
        position: 'top-right',
        icon: 'error'
    })
}
function show_toast_warning(){
    $.toast({
        heading: 'Warning',
        text: 'It is going to be supper easy for you to use ;)',
        showHideTransition: 'plain',
        position: 'top-right',
        icon: 'warning'
    })
}
function show_toast_info(){
    $.toast({
        heading: 'Information',
        text: 'Now you can add icons to generate different kinds of toasts',
        showHideTransition: 'slide',
        position: 'top-right',
        icon: 'info'
    })
}