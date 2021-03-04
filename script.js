var xhr = new XMLHttpRequest;

xhr.open('GET','https://thatsthespir.it/api',true)

xhr.onload = function ()  //donwload the quote
{
    if(this.status === 200)
    {

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






