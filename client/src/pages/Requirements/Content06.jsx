import { useNavigate } from "react-router-dom";
import RequirementControl from "../../components/RequirementsControl/RequirementControl";

const Content06 = (props) => {
  return (
    <div className="RequirementsBodyContents">
      <div className="">Content06</div>
      <RequirementControl prevBtn={true} page={6} setPage={props.setPage} />
    </div>
  );
};
export default Content06;
