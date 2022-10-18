import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function PaymentModal({isOpen, setIsOpen, price}) {
  
  function closeModal() {
    setIsOpen(false)
  }

  const launchRazorPay = () => {
    let options = {
      key: "rzp_test_WiFnZnvrlublX7",
      amount: price * 100,
      currency: "INR",
      name: "Tara Movie House",
      description: "Movie Purchase or Rental",
      image:
        "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
      handler: () => {
        setIsOpen(false);
        alert("Payment Done");
      },
      theme: { color: "#c4242d" },
    };

    let razorPay = new window.Razorpay(options);
    razorPay.open();
  };


  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   Please make a payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Hello Please click on the below button to make a payment.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                      onClick={launchRazorPay}
                    >
                       Pay ₹{price}
                    </button>

                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                      onClick={closeModal}
                    >
                       Cancel Payment
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
