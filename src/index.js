document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    form.reset();
  });
});
function buildToDo(todo) {
  let paragraph = document.createElement("p");
  let button = document.createElement("button");
  button.textContent = "x";
  paragraph.textContent = todo;
  paragraph.appendChild(button);
  console.log(paragraph);

  const tasks = document.querySelector("#tasks");
  tasks.appendChild(paragraph);

  button.addEventListener("click", () => {
    tasks.removeChild(paragraph);
  });
}
