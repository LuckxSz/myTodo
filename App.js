const input = document.getElementById("input");
const btn = document.getElementById("btn");
const listContainer = document.getElementById("list-container");

const markAsCompleted = (li) => {
  li.style.textDecoration = "line-through";
  li.style.color = "green";
};

const removeTask = (li) => {
  li.remove();
};
const addTask = () => {
  if (input.value === "") {
    alert("ops, no value inside the input");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `
    <div class="x-div">
    <span onclick="markAsCompleted(this.parentElement)">${input.value}</span>
<button class="button">
  <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
</button>
       </div>
    `;
    listContainer.appendChild(li);
    li.style.color = "white";

    const btn = li.querySelector(".button");
    btn.addEventListener("click", () => {
      removeTask(li);
    });
  }
  input.value = "";
};

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const input = document.getElementById("input").value;
    input.innerHTML = "";
    addTask();
  }
});
