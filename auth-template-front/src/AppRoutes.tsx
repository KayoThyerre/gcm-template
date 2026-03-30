import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../src/pages/Login";
import { Register } from "./pages/Register";
import { Home } from "../src/pages/Home";
import { Users } from "./pages/Users";
import { Reports } from "./pages/Reports"
import { Settings } from "./pages/Settings"
import { Dashboard } from "./pages/Dashboard";
import { AdminUsers } from "./pages/AdminUsers";
import { Profile } from "./pages/Profile";
import { ProfileSecurity } from "./pages/ProfileSecurity";
import { PrivateRoute } from "../src/routes/PrivateRoute";
import { PrivateLayout } from "./layouts/PrivateLayout";

type AppRoute = {
  path: string;
  element: React.ReactNode;
  isPrivate?: boolean;
  children?: AppRoute[];
};

const routes: AppRoute[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <PrivateLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        element: <Home />,
        children: [
          {path: "",element: <Dashboard />,},
          {path: "users", element: <Users />,},
          {path: "reports", element: <Reports />,},
          {path: "settings", element: <Settings />,},
        ],
      },
      {
        path: "dashboard/admin/users",
        element: <AdminUsers />,
      },
      {
        path: "settings/profile",
        element: <Profile />,
      },
      {
        path: "settings/security",
        element: <ProfileSecurity />,
      },
    ],
  },
];

function renderRoute(route: AppRoute) {
  return (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children?.map(renderRoute)}
    </Route>
  );
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(renderRoute)}
      </Routes>
    </BrowserRouter>
  );
}
