// ============================================================
// DATE
// ============================================================

const now = new Date();

const today =
    now.getFullYear() +
    "-" +
    String(now.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(now.getDate()).padStart(2, "0");


// ============================================================
// SAVED DAILY PROGRESS
// ============================================================

const savedProgress = JSON.parse(
    localStorage.getItem("dailyProgress") || "{}"
);

let completed = savedProgress[today] || [];


// ============================================================
// TASK GENERATOR
// ============================================================

function getTodaysTasks() {

    const activeGoals = microGoals.filter(
        goal => goal.active
    );

    // Give higher-frequency goals more chances
    const weightedGoals = [];

    for (const goal of activeGoals) {

        for (let i = 0; i < goal.frequency; i++) {
            weightedGoals.push(goal);
        }
    }

    // Shuffle the weighted list
    weightedGoals.sort(
        () => Math.random() - 0.5
    );

    const selected = [];
    const usedCategories = new Set();

    // Pick different categories first
    for (const goal of weightedGoals) {

        if (!usedCategories.has(goal.category)) {

            selected.push(goal);
            usedCategories.add(goal.category);

        }

        if (selected.length === 3) {
            break;
        }
    }

    // Safety net
    if (selected.length < 3) {

        for (const goal of weightedGoals) {

            if (!selected.includes(goal)) {

                selected.push(goal);

            }

            if (selected.length === 3) {
                break;
            }
        }
    }

    return selected;
}


// ============================================================
// GET / CREATE TODAY'S TASKS
// ============================================================

const savedTasks = JSON.parse(
    localStorage.getItem("dailyTasks") || "{}"
);

let todayTasks;

if (savedTasks[today]) {

    todayTasks = savedTasks[today];

} else {

    todayTasks = getTodaysTasks();

    savedTasks[today] = todayTasks;

    localStorage.setItem(
        "dailyTasks",
        JSON.stringify(savedTasks)
    );
}


// ============================================================
// PAGE ELEMENTS
// ============================================================

const tasksContainer =
    document.getElementById("tasks");

const progressText =
    document.getElementById("progress");


// ============================================================
// DISPLAY TASKS
// ============================================================

function renderTasks() {

    tasksContainer.innerHTML = "";

    todayTasks.forEach((goal, index) => {

        const task = document.createElement("label");

        task.className = "task";

        const isCompleted =
            completed.includes(goal.id);

        if (isCompleted) {
            task.classList.add("completed");
        }

        task.innerHTML = `
            <input
                type="checkbox"
                ${isCompleted ? "checked" : ""}
            >

            <span>${goal.task}</span>
        `;

        const checkbox =
            task.querySelector("input");

        checkbox.addEventListener("change", () => {

            const taskId =
                todayTasks[index].id;

            if (checkbox.checked) {

                if (!completed.includes(taskId)) {
                    completed.push(taskId);
                }

            } else {

                completed =
                    completed.filter(
                        id => id !== taskId
                    );
            }

            savedProgress[today] = completed;

            localStorage.setItem(
                "dailyProgress",
                JSON.stringify(savedProgress)
            );

            renderTasks();
        });

        tasksContainer.appendChild(task);
    });


    progressText.textContent =
        `${completed.length} / ${todayTasks.length} complete`;
}


// ============================================================
// START APP
// ============================================================

renderTasks();

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("./sw.js")
        .then(() => {
            console.log("Offline mode ready 🌱");
        })
        .catch(error => {
            console.error(
                "Service worker failed:",
                error
            );
        });

}