import Button from "@/components/UI/Button/Button";

const Sidebar = ({
  setShowSidebar,
  showSidebar,
  user,
  signOutHandler,
  setRoom,
}) => {
  return (
    <div
      className={`bg-orange-100 absolute top-0 left-0 z-40 transition-all shadow-md min-w-64 w-full max-w-96 ${
        !showSidebar ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <SidebarHeader
        user={user}
        signOutHandler={signOutHandler}
        setRoom={setRoom}
        setShowSidebar={setShowSidebar}
      />
    </div>
  );
};

const SidebarHeader = ({ user, signOutHandler, setRoom, setShowSidebar }) => {
  return (
    <div className="w-full h-screen shadow">
      <div className="flex flex-col justify-end z-50 relative pt-20 gap-4 p-4">
        <p className="text-center">Welcome, {user.displayName}</p>
        <Button
          onClick={() => {
            signOutHandler();
            setShowSidebar(false);
          }}
        >
          Sign Out
        </Button>
        <Button
          onClick={() => {
            setRoom(null);
            setShowSidebar(false);
          }}
        >
          Join Different Room
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
