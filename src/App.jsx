import "./App.css";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function App() {
  return (
    <div className=" w-screen h-screen flex flex-col justify-between">
      <Navbar fluid>
        <NavbarBrand href="#">
          <img
            src="https://ieeemansb.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-icon.fca3f8bf.png&w=640&q=75"
            className="mr-3 h-6 sm:h-9 invert dark:invert-0"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
            NUIEEE
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#">Home</NavbarLink>
          <NavbarLink href="speakers">Speakers</NavbarLink>
          <NavbarLink href="workshops">Workshops</NavbarLink>
          <NavbarLink href="projects">Projects</NavbarLink>
          <NavbarLink href="faq">FAQ</NavbarLink>
          <NavbarLink href="contact">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <Footer container>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                className=""
                href="https://flowbite.com"
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/ieee_logo_icon_169992.png"
                alt="IEEE Logo"
                name="NU IEEE"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Instagram</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Connect" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Slack</Footer.Link>
                  <Footer.Link href="#">Mailing List</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="NUIEEE" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default App;
