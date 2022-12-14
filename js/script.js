const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {
  topic: "JS",
  learningGoals: [
    "Build JS Programs",
    "Listen to podcasts",
    "Get a Job",
    "Have Fun"
  ],
  category: "Front End Development",
  topicImportance: "High"
};

learning.topic = "JavaScript";

// learning.learningGoals.splice(1, 1);

topicElement.innerText = `I'm learning ${learning.topic} ✔️`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals ✔️`;
countElement.classList.remove("hide");

console.log(learning);
