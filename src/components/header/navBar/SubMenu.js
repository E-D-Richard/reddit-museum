import { Link } from "react-router-dom";
import { genreNames } from "../../../utils/helperArrays";
import { navSubOptions } from "../../../utils/helperObjects";

const SubMenu = ({ option, isExpanded, index }) => {
  //replace blank spaces in genre names with underscores
  genreNames.forEach((genreName, i) => {
    genreNames[i] = genreName.replace(/_/g, " ");
  });
  


  return (
    <ul className={`sub-menu ${isExpanded[index] ? "expanded" : "collapsed"}`}>
      {navSubOptions[option].map((subOption, i) => {
        //if typeof subOption = object then we can infer that this is a sub-sub-menu since all regular subOptions are strings
        return typeof subOption === "object" ? (
          <li className="sub-option sub-sub-menu" key={"sub-option-" + i}>
            {Object.keys(subOption)}
            <ul className="sub-sub-options">
              {subOption[Object.keys(subOption)].map((subSubOption, index) => (
                <li key={"sso-" + index} className={"sub-sub-option"}>
                  {subSubOption}
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li
            className="sub-option"
            key={"sub-option-" + i}
            
          >
            <Link to={option+"/"+subOption}>{subOption}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SubMenu;
