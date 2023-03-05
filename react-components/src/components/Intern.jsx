const Intern = ({ firstName, lastName }) => {
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
