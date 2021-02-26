document.querySelector('button').addEventListener('click', generateQuote);

//generate quote

function generateQuote()
{
    const quote = document.querySelector('.quote');
    const xhr = new XMLHttpRequest();

    xhr.open
    (
        'Get',
        'https://thatsthespir.it/api',
        true
    );

    xhr.onload = function()
    {
        if (this.status === 200)
        {
            let response = JSON.parse(this.responseText);
            quote.innerHTML = reponse[0].content;
        };
    };

    xhr.send();
}