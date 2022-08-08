mostrar1 = function() {
    Swal.fire(
        'Olá!',
        'Como vc está hj?',
        'question'
    )
}

mostrar2 = function() {
    Swal.fire({
        title: 'Deletar?',
        text: "Certeza que deseja deletar este item",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Excluído!',
            'Seu arquivo foi excluido',
            'success'
          )
        } else {
            Swal.fire(
                'Cancelado!',
                'Exclusão Cancelada',
                'error'
            )
        }
      })
}