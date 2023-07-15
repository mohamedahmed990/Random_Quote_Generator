var quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: `Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead
        Walk beside me… just be my friend`,
        author: "Albert Camus"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    }

];

var lastIndex;
var btn = document.getElementById("button");

btn.addEventListener("click", function() {
    var newIndex;
    newIndex = Math.floor(Math.random() * 8);
    var quote = document.getElementById("quote");
    var author = document.getElementById("author");

    while (newIndex === lastIndex) {
        newIndex = Math.floor(Math.random() * 8);
    }
    // console.log(newIndex)
    // console.log(quotes[newIndex].quote)
    // console.log(quotes[newIndex].author)

    quote.innerHTML=`"${quotes[newIndex].quote}"`;
    author.innerHTML=`--${quotes[newIndex].author}`;
    lastIndex = newIndex;
})

