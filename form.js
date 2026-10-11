(function () {
  var form = document.getElementById("booking");
  if (!form) return;

  var messages = {
    nb: {
      required: "Fyll ut dette feltet.",
      email: "Skriv inn en gyldig e-postadresse.",
      phone: "Skriv inn et gyldig telefonnummer.",
      done: "Takk! Dette er en demo, så skjemaet sender ingen data. På en ekte nettside ville forespørselen gått rett til verkstedets e-post."
    },
    en: {
      required: "Please fill in this field.",
      email: "Please enter a valid email address.",
      phone: "Please enter a valid phone number.",
      done: "Thank you! This is a demo, so the form does not send any data. On a real website the request would go straight to the shop's inbox."
    }
  };
  var t = messages[form.dataset.lang] || messages.en;
  var status = form.querySelector(".form-status");

  function check(field) {
    var error = field.parentElement.querySelector(".field-error");
    var value = field.value.trim();
    var text = "";

    if (field.required && !value) {
      text = t.required;
    } else if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      text = t.email;
    } else if (field.type === "tel" && value && !/^[+\d][\d\s-]{6,}$/.test(value)) {
      text = t.phone;
    }

    if (error) error.textContent = text;
    field.setAttribute("aria-invalid", text ? "true" : "false");
    return !text;
  }

  var fields = form.querySelectorAll("input, textarea");

  fields.forEach(function (field) {
    field.addEventListener("blur", function () {
      check(field);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstInvalid = null;

    fields.forEach(function (field) {
      if (!check(field) && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    status.textContent = t.done;
    status.classList.add("show");
    status.focus();
    form.reset();
  });
})();
