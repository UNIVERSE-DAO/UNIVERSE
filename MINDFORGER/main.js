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

    // Show original/base content
    document.getElementById("originalTitle").textContent = titles[topic] || "";
    document.getElementById("originalText").innerHTML = adaptedMap[topic]?.base || "";

    // Adaptive box setup
    const adaptiveTitle = document.getElementById("adaptiveTitle");
    const adaptedText = document.getElementById("adaptedText");

    if (adaptiveTitle) {
      adaptiveTitle.style.display = "block";
      adaptiveTitle.style.color = "#FFA500";
      adaptiveTitle.textContent = "Adaptive Perspective";
    }

    if (adaptedText) {
      adaptedText.innerHTML = "Choose a filter to modify the meaning.";
    }

    // Reapply previously selected filter
    if (activeFilter.key && activeFilter.value) {
      document.getElementById(activeFilter.key).value = activeFilter.value;
    }

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
  
    // Handle filter change and visual highlight
    if (changedId) {
      activeFilter.key = changedId;
      activeFilter.value = document.getElementById(changedId).value;
  
      // Clear other filters + remove their visual highlights
      dropdowns.forEach(id => {
        const el = document.getElementById(id);
        if (id !== changedId) {
          el.value = "";
          el.classList.remove("active-filter");
        }
      });
  
      // Add visual style to selected dropdown
      if (activeFilter.value) {
        document.getElementById(changedId).classList.add("active-filter");
      } else {
        document.getElementById(changedId).classList.remove("active-filter");
      }
    }
  
    // Reuse previously selected filter if still active
    if (activeFilter.value && section[activeFilter.value]) {
      selectedKey = activeFilter.value;
    }
  
    // Update adaptive content
    const adaptedText = document.getElementById("adaptedText");
    const adaptiveTitle = document.getElementById("adaptiveTitle");
  
    if (adaptedText) {
      adaptedText.innerHTML = selectedKey
        ? section[selectedKey]
        : "Choose a filter to adapt the meaning.";
  
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
  

  // === Expose to Global Scope ===
  window.showAdaptation = showAdaptation;
  window.updateFromDropdown = updateFromDropdown;
});
