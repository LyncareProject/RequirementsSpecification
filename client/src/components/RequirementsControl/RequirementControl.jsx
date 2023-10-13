import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";

const RequirementControl = (props) => {
  const page = useSelector((state) => state.requirementsSlice.value.page);
  const dispatch = useDispatch();
  console.log(props.nextBtn)
  return (
    <div className="RequirementsBodyControls">
      {page === 1 ? null : (
        <button
          className="PrevBtn"
          onClick={async () => {
            await dispatch(setting({ page: props.page - 1 }));
          }}
        >
          이전
        </button>
      )}
      {page === 7 ? (
        <button className="NextBtn">완료</button>
      ) : (
        <button
          className={ props.nextBtn ? "NextBtn" : "NextBtn InactiveBtn"}
          disabled={ !props.nextBtn }
          onClick={async () => {
            await dispatch(setting({ page: props.page + 1 }));
          }}
        >
          다음
        </button>
      )}
    </div>
  );
};
export default RequirementControl;
