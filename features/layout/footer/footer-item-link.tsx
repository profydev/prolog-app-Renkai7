import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { color } from "@styles/theme";

type FooterItemProps = {
  text: string;
  href: string;
};

export const ListItem = styled.li`
  display: flex;
`;

export const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${color("gray", 500)};
`;

export function FooterItemLink({ text, href }: FooterItemProps) {
  return (
    <ListItem>
      <Anchor href={href}>{text}</Anchor>
    </ListItem>
  );
}
