import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function NutriScoreInfo({isOpen, setIsOpen}) {

  function closeModal() {
    setIsOpen(false)
  }

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
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Nutri-Score Info
                  </Dialog.Title>
                  <div className="mt-2">
                    <h3 className='mb-3'>Ce este Nutri-Score?</h3>
                    <p className="text-sm text-gray-500">
                    O echipă de cercetători francezi din domeniul alimentației publice a propus în anul 2016 o formulă de etichetare accesibilă, care să țină cont de necesitatea consumatorilor de face alegeri alimentare mai informate. Așa a apărut eticheta Nutri-Score, deja implementată cu succes în Franța încă din anul 2017. Mai exact, Nutri-Score este un sistem independent de etichetare care arată calitatea nutrițională a produselor, folosind un cod de culori de la verde la roșu și o grilă de la A la E. Nutri-Score se calculează pe baza informațiilor nutriționale ale alimentelor, per 100 de grame. Marcajul verde, alături de literele A și B indică faptul că alimentul ar trebui consumat mai des sau într-o cantitate mai mare deoarce are un aport crescut de nutrienți esențiali, iar marcajul roșu alături de literele D și E semnalează un produs care conține o cantitate mai mare de ingrediente care trebuie evitate în alimentația zilnică și consumate cu moderație (grăsimile, zahărul, sarea). Produsele marcate cu galben și litera C se află într-o categorie neutră, dar și acestea ar trebui consumate cu moderație. 
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
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