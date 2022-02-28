import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Transition, Dialog } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/outline'

export default function Modal() {
  const [open, setOpen] = useRecoilState(modalState)
  const filePickerRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const captionRef = useRef(null)

  const addImageToPost = (e) => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex min-h-[800px] items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:min-h-screen sm:p-0 ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* this element is to trick the browser to center the Modal contents */}
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-ion duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="pacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-5 pt-4 
            text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle"
            >
              <div>
                {selectedFile ? (
                  <img
                    className="w-full cursor-pointer  object-contain"
                    src={selectedFile}
                    onClick={() => setSelectedFile(null)}
                    alt=""
                  />
                ) : (
                  <div
                    className="mx-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-red-100"
                    //Simulating the click on hidden input field when click on Camera Icon
                    onClick={() => filePickerRef.current.click()}
                  >
                    <CameraIcon
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                    {/* {console.log(selectedFile)} */}
                  </div>
                )}

                <div className="mt-3 text-center sm:mt-5 ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Upload a Photo
                  </Dialog.Title>

                  <div>
                    <input
                      type="file"
                      // Using UseRef to reference this input
                      ref={filePickerRef}
                      hidden
                      onChange={addImageToPost}
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      ref={captionRef}
                      type="text"
                      className="w-full border-none text-center focus:ring-0"
                      placeholder="please enter a caption..."
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600
                 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2
                 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 hover:disabled:bg-gray-300 sm:text-sm "
                >
                  Upload Post
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
