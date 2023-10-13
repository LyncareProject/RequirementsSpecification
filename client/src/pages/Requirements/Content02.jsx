import { useNavigate } from "react-router-dom";
import RequirementControl from "../../components/RequirementsControl/RequirementControl";

const Content02 = (props) => {
  return (
    <div className="RequirementsBodyContents">
      <div>
        <h3>프로젝트 진행 분류 </h3>
        <div>
          <input
            type="checkbox"
            // checked={}
            onClick={() => {}}
          />
          <p>신규 프로젝트를 진행하려 합니다.</p>
        </div>
        <div>
          <input
            type="checkbox"
            // checked={}
            onClick={() => {}}
          />
          <p>운영 중인 서비스의 리뉴얼 또는 유지보수를 하려 합니다.</p>
        </div>
      </div>
      <div>
        <h3>기획 상태</h3>
        <p>
          업무 범위 산정과 예산 및 일정 상담을 위해 현재 기획 상태를
          선택해주세요
        </p>
        <div className="RequirementsBodyContentsWrap">
          <div className="RequirementsBodyContentsBox">
            <input
              type="checkbox"
              // checked={}
              onClick={() => {}}
            />
            <p>아이디어만 있습니다.</p>
          </div>
          <div className="RequirementsBodyContentsBox">
            <input
              type="checkbox"
              // checked={}
              onClick={() => {}}
            />
            <p>필요한 내용들을 간단히 정리해두었습니다.</p>
          </div>
          <div className="RequirementsBodyContentsBox">
            <input
              type="checkbox"
              // checked={}
              onClick={() => {}}
            />
            <p>상세한 기획 문서가 존재합니다.</p>
          </div>
        </div>
      </div>
      <div>
        <h3>프로젝트 관련 자료</h3>
        <p>
          아이디어 또는 필요한 내용을 정리한 문서를 추가해 주세요.
          프로젝트 예산 및 일정 산정에 활용되며,  문서 및 이미지 파일만 추가 가능합니다.
        </p>
        <div>
          <p>+ 프로젝트 관련 자료 추가</p>
        </div>
        <div>
          <p>안심하세요! 자료 공개 대상을 설정할 수 있습니다.</p>
          <select name="languages" id="lang">
            <option value="1">Wevibe만</option>
            <option value="2">Wevibe, 미팅 예정 파트너</option>
            <option value="3">전체 공개</option>
          </select>
        </div>
      </div>
      <RequirementControl prevBtn={true} page={2} />
    </div>
  );
};
export default Content02;
