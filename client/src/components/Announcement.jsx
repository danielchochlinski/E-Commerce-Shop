import React from "react";
import styled from "styled-components";

const Announcement = () => {
  const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 4px;
  `;

  return <Container>BEST OF SPORTSWEAR HERE IN DCH SPORTS SHOP</Container>;
};

export default Announcement;
