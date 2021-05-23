import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar //TODO: Add OnClick
        />
        <AccessTime />
      </HeaderLeft>
      {/* Header Search */}
      <HeaderSearch>
        <Search />
        <input type="text" placeholder="Search Something" />
      </HeaderSearch>
      {/* Header Right */}
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  background-color: var(--slack-color);
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  opacity: 1;
  border: none;
  background-color: #421f44;
  flex: 0.4;
  border-radius: 6px;
  padding: 0 50px;
  border: solid 1px gray;
  color: gray;
  text-align: center;
  > input {
    background: transparent;
    border: none;
    text-align: center;
    color: white;
    min-width: 30vw;
    :focus {
      outline: none;
    }
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;

  > .MuiSvgIcon-root {
    margin-right: 20px;
  }
`;
