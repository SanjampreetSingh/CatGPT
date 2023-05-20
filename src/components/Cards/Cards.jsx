export default function Cards() {
  return (
    <div className="items-start gap-3.5 text-center md:flex">
      <div className="mb-8 flex flex-1 flex-col gap-3.5 md:mb-auto">
        <h2 className="m-auto flex items-center gap-3 text-lg font-normal md:flex-col md:gap-2">
          Examples
        </h2>
        <ul className="m-auto flex w-full flex-col gap-3.5 sm:max-w-md">
          <button className="w-full rounded-md bg-gray-50 p-3 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-gray-900">
            &quot;Explain quantum computing in simple terms&quot; →
          </button>
          <button className="w-full rounded-md bg-gray-50 p-3 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-gray-900">
            &quot;Got any creative ideas for a 10 year old&apos;s birthday?&quot; →
          </button>
          <button className="w-full rounded-md bg-gray-50 p-3 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-gray-900">
            &quot;How do I make an HTTP request in JavaScript?&quot; →
          </button>
        </ul>
      </div>
      <div className="mb-8 flex flex-1 flex-col gap-3.5 md:mb-auto">
        <h2 className="m-auto flex items-center gap-3 text-lg font-normal md:flex-col md:gap-2">
          Capabilities
        </h2>
        <ul className="m-auto flex w-full flex-col gap-3.5 sm:max-w-md">
          <li className="w-full rounded-md bg-gray-50 p-3 dark:bg-white/5">
            Remembers what user said earlier in the conversation
          </li>
          <li className="w-full rounded-md bg-gray-50 p-3 dark:bg-white/5">
            Allows user to provide follow-up corrections
          </li>
          <li className="w-full rounded-md bg-gray-50 p-3 dark:bg-white/5">
            Trained to decline inappropriate requests
          </li>
        </ul>
      </div>
      <div className="mb-8 flex flex-1 flex-col gap-3.5 md:mb-auto">
        <h2 className="m-auto flex items-center gap-3 text-lg font-normal md:flex-col md:gap-2">
          Limitations
        </h2>
        <ul className="m-auto flex w-full flex-col gap-3.5 sm:max-w-md">
          <li className="w-full rounded-md bg-gray-50 p-3 dark:bg-white/5">
            May occasionally generate incorrect information
          </li>
          <li className="w-full rounded-md bg-gray-50 p-3 dark:bg-white/5">
            May occasionally produce harmful instructions or biased content
          </li>
          <li className="w-full rounded-md bg-gray-50 p-3 dark:bg-white/5">
            Limited knowledge of world and events after 2021
          </li>
        </ul>
      </div>
    </div>
  );
}
