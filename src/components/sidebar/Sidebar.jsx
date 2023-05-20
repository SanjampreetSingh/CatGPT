export default function Sidebar() {
  return (
    <div className="dark h-screen flex-shrink-0 overflow-x-hidden bg-[#202123]">
      <div className="h-full w-[260px]">
        <div className="flex h-full min-h-0 flex-col ">
          <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
            <nav
              className="flex h-full w-full flex-col p-2"
              aria-label="Chat history"
            >
              <a className="mb-1 flex flex-shrink-0 cursor-pointer items-center gap-3 rounded-md border border-white/20 px-3 py-3 text-sm text-white transition-colors duration-200 hover:bg-gray-500/10">
                New chat
              </a>
              <div className="flex-1 flex-col overflow-y-auto transition-opacity duration-500">
                <div className="flex flex-col gap-2 pb-2 text-sm text-gray-100">
                  <div>
                    <span>
                      <div
                        className="relative"
                        style={{ height: "auto", opacity: 1 }}
                      >
                        <div
                          className="sticky top-0 z-[16]"
                          style={{ opacity: 1 }}
                        >
                          <h3 className="h-9 overflow-hidden text-ellipsis break-all  px-3 pb-2 pt-3 text-xs font-medium text-gray-500">
                            Your chats
                          </h3>
                        </div>
                        <ol>
                          <li
                            className="relative z-[15]"
                            style={{ opacity: 1, height: "auto" }}
                          >
                            <a className="group relative flex cursor-pointer items-center gap-3 break-all rounded-md px-3  py-3 hover:bg-[#2A2B32] hover:pr-4">
                              <div className="relative max-h-5 flex-1 overflow-hidden text-ellipsis break-all">
                                Chat title
                                <div className="absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]"></div>
                              </div>
                            </a>
                          </li>
                        </ol>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
