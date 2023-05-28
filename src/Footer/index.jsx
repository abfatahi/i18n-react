import { DateTime } from "luxon";
import "./Footer.module.css";

const getGreetingTime = () => {
  const d = DateTime.now();
  const split_afternoon = 12;
  const split_evening = 17;
  const currentHour = parseFloat(d.toFormat("hh"));

  if (currentHour >= split_afternoon && currentHour <= split_evening)
    return "afternoon";
  if (currentHour >= split_evening) return "evening";
  return "morning";
};

const Footer = ({ t }) => {
  return (
    <footer>
      <div>
        {t("footer.date", {
          date: new Date(),
          context: getGreetingTime(),
        })}
      </div>
    </footer>
  );
};

export default Footer;
