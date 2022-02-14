import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;
  background-color: beige;
`;

const HeaderBar = styled.div`
  height: 10vh;
  dis
`;

const Logo = styled.span``;

const Header = () => {
  return (
    <>
      <Container>
        <HeaderBar>
          <Logo>
            <i className="fab fa-hive"></i>
          </Logo>
        </HeaderBar>
      </Container>
    </>
  );
};

export default Header;
