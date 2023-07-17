export let allProjects = [];

export const projectFactory = (title, desc, due, priority, notes, category) => {
    return { title, desc, due, priority, notes, category };
};

//Separate so that the newProject is added as an object to allProjects
export function addProject (title, desc, due, priority, notes, category) {
    const newProject = projectFactory(title, desc, due, priority, notes, category);
    allProjects.push(newProject);
}

export function removeProject() {
    
}