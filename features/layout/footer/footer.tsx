import styled from "styled-components";
import { FooterItemLink } from "./footer-item-link";
import { breakpoint, color, space } from "@styles/theme";
import packageInfo from "../../../package.json";

const footerItems = [
  { text: "Docs", href: "#" },
  {
    text: "API",
    href: "#",
  },
  {
    text: "Help",
    href: "#",
  },
  { text: "Community", href: "#" },
];

const Container = styled.footer`
  display: flex;
  background: ${color("gray", 50)};
  padding: ${space(6, 0)};
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${space(6)};
  width: 100%;

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
  }
`;

const Version = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  order: 3;
  color: ${color("gray", 400)};

  @media (min-width: ${breakpoint("desktop")}) {
    order: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkList = styled(List)`
  display: flex;
  gap: ${space(6)};
  color: ${color("gray", 500)};
  margin: 0 16.094rem;
`;

const Logo = styled.img`
  // width: 7.375rem;
`;

export function Footer() {
  return (
    <Container>
      <Nav>
        <Version>Version: {packageInfo.version}</Version>
        <LinkList>
          {footerItems.map((footerItem, index) => (
            <FooterItemLink key={index} {...footerItem} />
          ))}
        </LinkList>
        <div>
          <Logo src="/icons/logo-small.svg" />
        </div>
      </Nav>
    </Container>
  );
}
