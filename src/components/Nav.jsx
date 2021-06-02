

function Nav({day}) {
    
    function clickSingleA(a)
    {
        var items = document.querySelectorAll('.single.active');
    
        if(items.length) 
        {
            items[0].className = 'single';
        }
    
        a.className = 'single active';
    }

    return(
        
        <weekday>

        <a href="#dd" onclick="clickSingleA(this)" class = "single">Monday</a>
        
        <a href="#gf">Tuesday</a>
        
        <a href="#">Wednesday</a>

        <a href="#">Thursday</a>

        <a href="#">Friday</a>

        </weekday>
    )
    
}

export default Nav