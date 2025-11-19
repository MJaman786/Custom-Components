const acordian = document.querySelectorAll(".acordian");

acordian.forEach((acordian) => {
  const acordianHead = acordian.querySelector(".acordian-head");
  const addIcon = acordian.querySelector(".add-icon");
  const acordianItems = acordian.querySelector(".acordian-items");
  const items = acordian.querySelector(".items");
  const scrolHeight = acordianItems.scrollHeight;

  let isdrop = false;
  acordianHead.addEventListener("click", () => {
    if (isdrop) {
      acordianItems.style.maxHeight = 0 + "px";
      addIcon.style.transform = "rotate(0deg)";
    //   acordianHead.style.borderBottomLeftRadius = '0px';
    //   acordianHead.style.borderBottomRightRadius = '0px';
      isdrop = false;
    } else {
      acordianItems.style.maxHeight = scrolHeight + "px";
    //   acordianHead.style.borderBottomLeftRadius = '0px';
    //   acordianHead.style.borderBottomRightRadius = '0px';
      addIcon.style.transform = "rotate(90deg)";
      isdrop = true;
    }
  });
});

// addIcon.innerHTML = ""
