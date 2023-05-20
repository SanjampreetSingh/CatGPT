import Cards from "./components/Cards/Cards";
import Sidebar from "./components/Sidebar/Sidebar";
import Title from "./components/Title/Title";

export default function App() {
  return (
    <main className="relative z-0 flex h-full w-full overflow-hidden">
      <Sidebar />
      <div className="relative flex h-full max-w-full flex-1 overflow-hidden">
        <div className="flex h-full max-w-full flex-1 flex-col">
          <div className="mx-auto w-full px-6 text-gray-800 dark:text-gray-100 md:flex md:h-full md:max-w-2xl md:flex-col lg:max-w-3xl">
            <Title />
            <Cards />
          </div>
        </div>
        <div className="h-32 md:h-48 flex-shrink-0"></div>
      </div>
    </main>
  );
}
