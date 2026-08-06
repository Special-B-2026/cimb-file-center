document.addEventListener("DOMContentLoaded", () => {
  const totalCountEl = document.getElementById("totalCount");
  const pdfCountEl = document.getElementById("pdfCount");
  const excelCountEl = document.getElementById("excelCount");

  const pdfSection = document.getElementById("pdfSection");
  const excelSection = document.getElementById("excelSection");

  const pdfSectionCountEl = document.getElementById("pdfSectionCount");
  const excelSectionCountEl = document.getElementById("excelSectionCount");

  const pdfGrid = document.getElementById("pdfGrid");
  const excelGrid = document.getElementById("excelGrid");

  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const emptyState = document.getElementById("emptyState");

  const allFiles = Array.isArray(FILES) ? FILES : [];

  let currentFilter = "all";
  let currentKeyword = "";

  function updateTopCounters() {
    const pdfTotal = allFiles.filter(file => file.type === "pdf").length;
    const excelTotal = allFiles.filter(file => file.type === "excel").length;

    totalCountEl.textContent = allFiles.length;
    pdfCountEl.textContent = pdfTotal;
    excelCountEl.textContent = excelTotal;
  }

  function createCard(file) {
    const card = document.createElement("article");
    card.className = `file-card ${file.type === "pdf" ? "is-pdf" : "is-excel"}`;

    const iconClass = file.type === "pdf" ? "file-icon-pdf" : "file-icon-excel";
    const badgeClass = file.type === "pdf" ? "file-badge-pdf" : "file-badge-excel";
    const typeLabel = file.type === "pdf" ? "PDF" : "Excel";

    const title = file.title || file.fileName;
    const category = file.category || "เอกสารทั่วไป";

    card.innerHTML = `
      <div class="file-card-head">
        <div class="file-icon ${iconClass}">${typeLabel}</div>
        <span class="file-badge ${badgeClass}">${typeLabel}</span>
      </div>

      <div class="file-info">
        <h3 class="file-title">${title}</h3>
        <p class="file-name">${file.fileName}</p>
        <p class="file-category">หมวด: ${category}</p>
      </div>

      <div class="file-actions">
        <a href="files/${file.fileName}" class="download-btn" download>
          ดาวน์โหลดไฟล์
        </a>
      </div>
    `;

    return card;
  }

  function normalizeText(value) {
    return String(value || "").toLowerCase().trim();
  }

  function getFilteredFiles() {
    return allFiles.filter(file => {
      const matchesType =
        currentFilter === "all" ? true : file.type === currentFilter;

      const searchableText = [
        file.title,
        file.fileName,
        file.category,
        file.type
      ].join(" ").toLowerCase();

      const matchesKeyword = searchableText.includes(normalizeText(currentKeyword));

      return matchesType && matchesKeyword;
    });
  }

  function render() {
    const filteredFiles = getFilteredFiles();
    const pdfFiles = filteredFiles.filter(file => file.type === "pdf");
    const excelFiles = filteredFiles.filter(file => file.type === "excel");

    pdfGrid.innerHTML = "";
    excelGrid.innerHTML = "";

    pdfFiles.forEach(file => pdfGrid.appendChild(createCard(file)));
    excelFiles.forEach(file => excelGrid.appendChild(createCard(file)));

    pdfSectionCountEl.textContent = `${pdfFiles.length} ไฟล์`;
    excelSectionCountEl.textContent = `${excelFiles.length} ไฟล์`;

    if (currentFilter === "pdf") {
      pdfSection.classList.remove("hidden");
      excelSection.classList.add("hidden");
    } else if (currentFilter === "excel") {
      excelSection.classList.remove("hidden");
      pdfSection.classList.add("hidden");
    } else {
      if (pdfFiles.length > 0) {
        pdfSection.classList.remove("hidden");
      } else {
        pdfSection.classList.add("hidden");
      }

      if (excelFiles.length > 0) {
        excelSection.classList.remove("hidden");
      } else {
        excelSection.classList.add("hidden");
      }
    }

    if (filteredFiles.length === 0) {
      emptyState.classList.remove("hidden");
      pdfSection.classList.add("hidden");
      excelSection.classList.add("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  }

  searchInput.addEventListener("input", (e) => {
    currentKeyword = e.target.value || "";
    render();
  });

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      render();
    });
  });

  updateTopCounters();
  render();
});