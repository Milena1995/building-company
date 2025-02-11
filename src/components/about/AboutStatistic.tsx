import { Vertical, Horizontal } from "src/layout/layout";
import { H3Medium, H2lBold, StatisticValue, StatisticLabel } from "../Text";

import { ReactComponent as Location } from "src/assets/svg/Location.svg";
import { ReactComponent as House } from "src/assets/svg/House.svg";
import { ReactComponent as Colaboration } from "src/assets/svg/Colaboration.svg";

import style from "src/stylesheet/about/aboutPage.module.scss";
import { AllLogos } from "../AllLogos";

export const AboutStatistic = () => (
  <section id={style.about_statistics}>
    <Vertical className={style.stats_container}>
      <H3Medium id={style.stats_title}>Statistics</H3Medium>
      <H2lBold id={style.stats_subTitle}>Development in numbers</H2lBold>
      <Horizontal id={style.stats_number_container}>
        <Horizontal className={style.stats_content}>
          <div className={style.logo}>
            <Location />
          </div>
          <Vertical className={style.stats_number}>
            <StatisticValue> {">"} 200</StatisticValue>
            <StatisticLabel>Number</StatisticLabel>
          </Vertical>
        </Horizontal>
        <Horizontal
          className={`${style.stats_content} ${style.stats_number_border}`}
        >
          <div className={style.logo}>
            <House />
          </div>
          <Vertical className={style.stats_number}>
            <StatisticValue> {">"} 70</StatisticValue>
            <StatisticLabel>Number</StatisticLabel>
          </Vertical>
        </Horizontal>
        <Horizontal className={style.stats_content}>
          <div className={style.logo}>
            <Colaboration />
          </div>
          <Vertical className={style.stats_number}>
            <StatisticValue> {">"} 20</StatisticValue>
            <StatisticLabel>Number</StatisticLabel>
          </Vertical>
        </Horizontal>
      </Horizontal>
      <AllLogos />
    </Vertical>
  </section>
);
