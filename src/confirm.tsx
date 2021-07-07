import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface Props {
    title?: string;
    description?: string;
    okText?: string;
    canceltext?: string;
    open?: boolean;
    onClose: (open:false) => void;
}

const Confirm: React.FC<Props> = (props) => {

  
    
  return (
      <>
        
      <Transition.Root show={props.open} as={Fragment}>
        <Dialog open={props.open} onClose={props.onClose}>
          
          <Transition.Child 
          as={Fragment}
          enter="transition-transform duration-700"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave="transition-transform duration-500"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
          >
            <div className="fixed top-20 flex  flex-col h-96 left-1/3  z-20 p-5 transform bg-white w-96 ">
              <button onClick={()=>props.onClose(false)} className="absolute top-0 right-0"> <img src="https://img.icons8.com/material-outlined/24/000000/multiply--v1.png" alt="cross"/></button>
              <div className=" self-center border-2 rounded-full  border-red-600">
              <img src="https://img.icons8.com/material-sharp/90/fa314a/multiply.png" alt="cross1"/>   
              </div> 
              <h1 className="text-xl w-full flex justify-center mt-5">{props.title}</h1>
              <p className="text-gray-600 w-full flex justify-center text-center text-sm mt-4">{props.description}</p>
              <div className="w-full flex justify-center mt-8">
                <button onClick={()=>props.onClose(false)} className="py-1 rounded-sm w-40 text-center px-8 mx-2 text-white justify-center hover:bg-gray-700 bg-gray-400">{props.okText}</button>
                <button onClick={()=>props.onClose(false)} className="py-1 rounded-sm w-40 text-center px-8 mx-2 text-white justify-center hover:bg-red-700 bg-red-500">{props.canceltext}</button>
              </div>
            </div>

          </Transition.Child>
          <Transition.Child 
          as={Fragment}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          entered="opacity-50"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 z-10 bg-black"> 
            </Dialog.Overlay>

          </Transition.Child>
        </Dialog>
      </Transition.Root>
      </>
  );
};

Confirm.defaultProps = {
    open: false,
    title: "Are You Sure ?",
    description: "Do you really want to delete these records? This process cannot be undone.",
    okText: "Accept",
    canceltext: "Cancel",
}

export default Confirm;