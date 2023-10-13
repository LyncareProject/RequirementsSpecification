import { useNavigate } from "react-router-dom";

const RequirementControl = (props)=>{
  const navigate = useNavigate()
  return(
    <div className="RequirementsBodyControls">
    {props.prevBtn ?(
      <button
        className="PrevBtn"
        onClick={() => {
          navigate(`/requirements/${props.page - 1}`);
        }}
      >
        이전
      </button>
    ) : null }
    <button
      className="NextBtn"
      onClick={() => {
        navigate(`/requirements/${props.page + 1}`);
      }}
    >
      다음
    </button>
  </div>
  )
}
export default RequirementControl;