import { lazy } from "react";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Admin = lazy(() => import("../views/Admin.js"));
const Restaurants = lazy(() => import("../views/ui/Restaurants"));
const Menu = lazy(() => import("../views/ui/Menu"));
const Reservations = lazy(() => import("../views/ui/Reservations"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", exact: true, element: <Restaurants /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "admin", exact: true, element: <Admin /> },
      // { path: "/restaurants", exact: true, element: <Restaurants /> },
      { path: "/menu", exact: true, element: <Menu /> },
      { path: "/reservations", exact: true, element: <Reservations /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
