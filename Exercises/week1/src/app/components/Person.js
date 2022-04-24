const Person = ({ firstname, lastname, pictureUrl, age, length, weight }) => {
  return (
    <article>
      <h1>
        {firstname} {lastname}
      </h1>
      <img src={pictureUrl} alt={`${firstname} ${lastname}`} />
      <p>Age: {age}</p>
      <p>Length: {length}</p>
      <p>Weight: {weight}</p>
    </article>
  );
};

export default Person;
