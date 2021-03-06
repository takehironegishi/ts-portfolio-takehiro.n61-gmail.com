import Link from "next/link";
import { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { User } from "types";

interface Props {
  href: string;
  title: string;
}

const BsNavLink: React.FC<Props> = ({ href, title }) => {
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

const LoginLink = () => (
  // eslint-disable-next-line @next/next/no-html-link-for-pages
  <a className="nav-link port-navbar-link" href="/api/v1/login">
    Login
  </a>
);

const LogoutLink = () => (
  // eslint-disable-next-line @next/next/no-html-link-for-pages
  <a className="nav-link port-navbar-link" href="/api/v1/logout">
    Logout
  </a>
);

interface HeaderProps {
  loading: boolean;
  user?: User;
}

export const Header: React.FC<HeaderProps> = ({ user, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md"
      >
        <div className="navbar-brand">
          <Link href="/">
            <a className="port-navbar-brand">Takehiro Negishi</a>
          </Link>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>
          </Nav>
          <Nav navbar>
            {!loading && (
              <>
                {user && (
                  <NavItem className="port-navbar-item">
                    <LogoutLink />
                  </NavItem>
                )}
                {!user && (
                  <NavItem className="port-navbar-item">
                    <LoginLink />
                  </NavItem>
                )}
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
