export const localStorageSetTask = (state) => {
    try {
        const allTask = JSON.stringify(state);
        localStorage.setItem('taskList', allTask);
    } catch (error) {
        console.error('Error saving tasks to localStorage:', error);
    }
};