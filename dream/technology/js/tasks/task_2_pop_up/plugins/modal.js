function _createModal(options) {
   const modal = document.createElement("div")
   modal.classList.add('mmodal')
   modal.insertAdjacentHTML("afterbegin", `
      <div class="modal-overlay">
         <div class="modal-window">
            <div class="modal-header">
               <span>
                  Привет
               </span>
               <span class="modal-close">
               &times;
               </span>
            </div>
            <div class="modal-content">
               <span>
                  Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
               </span>
            </div>
            <div class="modal-footer">
               <button>Ok</button>
               <button>Cancel</button>
            </div>
         </div>
      </div>
   `);
   return modal;
}

$.modal = function (options) {
   const $modal = _createModal(options)

   return {
      open() { },
      close() { },
      destroy() { }
   }
}