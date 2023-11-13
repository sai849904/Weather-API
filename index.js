var userinput=document.getElementById("userinput");
var btn=document.getElementById("btn");
var city=document.getElementById("city");
var temp=document.getElementById("temp");
var desp=document.getElementById("desp");

var apikey="6776c3a65f081c5970e7561edaa8863f";
btn.addEventListener("click",()=>{
    if(userinput.value=="")
    {
        alert("please ente the city name!!!!!");
    }
    else
    {
        var url=`https://api.openweathermap.org/data/2.5/weather?q=${userinput.value}&appid=${apikey}`
        fetch(url).then((request)=>request.json()).then((response)=>{
         console.log(response);
        var {name}=response;
        city.innerHTML=name;
        var {feels_like}=response.main;
        temp.innerHTML=Math.floor((feels_like-273))+ "&deg C";
        var {description}=response.weather[0];
        desp.innerHTML=description;
        })
    }


})
