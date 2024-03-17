export const localStorageGetTask = () => {
    try {
        const allTask = localStorage.getItem("taskList");
        if (allTask === null) {
            return undefined;
        }
        return JSON.parse(allTask);
    } catch (error) {
        console.error("Error loading tasks from localStorage:", error);
        return undefined;
    }
};