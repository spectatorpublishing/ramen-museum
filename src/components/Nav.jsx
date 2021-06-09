import $ from 'jquery';

function Nav() {
    
    //creates object of all elements with <a> tag
    var items = $("a");

    //onclick function that removes the active class from all previous 
    //<a> elements and   adds it back to elemtn that was clicked

    items.on("click",function(){
        items.removeClass("active");
        $(this).toggleClass("active");
    });
 

    return(
        
        <weekday>

        <a href="#dd">Monday</a>
        
        <a href="#tuesday">Tuesday</a>
        
        <a href="#wednesday">Wednesday</a>

        <a href="#thursday">Thursday</a>

        <a href="#friday">Friday</a>

        </weekday>
    )
    
}

export default Nav