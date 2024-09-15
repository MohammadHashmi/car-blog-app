import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

function submitArticle() {
  console.log("Submitted");
}

export default function Submission() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="text-white font-bold bg-transparent border border-white ease-in duration-200 hover:bg-white hover:text-black py-2 px-4 rounded m-2"
        onClick={() => setIsOpen(true)}
      >
        Submit Article
      </button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-xl font-medium text-white">
                Name Your Article
              </DialogTitle>

              <div className="mt-4 flex justify-left">
                <input
                  className="rounded-md bg-gray-700 py-1.5 mr-2 text-white"
                  type="text"
                />
                <button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-md font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={() => {
                    submitArticle();
                    setIsOpen(false);
                  }}
                >
                  Submit Article
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
