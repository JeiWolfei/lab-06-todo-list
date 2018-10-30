import addTask from './add.js';
import taskList from './list.js';
import taskApi from './api.js';

const task = taskApi.getAll();

taskList.init(tasks, function(task) {
    // this is the onRemove listener

    taskApi.remove(task);
});

addTask.init(function(task) {
    // this is the onAdd listener

    // tell the api service first
    taskApi.add(task);

    // then update components
    taskList.add(task);
});