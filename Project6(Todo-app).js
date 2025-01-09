document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const textInput = document.querySelector("input").value.trim();
    addTask(textInput);
    document.querySelector('input').value = '';
  });

  //this is a method to addThe listItems.
  function addTask(textInput) {
    const li = document.createElement("li");
    li.innerHTML = `
       <div class="checkboxWithPera">
            <input type="checkbox">
            <p contenteditable="true">${textInput}</p>
        </div>
        <div class="icons">
            <i class="fa-solid fa-trash delete"></i>
        </div>
        `;
    document.querySelector("ul").appendChild(li);
  }

  //It is provide the deleting feture for listItems.
  document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.closest("li").remove();
    }
  });

  //It is provide the strike out or not strike out the
  document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.type == "checkbox") {
      if (e.target.checked) {
        e.target.closest("li").querySelector("p").style.textDecoration =
          "line-through";

      } else {
        e.target.closest("li").querySelector("p").style.textDecoration =
          "none";
      }
    }
  });