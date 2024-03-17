import SwitchLanguage from "./switches/languages/SwitchLanguage";

export const Header = () => {
  return (
    <div className={`px-6`}>
      <header className={`flex justify-between items-center px-32`}>
        <SwitchLanguage />
      </header>
    </div>
  );
};
