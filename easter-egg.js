(function () {
  const styles = {
    info: "color:#6a737d;font-weight:500",
    ok: "color:#2ea043;font-weight:500",
    warn: "color:#d4a72c;font-weight:500",
    hire: "color:#488aec;font-weight:700",
    dim: "color:#9ca3af",
  };

  console.log("%c[INFO]%c  Loading resume v2026.1.0", styles.info, styles.dim);
  console.log("%c[OK]%c   Skills: 17 modules loaded", styles.ok, styles.dim);
  console.log("%c[WARN]%c  Coffee level: low", styles.warn, styles.dim);
  console.log(
    "%c[HIRE]%c  Recruiter detected in DevTools ✓",
    styles.hire,
    styles.dim
  );
  console.log(
    "%c→%c darkissdark@gmail.com · github.com/darkissdark",
    styles.hire,
    styles.dim
  );

  const nameEl = document.getElementById("profile-name");
  const roleEl = document.getElementById("profile-role");

  if (nameEl && roleEl) {
    const defaultRole = roleEl.textContent.trim();
    const jokes = [
      "Fullstack Debugger",
      "Professional Tab Opener",
      "CSS Whisperer",
      "Blob Enthusiast",
    ];
    let resetTimer;

    nameEl.addEventListener("click", function () {
      if (resetTimer) {
        clearTimeout(resetTimer);
      }

      roleEl.textContent =
        jokes[Math.floor(Math.random() * jokes.length)];
      roleEl.classList.add("contact-info__sub-header--joke");

      resetTimer = setTimeout(function () {
        roleEl.textContent = defaultRole;
        roleEl.classList.remove("contact-info__sub-header--joke");
        resetTimer = null;
      }, 2500);
    });
  }
})();
