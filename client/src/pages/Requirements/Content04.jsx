import { useNavigate } from "react-router-dom";
import RequirementControl from "../../components/RequirementsControl/RequirementControl";

const Content04 = (props) => {
  return (
    <div className="RequirementsBodyContents">
      <div className="">Content04</div>
      <RequirementControl prevBtn={true} page={4} setPage={props.setPage} />
    </div>
  );
};
export default Content04;
