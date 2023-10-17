import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";
import { requirementsCompleted } from "../../service/requirements.service";


const RequirementControl = (props) => {
  const requirements = useSelector((state) => state.requirementsSlice.value);
  const page = useSelector((state) => state.requirementsSlice.value.page);


  const dispatch = useDispatch();
  const completeBtn = () => {
    requirementsCompleted(requirements);
  };
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
        <button
          className={props.nextBtn ? "NextBtn" : "NextBtn InactiveBtn"}
          disabled={!props.nextBtn}
          onClick={completeBtn}
        >
          완료
        </button>
      ) : (
        <button
          className={props.nextBtn ? "NextBtn" : "NextBtn InactiveBtn"}
          disabled={!props.nextBtn}
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
