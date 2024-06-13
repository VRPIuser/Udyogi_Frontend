const { logout } = require("@/store/LoginState/LoginStateActions");
const { useRouter } = require("next/router");
const { useDispatch } = require("react-redux");

export const AdminSideBarData = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = [
    {
      icon: "addPosts.png",
      text: "Dashboard",
      link: "/dashboard/admin",
      action: () => {
        router.push("/dashboard/admin");
      },
    },
    {
      icon: "addPosts.png",
      text: "All Posts",
      link: "/dashboard/admin/posts",
      action: () => {
        router.push("/dashboard/admin/posts");
      },
    },
    {
      icon: "quantity.png",
      text: "All Recruiters",
      link: "/dashboard/admin/all-recruiters",
      action: () => {
        router.push("/dashboard/admin/all-recruiters");
      },
    },
    {
      icon: "correct.png",
      text: "Shortlisted",
      link: "/dashboard/admin/shortlisted",
      action: () => {
        router.push("/dashboard/admin/shortlisted");
      },
    },
    {
      icon: "interview.png",
      text: "Interviews",
      link: "/dashboard/admin/interviews",
      action: () => {
        router.push("/dashboard/admin/interviews");
      },
    },
    {
      icon: "onBoarding.png",
      text: "Onboarding Status",
      link: "/dashboard/admin/on-boarding",
      action: () => {
        router.push("/dashboard/admin/on-boarding");
      },
    },
    {
      icon: "resume.png",
      text: "Resumes",
      link: "/dashboard/admin/resumes",
      action: () => {
        router.push("/dashboard/admin/resumes");
      },
    },
    {
      icon: "message.png",
      text: "Messages",
      link: "/user/chat",
      action: () => {
        router.push("/user/chat");
      },
    },
    {
      icon: "profile.png",
      text: "Profile",
      link: "/dashboard/admin/profile",
      action: () => {
        router.push("/dashboard/admin/profile");
      },
    },
    {
      icon: "transactions.png",
      text: "Transactions",
      link: "/dashboard/admin/transactions",
      action: () => {
        router.push("/dashboard/admin/transactions");
      },
    },
    {
      icon: "logout.png",
      text: "Logout",
      action: () => {
        console.log("logout");
        dispatch(logout());
        router.push("/sign-in");
      },
    },
  ];

  return data;
};
