/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// Pages
// import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";
import Signup from "pages/LandingPages/SignUp/Index";
import OpenInterest from "pages/Presentation/OptionInterest/OpenInterest";
import MSoi from "pages/Presentation/MultiStrikeOI/Index";
import StretergyBuilder from "pages/Presentation/StretergyBuilder/Index";
import AboutUs from "pages/LandingPages/OptionChainPage";
import StretergyWizard from "pages/Presentation/StretergyWizard/StretergyWizard";

const routes = [
  {
    name: "Trade",
    // icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    dropdown: true,
    collapse: [
      {
        collapse: [
          {
            name: "Stretergy Builder",
            component: <StretergyBuilder />,
            route: "/pages/landing-pages/stretergybuilder",
          },
          {
            name: "Stretergy Wizard",
            route: "/pages/landing-pages/stretergywizard",
            component: <StretergyWizard />,
          },
          {
            name: "author",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
            component: <Signup />,
          },
        ],
      },
    ],
  },
  {
    name: "Analyse",
    // icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Option Trade",
        route: "/pages/landing-pages/option-trade",
        dropdown: false,
        component: <AboutUs />,

        // collapse: [
        // {
        //   name: "page headers",
        //     component: <PageHeaders />,
        //   },
        //   {
        //     name: "features",
        //     route: "/sections/page-sections/features",
        //     component: <Features />,
        //   },
        // ],
      },
      {
        name: "Optioin Interest",
        route: "/pages/landing-pages/option-trade/openinterest",
        component: <OpenInterest />,
        dropdown: false,
        // description: "See all navigations",
        // collapse: [
        //   {
        //     name: "navbars",
        //     component: <Navbars />,
        //   },
        //   {
        //     name: "nav tabs",
        //     route: "/sections/navigation/nav-tabs",
        //     component: <NavTabs />,
        //   },
        //   {
        //     name: "test",
        //     route: "/sections/navigation/pagination",
        //     component: <Pagination />,
        //   },
        // ],
      },
      {
        name: "Multi Strike OI",
        // description: "See all input areas",
        route: "/pages/landing-pages/option-trade/multistrikeio",
        component: <MSoi />,
        dropdown: false,
        // collapse: [
        //   {
        //     name: "inputs",
        //     route: "/sections/input-areas/inputs",
        //     component: <Inputs />,
        //   },
        //   {
        //     name: "forms",
        //     route: "/sections/input-areas/forms",
        //     component: <Forms />,
        //   },
        // ],
      },
      {
        name: "attention catchers",
        description: "See all examples",
        dropdown: true,
        collapse: [
          {
            name: "alerts",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "modals",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "tooltips & popovers",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "elements",
        description: "See all 32 examples",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
      },
    ],
  },
  {
    name: "Watchlist",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "getting started",
        description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "foundation",
        description: "See our colors, icons and typography",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "components",
        description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "plugins",
        description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
  {
    name: "Positions",
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
  {
    name: "Orders",
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
];

export default routes;
