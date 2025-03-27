document.addEventListener("DOMContentLoaded", () => {
  let currentTopic = "";
  let activeFilter = { key: "", value: "" }; // Tracks selected filter

  // === Show Topic Content ===
  function showAdaptation(topic) {
    currentTopic = topic;

    // Highlight selected topic
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const clicked = document.querySelector(`.nav-item[onclick*="${topic}"]`);
    if (clicked) clicked.classList.add('active');

    // Show original/base content with HTML rendering
    document.getElementById("originalTitle").textContent = titles[topic] || "";
    document.getElementById("originalText").innerHTML = adaptedMap[topic]?.base || "";

    // Adaptive box setup
    const adaptiveTitle = document.getElementById("adaptiveTitle");
    const adaptedText = document.getElementById("adaptedText");

    if (adaptiveTitle) {
      adaptiveTitle.style.display = "block";
      adaptiveTitle.style.color = "#FFA500";
      adaptiveTitle.textContent = "Adaptive Interpretation";
    }

    if (adaptedText) {
      adaptedText.innerHTML = "Choose a filter to adapt the meaning.";
    }

    // Reapply selected filter
    updateFromDropdown();

    // Animate original box
    document.getElementById("originalText").classList.add("fade-in");
    setTimeout(() => {
      document.getElementById("originalText").classList.remove("fade-in");
    }, 700);
  }

  // === Filter Change Logic ===
  function updateFromDropdown(changedId = null) {
    if (!currentTopic) return;

    const dropdowns = ["age", "emotion", "manipulation", "ideology"];
    const section = adaptedMap[currentTopic] || {};
    let selectedKey = "";

    // If a filter changed, store it and clear the others
    if (changedId) {
      activeFilter.key = changedId;
      activeFilter.value = document.getElementById(changedId).value;

      dropdowns.forEach(id => {
        if (id !== changedId) {
          document.getElementById(id).value = "";
        }
      });
    }

    // Try to use stored filter key if present
    if (activeFilter.value && section[activeFilter.value]) {
      selectedKey = activeFilter.value;
    }

    const adaptedText = document.getElementById("adaptedText");
    const adaptiveTitle = document.getElementById("adaptiveTitle");

    if (adaptedText) {
      if (selectedKey) {
        adaptedText.innerHTML = section[selectedKey];
      } else {
        adaptedText.innerHTML = "Choose a filter to adapt the meaning.";
      }

      adaptedText.classList.add("fade-in");
      setTimeout(() => adaptedText.classList.remove("fade-in"), 700);
    }

    if (adaptiveTitle) {
      adaptiveTitle.textContent = selectedKey
        ? (titles[currentTopic] || "Adaptive Interpretation")
        : "Adaptive Interpretation";
      adaptiveTitle.style.color = "#FFA500";
    }
  }

  // === Clear Filters ===
  function clearFilters() {
    document.querySelectorAll('.dropdown-group select').forEach(select => {
      select.value = "";
    });

    activeFilter = { key: "", value: "" };
    updateFromDropdown();
  }

  // === Expose Globally ===
  window.showAdaptation = showAdaptation;
  window.updateFromDropdown = updateFromDropdown;
  window.clearFilters = clearFilters;
});
