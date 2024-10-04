function clock()
{
    var watch = new Date();
    var h = watch.getHours();
    var m = watch.getMinutes();
    var s = watch.getSeconds();
    var am_pm = "AM" ;  

    if(s<10||h<0||m<0)
    {
        s="0" +s;
        h="0" +h; 
        m="0" +m;
    
    }

    if(h<12){
        am_pm="AM";
    }
    else{
        h=h-12;
        am_pm="PM";
    }

    document.getElementById('div1').innerHTML = h + ":" + m  + " : " + s+ " "+am_pm;

    setTimeout(() =>{
       clock();
    },1000);


}