import $ from 'jquery';
import '../App.css'

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
        
        <div className="weekday">

        <a href="#Monday">Monday</a>
        
        <a href="#Tuesday">Tuesday</a>
        
        <a href="#Wednesday">Wednesday</a>

        <a href="#Thursday">Thursday</a>

        <a href="#Friday">Friday</a>

        </div>
    )
    
}

export default Nav