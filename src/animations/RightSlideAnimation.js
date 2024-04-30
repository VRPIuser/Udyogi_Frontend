const RightSlideAnimation = ({ show, children, className }) => {
  return (
    <div
      className={`${
        show
          ? "opacity-100 translate-x-0 transition-all"
          : "opacity-0 -translate-x-full transition-all"
      } ${className} `}
    >
      {children}
    </div>
  );
};
export default RightSlideAnimation;
