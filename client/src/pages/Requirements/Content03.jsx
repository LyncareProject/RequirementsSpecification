import { useNavigate } from "react-router-dom";
import RequirementControl from "../../components/RequirementsControl/RequirementControl";

const Content03 = (props) => {
  return (
    <div className="RequirementsBodyContents">
      <div>
        <h3>상세 업무 내용</h3>
        <p>
          업무 내용을 상세하게 작성해주실수록, 더 적합한 파트너를 만날 수
          있습니다.
        </p>
        <p>
          파트너가 알아야 할 유의사항(필수 사항, 전문 경험 등)도 함께 작성해
          주세요.
        </p>
        <textarea
          className="RequirementsBodyTextArea"
          value={props.desc}
          onChange={(e) => props.setDesc(e.target.value)}
        />
      </div>
      <RequirementControl prevBtn={true} page={3} />
    </div>
  );
};
export default Content03;
