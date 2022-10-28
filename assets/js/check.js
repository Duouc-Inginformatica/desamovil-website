window.colordet = async () => {
    const { value: accept } = await Swal.fire({
        title: 'Generar Descaga',
        input: 'checkbox',
        inputValue: 0,
        inputPlaceholder:
          'Estoy de acuerdo del <a href="tags.html">Terminos y Condiciones</a>',
        confirmButtonText:
          'Continuar <i class="fa fa-arrow-right"></i>',
        confirmButtonColor: '#FFA500',
        inputValidator: (result) => {
          return !result && 'Necesita aceptar los <a href="tags.html">Terminos y Condiciones</a>'
        }
      })
      
      if (accept) {
        Swal.fire({
        title: 'Escaneé el codigo QR con su telefono para comenzar la descarga o click <a href="tags.html">AQUI</a>',
        imageUrl: 'assets/img/prueba.png',        
        imageHeight: 240, 
        imageWidth: 240,       
        imageClass:'img-responsive rounded-circle',        
        animation: false,
        confirmButtonColor: '#FFA500',
        })
      }
    
  }



  window.update = async () => {
    Swal.fire({
      position: 'top-end',
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'Puedes ver las Actualizacion</b>, ' +
        '<a href="tags.html">Aqui</a> ' +
        '',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="ri-thumb-up-line"></i>',
      // confirmButtonAriaLabel: 'Ok!',
      cancelButtonText:
        '<i class="ri-thumb-down-line"></i>',
      // cancelButtonAriaLabel: 'Cerrar'
    })
    
  }