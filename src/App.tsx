import { Header } from "./components/header/Header";

export const App = () => {
  return (
    <div className="bg-gradient-to-b from-[var(--bg-linear-1)] dark:from-[var(--dark-bg-linear-1)] to-[var(--bg-linear-2)] dark:to-[var(--dark-bg-linear-2)]">
      <Header />
    </div>
  );
};
