const loadComponent = async (id, filePath) => {
  try {
    const response = await fetch(filePath);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error(`Error al cargar ${filePath}:`, error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "components/header/header.html");
  loadComponent("banner", "components/banner/banner.html");
  loadComponent("gallery", "components/gallery/gallery.html");
  loadComponent("testimonials", "components/testimonials/testimonials.html");
  loadComponent("form", "components/form/form.html");
  loadComponent("about", "components/about/about.html");
  loadComponent("contact", "components/contact/contact.html");
  loadComponent("footer", "components/footer/footer.html");
});
