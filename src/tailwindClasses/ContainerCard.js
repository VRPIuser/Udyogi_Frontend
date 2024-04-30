const BorderContainer = ({ children, className, style, id, onClick }) => {
  return (
    <div
      className={`${className} bg-white border text-orange-500 shadow-xl border-orange-500 rounded-xl`}
      id={id}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BorderContainer;
