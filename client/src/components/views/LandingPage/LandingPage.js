import React, { useEffect } from "react";
import axios from "axios";
import "./LandingPage.css";
import styled from "styled-components";

const TopNav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  background: white;
  width: 900px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); /* 그림자 */
  margin: 0 auto; /* 페이지 중앙 정렬 */
  margin-top: 4rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 900px;
  height: 100%;
`;

const ContainerLeft = styled.div`
  display: inline-block;
  width: 555px;
`;

const ContainerRight = styled.div`
  float: right;
  width: 336px;
`;

const LandingPage = (props) => {
  const names = ["이모저모", "저모이모", "공구게시판", "구인구직게시판"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response.data);
    });
  }, []);

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  return (
    <>
      <Wrapper>
        <Header>마곡피플</Header>
        <TopNav>{nameList}</TopNav>
        <Container>
          <ContainerLeft>좌로</ContainerLeft>
          <ContainerRight>우로</ContainerRight>
        </Container>
        <div className="footer"></div>
        <button onClick={onClickHandler}>로그아웃</button>
      </Wrapper>
    </>
  );
};

export default LandingPage;
