const Sidebar = (props) => {
  const getClassName = (pageIndex) => {
    return props.page === pageIndex ? "bold" : "";
  };

  return (
    <div className="RequirementsBodySidebar">
      <div>프로젝트 정보 등록</div>
      <div>
        <div>프로젝트 정보 등록</div>
        <div className={getClassName(1)}>1. 기본 정보</div>
        <div className={getClassName(2)}>2. 준비 상태</div>
        <div className={getClassName(3)}>3. 프로젝트 상세</div>
        <div className={getClassName(4)}>4. 예산 및 일정</div>
        <div className={getClassName(5)}>5. 미팅</div>
        <div className={getClassName(6)}>6. 모집 요건</div>
        <div className={getClassName(7)}>7. 추가 정보</div>
      </div>
      <div>프로젝트 등록 완료</div>
    </div>
  );
};

export default Sidebar