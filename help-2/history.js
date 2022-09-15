const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  /* 
  * const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  এখানে previousTests ভেরিএবল টা অলরেডি উপরে let দিয়ে ডিক্লিয়ার করাছিলো তাই const আর নিবে না!
  শুধু const তুলে দিয়েছি!

   * এবং ডেসিমল রিমুভের জন্য সব উক্ত নাম্বার ভেরিয়েবল টা Math.thrunc / Math.float() ফাংশনের মধ্যে ঢুকিয়ে দিলেই হয়ে যায়!
  
   */
  previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    histories.appendChild(newRow);
    newRow.classList.add("card");

    newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">
  ${Math.trunc(test.timeTaken)}
  </span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;
  });
}
