document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Reserva enviada correctamente. Nos pondremos en contacto pronto.");
      form.reset();
    });
  }
});
