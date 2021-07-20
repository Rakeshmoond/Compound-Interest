function interest(Id){
    var x=parseInt(document.getElementById("insertmoney").value);
    var str=document.getElementById("fdate").value;
    var string=str.split("-");
    var a=parseInt(string[0]);
    var b=parseInt(string[1]);
    var c=parseInt(string[2]);
    var stri=document.getElementById("ldate").value;
    var string1=stri.split("-");
    var d=parseInt(string1[0]);
    var e=parseInt(string1[1]);
    var f=parseInt(string1[2]);
    let y=d-a;
    var z;
    if(d<a ){
window.alert("Please enter valid data");
    }
    else {
    for(i=1;i<=y;i++)
    {
        z=(x)+((x/50)*12);
        x=z;
    }
    b=b+(c/30);
    e=e+(f/30);
    if((e-b)>0)
    {
        x=x+(x/50)*(e-b);
        document.getElementById("totalmoney").value=x;
    }
    else if ((e-b)<=0)
    {
        x=x-((((x*50)/62)/50)*(b-e));
        document.getElementById("totalmoney").value=x;
    
    }
}
}

