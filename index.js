var quote=document.getElementById("quote");

var quoteData=[{
  quoteContext:"“Be yourself; everyone else is already taken.”", 
  quoteAuthor:"― Oscar Wilde",

},
{
  quoteContext:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best”",
  quoteAuthor:"― Marilyn Monroe"

},
{
  quoteContext:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  quoteAuthor:" ― Albert Einstein"

}
]


function generateQuote(){
  var randomNumber = Math.floor(Math.random() * 3);
  quote.innerHTML=`<p class="my-3">${quoteData[randomNumber].quoteContext}</p>
  <p>${quoteData[randomNumber].quoteAuthor}</p>`
}


