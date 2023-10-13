import { useNavigate } from "react-router-dom";
import RequirementControl from "../../components/RequirementsControl/RequirementControl";

const Content05 = (props) => {
  return (
    <div className="RequirementsBodyContents">
      <div className="">Content05</div>
      <RequirementControl prevBtn={true} page={5} />
    </div>
  );
};
export default Content05;
