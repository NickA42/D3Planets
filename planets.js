
var Names=[]
Names.push("bob","jim","dave")




var printnames = Function(Names)
{ 
    d3.select("#A1")
      .selectAll("div")
      .data(Names)
      .enter()
      .append("div")
      .text(function(d){
      return d;
    })
}

var eachName = function(Names)
{
    d3.select("#A2")
    .selectAll("p")
    .data(Names)
    .enter()
    .append("p")
    .text(function(d){
        return Names[0];
    })
}

var Promise = d3.json("planets.json")
Promise.then(fcnsuccess,fcnfail)
Promise.then(function(Data){
    console.log("Data",Data);
},
funtion(err)
{ console.log("fail",err);
             }) 
 
