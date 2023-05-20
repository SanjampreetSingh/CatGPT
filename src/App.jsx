import ChatBar from "./components/ChatBar/ChatBar";
import ExampleBar from "./components/ExampleBar/ExampleBar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <main className="relative z-0 flex h-full w-full overflow-hidden">
      <Sidebar />
      <div className="relative flex h-full max-w-full flex-1 overflow-hidden">
        <div className="flex h-full max-w-full flex-1 flex-col">
          <main className="transition-width relative flex h-full w-full flex-1 flex-col items-stretch overflow-hidden">
            <ExampleBar />
            <ChatBar />
          </main>
        </div>
      </div>
    </main>
  );
}
