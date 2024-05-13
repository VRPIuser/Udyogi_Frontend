import MessagesPopover from "@/components/MainHeader/MessagesPopover/MessagesPopover";
import NotificationComponent from "@/components/MainHeader/NotificationsPopover/NotificationPopover";
import ProfileComponent from "@/components/MainHeader/ProfilePopover/ProfilePopover";

export const RightHeaderLinks = [
  {
    name: "Sign-In",
    address: "/sign-in",
    active: false,
  },
  {
    name: "Sign-up",
    address: "/sign-up",
    active: false,
  },
  {
    name: "Post a Jobs?",
    address: "/postJob",
    active: false,
  },
];

export const RightSideIcons = [
  // {
  //   image: "message.png",
  //   link: "/message",
  //   popover: <MessagesPopover />,
  // },
  {
    image: "notifications.png",
    link: "/notifications",
    popover: <NotificationComponent />,
  },
  {
    image: "profile.png",
    link: "/profile",
    popover: <ProfileComponent />,
  },
];
export const LeftHeaderLinks = [
  {
    name: "Jobs",
    address: "/jobs",
    active: false,
  },
  {
    name: "Companies",
    address: "/companies",
    active: false,
  },
  {
    name: "My Jobs",
    address: "/user/my-jobs",
    active: false,
  },
];
