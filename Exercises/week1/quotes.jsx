const quotes = [
  "I'm not a great programmer; I'm just a good programmer with great habits.",
  "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
  "Truth can only be found in one place: the code.",
  "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
];

const QuoteListItem = ({ quote }) => {
  return <li className="quote-list__item">{quote}</li>;
};

const QuoteList = () => {
  return (
    <ul className="quote-list">
      {quotes.map((q, index) => (
        <QuoteListItem key={index} quote={q} />
      ))}
    </ul>
  );
};