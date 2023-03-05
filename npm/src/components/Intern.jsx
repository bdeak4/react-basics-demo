const Intern = ({ intern }) => {
  const { firstName, lastName } = intern;

  return (
    <div>
      <h2 className="heading">
        Pozdrav {firstName} {lastName}
      </h2>
      <i>intern component</i>
    </div>
  );
};

export default Intern;
