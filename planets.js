
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
    .selectAll("div")
    .data(Names)
    .enter()
    .append("div")
    .text(function(d){
        return d;
    })
}
eachName(Names)

var Promise = d3.json("planets.json")
Promise.then(
    function(Data)
    {
        console.log("Data",Data);
        ImgPlanets(Data)
    },
    function(err)
    { 
        console.log("fail",err);
    });

var ImgPlanets = function(planets)
 {
     d3.select("#B3")
     .selectAll("img")
     .data(planets)
     .enter()
     .append("img")
     .attr("src",function(planet)
     {
         return planet.img;
     })
           
           }
    



