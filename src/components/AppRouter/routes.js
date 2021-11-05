import Auth from "../../pages/Auth/Auth";
import Chat from "../../pages/Chat/Chat";
import Profile from "../../pages/Profile/Profile";
import Users from "../../pages/Users/Users";

export const publicRoutes = [
  {
    path: "/auth",
    Component: Auth,
  },
];

export const privateRoutes = [
  {
    path: "/chat:id",
    Component: Chat,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/users",
    Component: Users,
  },
];
