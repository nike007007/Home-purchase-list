function list(){

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    
    if(this.readyState==4 && this.status==200){
        var response = JSON.parse (this.responseText);
        var purchase = response.list;
        //console.log(response);
        //var jlist = response.list;
        //console.log(jlist);
        //var output ="";
        //for(var i=0;i<jlist.length;i++){
        //    output +="<li>"+ jlist[i].name +"</li>";
        //}
        document.getElementById("a1").innerHTML= purchase[0].name;
        document.getElementById("a2").innerHTML= purchase[0].name;
        document.getElementById("a3").innerHTML= purchase[0].name;
        document.getElementById("a4").innerHTML= purchase[0].name;
        document.getElementById("a5").innerHTML= purchase[0].name;
        document.getElementById("a6").innerHTML= purchase[0].name;
        document.getElementById("b1").innerHTML= purchase[0].name;
        document.getElementById("b2").innerHTML= purchase[0].name;
        document.getElementById("b3").innerHTML= purchase[0].name;
        document.getElementById("b4").innerHTML= purchase[0].name;
        document.getElementById("b5").innerHTML= purchase[0].name;
        document.getElementById("b6").innerHTML= purchase[0].name;
        document.getElementById("c1").innerHTML= purchase[0].name;
        document.getElementById("c2").innerHTML= purchase[0].name;
        document.getElementById("c3").innerHTML= purchase[0].name;
        document.getElementById("c4").innerHTML= purchase[0].name;
        document.getElementById("c5").innerHTML= purchase[0].name;
        document.getElementById("c6").innerHTML= purchase[0].name;
        document.getElementById("d1").innerHTML= purchase[0].name;
        document.getElementById("d2").innerHTML= purchase[0].name;
        document.getElementById("d3").innerHTML= purchase[0].name;
        document.getElementById("d4").innerHTML= purchase[0].name;
        document.getElementById("d5").innerHTML= purchase[0].name;
        document.getElementById("d6").innerHTML= purchase[0].name;
        document.getElementById("e1").innerHTML= purchase[0].name;
        document.getElementById("e2").innerHTML= purchase[0].name;
        document.getElementById("e3").innerHTML= purchase[0].name;
        document.getElementById("e4").innerHTML= purchase[0].name;
        document.getElementById("e5").innerHTML= purchase[0].name;
        document.getElementById("e6").innerHTML= purchase[0].name;
        document.getElementById("f1").innerHTML= purchase[0].name;
        document.getElementById("f2").innerHTML= purchase[0].name;
        document.getElementById("f3").innerHTML= purchase[0].name;
        document.getElementById("f4").innerHTML= purchase[0].name;
        document.getElementById("f5").innerHTML= purchase[0].name;
        document.getElementById("f6").innerHTML= purchase[0].name;
        document.getElementById("g1").innerHTML= purchase[0].name;
        document.getElementById("g2").innerHTML= purchase[0].name;
        document.getElementById("g3").innerHTML= purchase[0].name;
        document.getElementById("g4").innerHTML= purchase[0].name;
        document.getElementById("g5").innerHTML= purchase[0].name;
        document.getElementById("g6").innerHTML= purchase[0].name;
        document.getElementById("h1").innerHTML= purchase[0].name;
        document.getElementById("h2").innerHTML= purchase[0].name;
        document.getElementById("h3").innerHTML= purchase[0].name;
        document.getElementById("h4").innerHTML= purchase[0].name;
        document.getElementById("h5").innerHTML= purchase[0].name;
        document.getElementById("h6").innerHTML= purchase[0].name;
        document.getElementById("i1").innerHTML= purchase[0].name;
        document.getElementById("i2").innerHTML= purchase[0].name;
        document.getElementById("i3").innerHTML= purchase[0].name;
        document.getElementById("i4").innerHTML= purchase[0].name;
        document.getElementById("i5").innerHTML= purchase[0].name;
        document.getElementById("i6").innerHTML= purchase[0].name;
        document.getElementById("j1").innerHTML= purchase[0].name;
        document.getElementById("j2").innerHTML= purchase[0].name;
        document.getElementById("j3").innerHTML= purchase[0].name;
        document.getElementById("j4").innerHTML= purchase[0].name;
        document.getElementById("j5").innerHTML= purchase[0].name;
        document.getElementById("j6").innerHTML= purchase[0].name;
        //console.log(purchase[0].name);
    }
};
xhttp.open("GET","list.json",true);
xhttp.send();
}