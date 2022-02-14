import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 480px;
  height: 25vh;
  padding: 10px 20px;
  margin: 0 auto;
  background-color: #11254e;
  border-radius: 16px;
  display: flex;
`;

const MainLeft = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PortfolioValue = styled.span`
  color: gray;
`;

const CurrentValue = styled.span`
  font-size: 2rem;
  color: #fff;
  position: relative;
`;

const AmountOfChange = styled.span`
  font-size: 12px;
  position: absolute;
  top: -5px;
  right: 42%;
  color: #3eff94;
`;

const BtnBox = styled.div``;

const DepositBtn = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  background: #00fb9a;
  color: #fff;
`;
const WithdrawBtn = styled.button`
  padding: 8px 16px;
  border: 1px solid gray;
  border-radius: 8px;
  background: transparent;
  color: #fff;
`;

const MainRight = styled.div`
  width: 20%;
  background: yellow;
`;

const MainScreen = () => {
  return (
    <>
      <Container>
        <MainLeft>
          <PortfolioValue>Portfolio value</PortfolioValue>
          <CurrentValue>
            $15,136.32
            <AmountOfChange>2.11%&uarr;</AmountOfChange>
          </CurrentValue>
          <BtnBox>
            <DepositBtn>Desposit</DepositBtn>
            <WithdrawBtn>Withdraw</WithdrawBtn>
          </BtnBox>
        </MainLeft>
        <MainRight>hello</MainRight>
      </Container>
    </>
  );
};

export default MainScreen;
