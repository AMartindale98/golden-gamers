import { Nav, Dropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiHome, HiStar } from "react-icons/hi2";
import { RiTeamFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsArrowReturnRight } from "react-icons/bs";

function NavBar() {
  const width = window.innerWidth;
  console.log(width);
  return (
    <Navbar
      expand="sm"
      className="bg-body-light border-b-4 border-[var(--brand-blue)]"
    >
      <div className="grid grid-cols-2">
        <Navbar.Brand className="!w-[50vw]">
          <img src="/logo.jpg" className="h-[90px] md:h-[140px]" alt="Logo" />
        </Navbar.Brand>
        <div className="text-right sm:flex sm:justify-end sm:px-5 me-2 ">
          <Navbar.Toggle aria-controls="gg-nav" />
          <Navbar.Collapse
            id="gg-nav"
            className="flex flex-col !justify-end !items-end sm:me-2 pt-3 sm:p-0"
          >
            <Nav className="gap-1">
              <Link
                to="/"
                className="no-underline text-[var(--brand-pink)] sm:px-3 inline-flex items-center hover:scale-110 transition-transform"
              >
                <span className="px-1">
                  <HiHome />
                </span>
                Home
              </Link>
              <Link
                to="/sponsorship"
                className="no-underline text-[var(--brand-pink)] sm:px-3 inline-flex items-center hover:scale-110 transition-transform"
              >
                <span className="px-1">
                  <HiStar />
                </span>
                Sponsorship
              </Link>
              <div className="no-underline !text-[var(--brand-pink)] sm:px-3 px-1 inline-flex items-center hover:scale-110 transition-transform">
                {width > 640 && (
                  <>
                    <span className="px-1 w-fit">
                      <RiTeamFill />
                    </span>
                    <Dropdown as={"div"} drop="down">
                      <Dropdown.Toggle
                        renderOnMount={true}
                        as={Link}
                        className="cursor-pointer no-underline !text-[var(--brand-pink)]"
                      >
                        About
                      </Dropdown.Toggle>
                      <Dropdown.Menu align="start">
                        <Dropdown.Item
                          as={Link}
                          to="/about/team"
                          className="no-underline !text-[var(--brand-pink)] !cursor-pointer"
                        >
                          Our Team
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          to="/about/captains"
                          className="no-underline !text-[var(--brand-pink)] inline-flex items-center !cursor-pointer"
                        >
                          Our Captains
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                )}
              </div>

              {width < 640 && (
                <div className="flex justify-center text-left text-[var(--brand-pink)]">
                  <div>
                    <div className="flex items-center">
                      <span className="px-1 w-fit">
                        <RiTeamFill />
                      </span>{" "}
                      <p className="mb-0">About</p>
                    </div>
                    <p className="mb-0 ms-3 flex items-center gap-1">
                      <BsArrowReturnRight />
                      <Link
                        to="/about/team"
                        className=" text-[var(--brand-pink)] no-underline hover:scale-110 transition-transform"
                      >
                        Our Team
                      </Link>
                    </p>
                    <p className="mb-0 ms-3 flex items-center gap-1">
                      <BsArrowReturnRight />
                      <Link
                        to="/about/captains"
                        className=" text-[var(--brand-pink)] no-underline hover:scale-110 transition-transform"
                      >
                        Our Captains
                      </Link>
                    </p>
                  </div>
                </div>
              )}

              <Link
                to="/contact"
                className="no-underline text-[var(--brand-pink)] sm:px-3 inline-flex items-center hover:scale-110 transition-transform"
              >
                <span className="px-1">
                  <MdEmail />
                </span>
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
}

export default NavBar;
