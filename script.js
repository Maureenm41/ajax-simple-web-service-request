var xhttp = new XMLHttpRequest;

xhttp.open('GET','https://thatsthespir.it/api',true)

xhttp.onload = function ()  //donwload the quote
{
    if(this.status === 200)
    {

        //document.getElementById('quoteText').innerHTML= this.responseText.slice(9,500);

        fetch("https://thatsthespir.it/api")

        .then(res => res.json())
        .then( data => console.log(data.quote))
        .then(data => document.getElementById('quotetext').innerHTML=json.data[0].quote)


        fetch("https://thatsthespir.it/api")

        .then(res => res.json())
        .then(data => console.log(data.author))

        fetch("https://thatsthespir.it/api")

        .then(res => res.json())
        .then(data => console.log(data.photo))

        let jsonObj = req.responseText;
        let profileJson = JSON.parse(jsonObj);
        console.log(profileJson.data)
    
        document.getElementById("quoteText").innerHTML=profileJson.data[1].quote;
        document.getElementById("author").innerHTML=profileJson.data[1].author;

        
    }
}

xhttp.send();

//test2

function getApi() 
{
    let req = new XMLHttpRequest();
    req.open("GET","https://thatsthespir.it/api");
    
    req.onload=function()
    {
        let jsonObj = req.responseText;
        let profileJson = JSON.parse(jsonObj);
        console.log(profileJson.data)
    
        document.getElementById("quoteText").innerHTML=profileJson.data[1].quote;
        document.getElementById("author").innerHTML=profileJson.data[1].author;
    }
    req.send();
}