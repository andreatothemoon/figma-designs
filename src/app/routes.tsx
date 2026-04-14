import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Plan } from "./components/Plan";
import { Wealth } from "./components/Wealth";
import { Actions } from "./components/Actions";
import { Profile } from "./components/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "plan", Component: Plan },
      { path: "wealth", Component: Wealth },
      { path: "actions", Component: Actions },
      { path: "profile", Component: Profile },
    ],
  },
]);
