const { logout } = require("@/store/LoginState/LoginStateActions");
const { useRouter } = require("next/router");
const { useDispatch } = require("react-redux");

const ProfileDataComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const profileData = [
    {
      icon: "profileActivity.png",
      label: "My Following",
      address: "/user/my-following",
      action: () => {
        router.push("/user/my-following");
      },
    },
    //     {
    //       icon: "subscription.png",
    //       label: "My Subscriptions",
    //       action: () => {
    //         router.push("/user/my-subscriptions");
    //       },
    // address:'/user/my-subscriptions',

    //     },
    //     {
    //       icon: "myJobs.png",
    //       label: "My Jobs",

    //       action: () => {
    //         router.push("/user/my-jobs");
    //       },
    // address:'/user/my-jobs',

    //     },
    {
      icon: "subscription.png",
      label: "Messages",
      action: () => {
        router.push("/user/chat");
      },
      address: "/user/chat",
    },

    {
      icon: "settings.png",
      label: "Settings",
      action: () => {
        router.push("/user/settings");
      },
      address: "/user/settings",
    },
    {
      icon: "contactSupport.png",
      label: "Help & Support",
      action: () => {
        router.push("/user/contact-support");
      },
      address: "/user/contact-support",
    },
    {
      icon: "logout.png",
      label: "Log Out",
      action: () => {
        dispatch(logout());
        router.push("/sign-in");
      },
      address: "/nothing",
    },
  ];

  return profileData;
};

export default ProfileDataComponent;
