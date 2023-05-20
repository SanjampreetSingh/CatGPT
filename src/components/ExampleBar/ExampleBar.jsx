import Cards from "../Cards/Cards";
import Title from "../Title/Title";

export default function ExampleBar() {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col text-sm ">
        <div className="mx-auto w-full px-6 text-gray-800 dark:text-gray-100 md:flex md:h-full md:max-w-2xl md:flex-col lg:max-w-3xl">
          <Title />
          <Cards />
        </div>
        <div className="h-32 flex-shrink-0 md:h-48"></div>
      </div>
    </div>
  );
}
