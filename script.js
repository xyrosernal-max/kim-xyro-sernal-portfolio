(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      menuToggle.setAttribute("aria-label", open ? "Open navigation menu" : "Close navigation menu");
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    }));
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const projects = {
    kit: {
      type: "PRACTICE PROJECT · ADMINISTRATION",
      title: "Virtual Assistant Sample Kit",
      description: "A starter collection concept for presenting administrative support skills in a clear, client-friendly way.",
      objective: "Show examples of structured information, professional documentation, and organized digital materials.",
      tools: "Google Workspace, Google Docs, Google Drive (sample tools; adjust to match the completed work).",
      approach: "Prepare a sample document, a simple research summary, a task checklist, and a folder structure. Review formatting and make filenames easy to understand.",
      output: "A small, organized collection of demonstration materials that can be replaced with finished samples."
    },
    ai: {
      type: "DEMONSTRATION · AI PRODUCTIVITY",
      title: "AI-Assisted Research Workflow",
      description: "A demonstration concept for using AI as a drafting and organizing aid while keeping human review at the center.",
      objective: "Illustrate a responsible workflow from research question to checked, organized summary.",
      tools: "ChatGPT or another generative AI tool, browser research, and a document editor.",
      approach: "Define the question, gather credible source material, use a structured prompt for a first draft, verify claims against sources, and edit the final summary.",
      output: "A concise, source-checked summary with clear notes about what was verified and what still needs confirmation."
    },
    sheet: {
      type: "PRACTICE PROJECT · DATA",
      title: "Spreadsheet Organization",
      description: "A sample spreadsheet layout designed to make records easier to scan and basic errors easier to notice.",
      objective: "Demonstrate consistent column structure, readable formatting, and simple quality checks.",
      tools: "Google Sheets or Microsoft Excel.",
      approach: "Create clear headers, standardize dates and categories, use filters where useful, and add basic validation or duplicate checks.",
      output: "A tidy practice sheet with a consistent structure. Use fictional sample data only."
    },
    checklist: {
      type: "SAMPLE PROJECT · WORKFLOW",
      title: "Administrative Checklist",
      description: "A reusable checklist concept for clarifying a task and reviewing work before delivery.",
      objective: "Reduce missed steps by making the task sequence and completion status visible.",
      tools: "Google Docs, Notion, Trello, or a spreadsheet.",
      approach: "List the required steps, define what completion means, add a review stage, and keep the checklist easy to reuse.",
      output: "A lightweight template that can be adapted to a client's process after requirements are confirmed."
    }
  };
  const dialog = document.querySelector("#project-dialog");
  if (dialog) {
    const close = dialog.querySelector(".dialog-close");
    document.querySelectorAll(".project-open").forEach(button => {
      button.addEventListener("click", () => {
        const item = projects[button.dataset.project];
        if (!item) return;
        document.querySelector("#dialog-type").textContent = item.type;
        document.querySelector("#dialog-title").textContent = item.title;
        document.querySelector("#dialog-description").textContent = item.description;
        document.querySelector("#dialog-objective").textContent = item.objective;
        document.querySelector("#dialog-tools").textContent = item.tools;
        document.querySelector("#dialog-approach").textContent = item.approach;
        document.querySelector("#dialog-output").textContent = item.output;
        dialog.showModal();
      });
    });
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent(data.get("subject"));
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
      );
      const note = document.querySelector("#form-note");
      if (note) note.textContent = "Your email app should open with your message prepared. Review it and press Send in your email app.";
      window.location.href = `mailto:kimxyrosernal@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();