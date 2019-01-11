$(document).ready(function(){

    $(".s3-toggleSideMenu").click(function(){
        $(".s3-sidemenu-wrap").addClass('col-lg-3').toggle();/*css('display','block') .showandhide*/
        $(".s3-content-wrap").toggleClass('col-lg-9');
    });

});