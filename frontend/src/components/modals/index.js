import modalData from "../../modals.js";
import { destroyModal, useModals } from "../../utils";

export default function Modal() {
  const modals = useModals();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center text-black overflow-x-hidden overflow-y-auto h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50">
      <div className="relative w-full max-w-md px-4 h-full md:h-auto">
        <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
          {modals.map((modal, index) => {
            const m = modalData.find((m) => m.name == modal.name);
            console.log(m);

            return (
              <div
                key={index}
                className="hidden last:block bg-white shadow-lg rounded"
              >
                <m.element data={modal.data} close={destroyModal} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
