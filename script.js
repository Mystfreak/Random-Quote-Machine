let quotes = [
  'Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead. Walk beside me… just be my friend.',
  'You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.',
  'In the depth of winter, I finally learned that within me there lay an invincible summer.',
  'Man is the only creature who refuses to be what he is.',
  'Nobody realizes that some people expend tremendous energy merely to be normal.',
  'Should I kill myself, or have a cup of coffee?',
  'You know what charm is: a way of getting the answer yes without having asked any clear question',
  'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.',
  'Blessed are the hearts that can bend; they shall never be broken.',
  'I may not have been sure about what really did interest me, but I was absolutely sure about what didn\'t.',
  'An intellectual? Yes. And never deny it. An intellectual is someone whose mind watches itself. I like this, because I am happy to be both halves, the watcher and the watched. "Can they be brought together?" This is a practical question. We must get down to it. "I despise intelligence" really means: "I cannot bear my doubts.',
  'To be happy, we must not be too concerned with others.',
  'When you have once seen the glow of happiness on the face of a beloved person, you know that a man can have no vocation but to awaken that light on the faces surrounding him.',
  'No matter how hard the world pushes against me, within me, there’s something stronger – something better, pushing right back.',
  'When the soul suffers too much, it develops a taste for misfortune.',
  'I’ve seen of enough of people who die for an idea. I don’t believe in heroism; I know it’s easy and I’ve learned it can be murderous. What interests me is living and dying for what one loves.',
  'Some people talk in their sleep. Lecturers talk while other people sleep',
  'Don\'t believe your friends when they ask you to be honest with them. All they really want is to be maintained in the good opinion they have of themselves.',
  'The need to be right is the sign of a vulgar mind.',
  'The struggle itself towards the heights is enough to fill a man\'s heart. One must imagine Sisyphus happy',
  'To correct a natural indifference I was placed half-way between misery and the sun. Misery kept me from believing that all was well under the sun, and the sun taught me that history wasn\'t everything.',
  'The modern mind is in complete disarray. Knowledge has stretched itself to the point where neither the world nor our intelligence can find any foot-hold. It is a fact that we are suffering from nihilism.'
]
let author = ['Albert Camus']

 function getQuote() {
   let randomNumber = Math.floor(Math.random() * quotes.length)
   
   document.getElementById('text').innerHTML = quotes[randomNumber];
    document.getElementById('author').innerHTML = author[0]; 
 }
let tweet = document.getElementById('tweet-quote');
 tweet.addEventListener('click', function() {
   window.open('https://twitter.com/intent/tweet')
 });