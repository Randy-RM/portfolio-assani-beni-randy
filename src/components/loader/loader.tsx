import { useTranslation } from "react-i18next";

const Loader = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <main className="starting-loader-page font-secondary-color">
      <div>
        <span className="starting-loader"></span>
      </div>
      <p className="text-center font-w-extra-thin font-big-hero">
        {t(`greetings`)}
      </p>
    </main>
  );
};

export default Loader;
