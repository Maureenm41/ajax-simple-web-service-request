var xhr = new XMLHttpRequest;

xhr.open('GET','https://thatsthespir.it/api',true)

xhr.onload = function()
{
    if(this.status === 200)
    {
        console.log(JSON.parse(this.responseText)); 
        document.getElementById('quote').innerHTML= this.responseText;
    }
}

xhr.send();


var data=xhr.responseText;
var jsonResponse = JSON.parse(data);
console.log(jsonResponse["Data"]);
document.getElementById('quote').innerHTML= jsonResponse;

//document.getElementById('quote')= "hello";

//document.getElementById('quote').innerHTML= this.responseText;