// "about" lives inside Hero's pinned scroll-driven reveal (clip-path iris).
// Its on-screen position stays fixed while the section is pinned, so
// scrollIntoView can't reach it directly — it would just snap/clip the
// animation mid-way. Instead we scroll to where the pin releases, landing
// right after the reveal has fully played.
export function scrollToSection(id: string) {
  if (id === "contacto") {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    return;
  }

  if (id === "about") {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      const targetY =
        window.scrollY + rect.top + rect.height - window.innerHeight;
      window.scrollTo({ top: targetY, behavior: "smooth" });
      return;
    }
  }

  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
