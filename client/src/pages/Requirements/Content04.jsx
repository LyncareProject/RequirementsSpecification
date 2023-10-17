import { useNavigate } from "react-router-dom";
import RequirementControl from "../../components/RequirementsControl/RequirementControl";
import { useDispatch, useSelector } from "react-redux";
import { setting } from "../../redux/requirements.slice";
import { useState } from "react";

const Content04 = (props) => {
  const requirements = useSelector((state) => state.requirementsSlice.value);
  const [isRadioChecked, setIsRadioChecked] = useState("");
  const { budget, startDate, progressPeriod } = requirements;

  const dispatch = useDispatch();

  const handleNextBtn = () => {
    if (budget !== null && startDate !== null && progressPeriod !== null) {
      return true;
    }
    return false;
  };

  return (
    <div className="RequirementsBodyContents">
      <div className="RequirementsBodyDesc">
        <h3>지출 가능 예산 *</h3>
        <p>프로젝트에 지출 가능한 예산을 입력해 주세요.</p>
        <input
          type="text"
          value={budget}
          onChange={(e) => dispatch(setting({ budget: e.target.value }))}
        />
        <p>
          예상 결제 금액 :{" "}
          {!budget ? null : Math.floor(budget * 1.1).toLocaleString()} 원
          (부가가치세 10% 포함)
        </p>
        <div>
          <input type="checkbox" />
          <label htmlFor="">입력한 예산의 조율이 가능합니다.</label>
        </div>
      </div>
      <div className="RequirementsBodyDesc">
        <h3>예상 시작일 *</h3>
        <p>
          파트너가 프로젝트에 착수하는 날짜입니다. <br />
          해당 날짜에 프로젝트 시작이 가능한 파트너들이 지원하게 됩니다.
        </p>
        <div>
          <input
            type="radio"
            name="radio"
            onChange={() => setIsRadioChecked("custom")}
          />
          <input
            type="text"
            placeholder="날짜 선택"
            disabled={isRadioChecked === "custom" ? false : true}
            value={startDate}
            onChange={(e) => dispatch(setting({ startDate: e.target.value }))}
          />
        </div>
        <div>
          <input
            type="radio"
            name="radio"
            id="immediately"
            onChange={() => {
              setIsRadioChecked("immediately");
              dispatch(
                setting({
                  startDate: "계약 체결 이후, 즉시 시작하길 희망합니다.",
                })
              );
            }}
          />
          <label htmlFor="immediately">
            계약 체결 이후, 즉시 시작하길 희망합니다.
          </label>
        </div>
      </div>
      <div className="RequirementsBodyDesc">
        <h3>예상 진행 기간 *</h3>
        <p>프로젝트 진행 기간을 입력해 주세요.</p>
        <div>
          <input
            type="text"
            placeholder="일"
            value={progressPeriod}
            onChange={(e) =>
              dispatch(setting({ progressPeriod: e.target.value }))
            }
          />
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="">입력한 진행 기간의 조율이 가능합니다.</label>
        </div>
      </div>
      <RequirementControl prevBtn={true} nextBtn={handleNextBtn()} page={4} />
    </div>
  );
};
export default Content04;
