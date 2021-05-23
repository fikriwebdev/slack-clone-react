import {
  Add,
  Apps,
  Bookmark,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Dev Rooms</h2>
          <h3>
            <FiberManualRecord />
            Muhamad Fikri
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>

      <SidebarOption Icon={InsertComment} title="Threads" key={1} />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" key={2} />
      <SidebarOption Icon={Drafts} title="Saved items" key={3} />
      <SidebarOption Icon={Bookmark} title="Channel browser" key={4} />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" key={5} />
      <SidebarOption Icon={Apps} title="Apps" key={6} />
      <SidebarOption Icon={FileCopy} title="File Browser" key={7} />
      <SidebarOption Icon={ExpandLess} title="Show less" key={8} />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" key={9} />
      <hr />
      <SidebarOption Icon={Add} title="Add channel" key={10} />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  flex: 0.3;
  background-color: var(--slack-color);
  max-width: 260px;
  border-top: solid 1px #49274b;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: solid 1px #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
