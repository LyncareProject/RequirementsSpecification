import { useNavigate } from "react-router-dom";
import RequirementControl from "../../components/RequirementsControl/RequirementControl";

const Content07 = (props) => {
  return (
    <div className="RequirementsBodyContents">
      <div className="">Content07</div>
      <RequirementControl prevBtn={true} page={7} setPage={props.setPage} />
    </div>
  );
};
export default Content07;
