$('#btn-enviar').click(
      function(){
        if($("#email").val().trim() == "") {
          alert("Tu email no puede estar vacio");
          $("#email").focus();
          return 0;
        } else if(!$("#email")[0].checkValidity()) {
          alert("Escribe un email valido");
          $("#correo").focus();
          return 0;
        } else if($("#informacion").val().trim() == ""){
          alert("Tu mensaje no puede estar vacio");
          $("#informacion").focus();
          return 0;
        }

          document.getElementById("#Contactanos").submit();
      }
    )