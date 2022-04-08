import styled from "styled-components";
import Link from "next/link";

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #061729;
  color: #fff;
  width: 100%;
  padding: 5px 20px;
`;

export default function nav() {
  return (
    <Navbar>
      <Link href="/">Nxt</Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact me</Link>
        </li>
      </ul>
    </Navbar>
  );
}
