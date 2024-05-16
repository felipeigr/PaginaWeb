var onloadCallback = function() {
  grecaptcha.render('viewRecaptcha', {
      'sitekey' : '6LdbTNspAAAAANvjSRFF9j-Ratm3HtUNF8GLH9WK',
      'theme': 'dark'
  });
};

function submitForm() {
  if (grecaptcha.getResponse() == '') {
      alert('Por favor, complete el captcha.');
  } else {
      if (validateData()) {
          alert('Datos validados, enviando formulario...');
          // enviar el formulario utilizando AJAX o cualquier otro método
      }
  }
}