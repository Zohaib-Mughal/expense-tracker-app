const Card = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        card hover-lift
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;