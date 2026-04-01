import HomeBanner from "./ui_components/HomeBanner/HomeBanner";
import { About } from "./ui_components/about/About";
import Stats from "./ui_components/statics/statics";
import Mandate from "./ui_components/mandate/Mandate";
import ProjectMini from "./ui_components/Projectmini/project";
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <About />
      <Stats />
      <Mandate />
      <ProjectMini />
    </div>
  );
}
