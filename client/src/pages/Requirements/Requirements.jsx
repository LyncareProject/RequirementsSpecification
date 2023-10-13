import React from "react";
import "./RequirementsPage.css";
import { useParams } from "react-router-dom";
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

const defaultDesc = "<프로젝트의 현재 상황>\n예시) 프로젝트의 목적, 배경, 현재 준비 상황, 진행 계획 등\n\n<상세한 업무 내용>\n지원 플랫폼 :\n예시 1) PC 웹사이트, 모바일 웹사이트 지원\n예시 2) PC 웹사이트, 모바일 웹사이트, 모바일 애플리케이션 지원\n\n판매자 종류 : \n예시 1) 운영자가 직접 판매 \n예시 2) 쇼핑몰 회원이 판매 \n\n솔루션 사용 유무 : \n예시 1) 사용하지 않습니다. \n예시 2) 사용할 솔루션을 선정하지 않았습니다.\n예시 3) Cafe24를 사용 예정\n\n사용자 메뉴 구성 : \n예시) 여성의류, 남성의류, 액세서리, 이벤트, 마이페이지, 장바구니 등 \n\n사용자 주요 기능 : \n예시) 정기 결제/배송, 할인 쿠폰, 상품 추천, SNS 소셜 로그인 등 \n\n관리자 주요 기능 : \n예시) 회원정보 조회, 전체 주문 조회, 상품 관리, 이벤트(프로모션) 관리 등 \n\n<참고자료 / 유의사항> \n기능 및 디자인 참고 사이트 : \n예시) 사이트의 기능은 ‘G마켓‘을 참고하며, 디자인은 ‘쿠팡’을 참고합니다. \n\n기타 유의사항 : \n예시) 우대 사항 등"

const RequirementsPage = () => {
  let { page } = useParams();
  let pageNum = Number(page);

  const [category, setCategory] = useState({
    develop: false,
    design: false,
    planning: false,
  });
  console.log(category);
  const [subCategory, setSubCategory] = useState({
    web: false,
    application: false,
    commerce: false,
    software: false,
    publishing: false,
    wordpress: false,
    embedded: false,
    game: false,
    etc: false,
  });
  const [desc, setDesc] = useState(defaultDesc);
  const ContentComponent = useCallback(() => {
    switch (pageNum) {
      case 1:
        return (
          <Content01
            category={category}
            setCategory={setCategory}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />
        );
      case 2:
        return <Content02 category={category} setCategory={setCategory} />;
      case 3:
        return <Content03 desc={desc} setDesc={setDesc} />;
      case 4:
        return <Content04 category={category} setCategory={setCategory} />;
      case 5:
        return <Content05 category={category} setCategory={setCategory} />;
      case 6:
        return <Content06 category={category} setCategory={setCategory} />;
      case 7:
        return <Content07 category={category} setCategory={setCategory} />;
      default:
        return <Content01 category={category} setCategory={setCategory} />;
    }
  }, [
    pageNum,
    category,
    setCategory,
    subCategory,
    setSubCategory,
    desc,
    setDesc,
  ]);

  return (
    <div className="RequirementsPage">
      <div className="RequirementsWrap">
        <div className="RequirementsHeader">
          <div className="RequirementsHeaderTitle">요구사항 명세서</div>
          <div className="RequirementsHeaderControls">
            <div className="RequirementsHeaderMinimize"></div>
            <div className="RequirementsHeaderMaximize"></div>
            <div className="RequirementsHeaderClose"></div>
          </div>
        </div>
        <div className="RequirementsBody">
          <Sidebar page={pageNum} />
          {ContentComponent()}
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default RequirementsPage;
