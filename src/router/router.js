import { Switch, Route } from "react-router-dom";
import { Home } from "../Container/Content/HomeContent";
import { KnowMe } from "../Container/Content/KnowMeContent";
import { MySkill } from "../Container/Content/MySkillContent";
import { Education } from "../Container/Content/EducationContent";
import { MyProject } from "../Container/Content/MyProject";
import { Notice } from "../Container/Content/NoticeContent";
import { Contact } from "../Container/Content/ContactContent";

export function router() {
  return (
    <div className="">
      <div className="">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/know-me" component={KnowMe} />
          <Route path="/my-skill" component={MySkill} />
          <Route path="/my-education" component={Education} />
          <Route path="/my-project" component={MyProject} />
          <Route path="/my-notice" component={Notice} />
          <Route path="/my-contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
}
