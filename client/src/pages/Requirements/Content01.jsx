import { useNavigate } from "react-router-dom";
import RequirementControl from "../../components/RequirementsControl/RequirementControl";

const Content01 = (props) => {
  const handleCategory = (key) => {
    props.setCategory((prevCategory) => ({
      ...prevCategory,
      [key]: !props.category[key],
    }));
  };
  const handleSubCategory = (key) => {
    props.setSubCategory((prevSubCategory) => ({
      ...prevSubCategory,
      [key]: !props.subCategory[key],
    }));
  };

  return (
    <div className="RequirementsBodyContents">
      <div className="RequirementsBodyContentsWrap">
        <div
          className="RequirementsBodyContentsBox"
          onClick={() => handleCategory("develop")}
        >
          <input
            type="checkbox"
            name="develop"
            checked={props.category.develop}
            onClick={() => handleCategory("develop")}
          />
          <p>개발</p>
        </div>
        <div
          className="RequirementsBodyContentsBox"
          onClick={() => handleCategory("design")}
        >
          <input
            type="checkbox"
            name="design"
            checked={props.category.design}
            onClick={() => handleCategory("design")}
          />
          <p>디자인</p>
        </div>
        <div
          className="RequirementsBodyContentsBox"
          onClick={() => handleCategory("planning")}
        >
          <input
            type="checkbox"
            name="planning"
            checked={props.category.planning}
            onClick={() => handleCategory("planning")}
          />
          <p>기획</p>
        </div>
      </div>
      {!props.category.develop &&
      !props.category.design &&
      !props.category.planning ? null : (
        <div className="RequirementsBodyContentsWrap">
          <div
            className={
              props.subCategory.web
                ? "RequirementsBodyContentsClick Clicked"
                : "RequirementsBodyContentsClick"
            }
            onClick={() => handleSubCategory("web")}
          >
            웹
          </div>
          <div
            className={
              props.subCategory.application
                ? "RequirementsBodyContentsClick Clicked"
                : "RequirementsBodyContentsClick"
            }
            onClick={() => handleSubCategory("application")}
          >
            어플리케이션
          </div>
          <div
            className={
              props.subCategory.software
                ? "RequirementsBodyContentsClick Clicked"
                : "RequirementsBodyContentsClick"
            }
            onClick={() => handleSubCategory("software")}
          >
            소프트웨어
          </div>
          <div
            className={
              props.subCategory.publishing
                ? "RequirementsBodyContentsClick Clicked"
                : "RequirementsBodyContentsClick"
            }
            onClick={() => handleSubCategory("publishing")}
          >
            퍼블리싱
          </div>
          <div
            className={
              props.subCategory.wordpress
                ? "RequirementsBodyContentsClick Clicked"
                : "RequirementsBodyContentsClick"
            }
            onClick={() => handleSubCategory("wordpress")}
          >
            워드프레스
          </div>
          <div
            className={
              props.subCategory.embedded
                ? "RequirementsBodyContentsClick Clicked"
                : "RequirementsBodyContentsClick"
            }
            onClick={() => handleSubCategory("embedded")}
          >
            임베디드
          </div>
          <div
            className={
              props.subCategory.game
                ? "RequirementsBodyContentsClick Clicked"
                : "RequirementsBodyContentsClick"
            }
            onClick={() => handleSubCategory("game")}
          >
            게임
          </div>
          <div
            className={
              props.subCategory.etc
                ? "RequirementsBodyContentsClick Clicked"
                : "RequirementsBodyContentsClick"
            }
            onClick={() => handleSubCategory("etc")}
          >
            기타
          </div>
        </div>
      )}

      <RequirementControl prevBtn={false} page={1} />
    </div>
  );
};
export default Content01;
