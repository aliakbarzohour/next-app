import styled from "styled-components";

const Footer = styled.div`
  background: #061729;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export default function footer() {
  return (
    <>
      <Footer>
        <p>By Aliakbar Zohour</p>
      </Footer>
    </>
  );
}
