document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('.v72656_226');
  var submitButton = form.querySelector('.v72656_279');

  /* submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    var emailInput = form.querySelector('#emailInput');
    var passwordInput = form.querySelector('#passwordInput');
    var tovarInput = form.querySelector('#tovar');
    var adresInput = form.querySelector('#adres');
    var myInput = form.querySelector('#myInput');

    var email = emailInput.value;
    var password = passwordInput.value;
    var tovar = tovarInput.value;
    var adres = adresInput.value;
    var additionalInput = myInput.value;

    console.log('Email: ' + email);
    console.log('Password: ' + password);
    console.log('Наименование товара: ' + tovar);
    console.log('Адрес доставки: ' + adres);
    console.log('Дополнительные пожелания: ' + additionalInput);

    // Проверка данных формы
    if (email && password && tovar && adres) {
      showModal('Sucess.');
    } else {
      showModal('Fail.');
    } */
  });

  function showModal(message) {
    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <p>${message}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    var bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();

    modal.addEventListener('hidden.bs.modal', function() {
      modal.remove();
    });
  }
});