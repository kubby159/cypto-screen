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
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PortfolioValue = styled.span`
  color: #858e96;
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
  right: 50%;
  color: #3eff94;
`;

const BtnBox = styled.div``;

const DepositBtn = styled.button`
  padding: 8px 16px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  background: #35b596;
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
  width: 15%;
  background: #fff;
  padding: 12px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
`;

const MainRightIconBtc = styled.span`
  border: 1px solid transparent;
  padding: 6px 8px;
  border-radius: 50%;
  &:hover {
    background-color: lightgray;
  }
`;
const MainRightIconEth = styled.span`
  border: 1px solid transparent;
  padding: 8px 12px;
  border-radius: 50%;
  &:hover {
    background-color: lightgray;
  }
`;
const MainRightIconStx = styled.span``;

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
        <MainRight>
          <MainRightIconBtc>
            <i className="fab fa-bitcoin"></i>
          </MainRightIconBtc>
          <MainRightIconEth>
            <i className="fab fa-ethereum"></i>
          </MainRightIconEth>
        </MainRight>
      </Container>
    </>
  );
};

export default MainScreen;
