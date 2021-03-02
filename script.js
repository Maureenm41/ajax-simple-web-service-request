var xhr = new XMLHttpRequest;

xhr.open('GET','https://thatsthespir.it/api',true)

xhr.onload = function()
{
    if(this.status === 200)
    {
        console.log(JSON.parse(this.responseText)); 
        document.getElementById('quoteText').innerHTML= this.responseText.splice(1,5);
    }
}

xhr.send();



//document.getElementById('quote')= "hello";

//document.getElementById('quote').innerHTML= this.responseText;