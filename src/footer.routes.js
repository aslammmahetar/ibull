// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();
const footerConternt = {
  brand: {
    name: "iBull",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/creativetimofficial",
    // },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "Pricy Policy", href: "https://www.creative-tim.com/knowledge-center" },
      ],
    },
    {
      name: "help & support",
      items: [{ name: "contact us", href: "https://www.creative-tim.com/contact-us" }],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}
      <MKTypography
        component="a"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        @iBull
      </MKTypography>
      .
    </MKTypography>
  ),
};
export default footerConternt;
