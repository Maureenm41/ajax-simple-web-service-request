var xhr = new XMLHttpRequest;

xhr.open('GET','https:thatsthespir.it/api',true)

xhr.onload = function testing() //donwload the quote
{
    if(this.status === 200)
    {
        console.log(JSON.parse(this.responseText)); 

        document.getElementById('quoteText').innerHTML= this.responseText.slice(9,150);

        

        fetch("https://thatsthespir.it/api")

        .then(res => res.json())
        .then( data => console.log(data.quote))


        fetch("https://thatsthespir.it/api")

        .then(res => res.json())
        .then(data => console.log(data.author))

        fetch("https://thatsthespir.it/api")

        .then(res => res.json())
        .then(data => console.log(data.photo))

        
    }
}

xhr.send();

let quoteTest = xhr ;
//document.getElementById('quote')= "hello";

//test 2

fetch("https://thatsthespir.it/api")

.then(res => res.json())
.then( data => console.log(data.quote))


fetch("https://thatsthespir.it/api")

.then(res => res.json())
.then(data => console.log(data.author))


fetch("https://thatsthespir.it/api")

.then(res => res.json())
.then(data => console.log(data.photo))





