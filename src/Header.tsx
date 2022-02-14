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
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.span``;

const Title = styled.span`
  padding-left: 8px;
  font-weight: 700;
`;

const RightBox = styled.div``;

const Search = styled.span`
  padding-right: 18px;
  cursor: pointer;
`;

const Notice = styled.span`
  cursor: pointer;
`;

const Layout = styled.div`
  width: 100px;
  background: yellow;
`;

const Header = () => {
  return (
    <>
      <Container>
        <HeaderBar>
          <Logo>
            <i className="fab fa-hive"></i>
            <Title>Alex Julia</Title>
          </Logo>
          <Layout></Layout>
          <RightBox>
            <Search>
              <i className="fas fa-search"></i>
            </Search>
            <Notice>
              <i className="far fa-bell"></i>
            </Notice>
          </RightBox>
        </HeaderBar>
      </Container>
    </>
  );
};

export default Header;
