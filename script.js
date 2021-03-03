let xhr = new XMLHttpRequest;

xhr.open('GET','https:thatsthespir.it/api',true)

xhr.onload = function testing() //donwload the quote
{
    if(this.status === 200)
    {
        console.log(JSON.parse(this.responseText)); 

        fetch("https://thatsthespir.it/api")

        .then(res => res.json())
        .then( data => console.log(data.quote))


        fetch("https://thatsthespir.it/api")

        .then(res => res.json())
        .then(data => console.log(data.author))

        document.getElementById('quote').innerHTML= then(data => console.log(data.author));
    }
}

xhr.send();

let quoteTest = xhr.onload ;

document.getElementById(quote).innerHTML =testing() ;

document.getElementById(quote).innerHTML = data.quote ;



//document.getElementById('quote')= "hello";

document.getElementById('quote').innerHTML= this.responseText;


//test 2

fetch("https://thatsthespir.it/api")

.then(res => res.json())
.then( data => document.getElementById(quote).innerHTML= 'test')


fetch("https://thatsthespir.it/api")

.then(res => res.json())
.then(data => document.getElementById(quote).innerHTML=console.log(data.author))




