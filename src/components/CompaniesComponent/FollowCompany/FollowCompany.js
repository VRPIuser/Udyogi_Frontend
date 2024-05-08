const buttonClasses =
  "h-8 border-red-500 border bg-white text-orange-500 px-3 py-2 rounded-full text-sm flex items-center hover:scale-105 transition-all";
const FollowCompany = ({ companyId }) => {
  return (
    <button className={buttonClasses}>
      <svg
        className="w-4 h-4 mr-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 4v16m8-8H4"
        ></path>
      </svg>
      Follow
    </button>
  );
};
export default FollowCompany;
