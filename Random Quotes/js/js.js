var quotes = [
	"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - Martin Golding",
	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. - Brian W. Kernighan.",
	"Measuring programming progress by lines of code is like measuring aircraft building progress by weight. - Bill Gates",
	"I don't care if it works on your machine! We are not shipping your machine! - Vidiu Platon.",
	"Computer system analysis is like child-rearing; you can do grievous damage, but you cannot ensure success. - Tom DeMarco",
	"Beware of bugs in the above code; I have only proved it correct, not tried it. - Donald E. Knuth.",
	"Programming is like kicking yourself in the face, sooner or later your nose will bleed. - Kyle Woodbury",
	"In theory, theory and practice are the same. In practice, they’re not. - Yoggi Berra",
	"For a long time it puzzled me how something so expensive, so leading edge, could be so useless. And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match. - Bill Bryson",
	"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. - Mosher’s Law of Software Engineering",
	"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to build bigger and better idiots. So far, the universe is winning. - Rick Cook",
	"I'm just an Idiot with a Keyboard - Louis Paul"
]
function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length) );
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}