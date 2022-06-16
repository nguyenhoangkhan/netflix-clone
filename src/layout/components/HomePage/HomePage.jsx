import classNames from "classnames/bind";
import Header from "../Header";
import SectionBanner from "../SectionBanner";
import styles from "./HomePage.module.scss";
import Images from "../../../assets/images";

const cx = classNames.bind(styles);
const HomePage = () => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <SectionBanner image={Images.sectionBanner} />
    </div>
  );
};

export default HomePage;
