import React from "react";
import "./RequirementsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useCallback } from "react";
import ChatBot from "./ChatBot";
import Sidebar from "./Sidebar";
import Content01 from "./Content01";
import Content02 from "./Content02";
import Content03 from "./Content03";
import Content04 from "./Content04";
import Content05 from "./Content05";
import Content06 from "./Content06";
import Content07 from "./Content07";
import { useSelector } from "react-redux";

const RequirementsPage = (props) => {
  const state = useSelector((state) => state.requirementsSlice.value);
  const { page } = state;

  return (
    <div className="RequirementsPage">
      <div className="RequirementsWrap">
        <div className="RequirementsHeader">
          <div className="RequirementsHeaderTitle">요구사항 명세서</div>
          <div className="RequirementsHeaderControls">
            {/* <div className="RequirementsHeaderMinimize"></div>
            <div className="RequirementsHeaderMaximize"></div> */}
            <div
              className="RequirementsHeaderClose"
              onClick={() => {
                props.setRequirementsModal(false);
              }}
            ></div>
          </div>
        </div>
        <div className="RequirementsBody">
          <Sidebar page={page} />
          {page === 1 && <Content01 />}
          {page === 2 && <Content02 />}
          {page === 3 && <Content03 />}
          {page === 4 && <Content04 />}
          {page === 5 && <Content05 />}
          {page === 6 && <Content06 />}
          {page === 7 && <Content07 />}
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default RequirementsPage;
