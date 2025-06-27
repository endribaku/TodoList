/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectlist.js */ \"./src/projectlist.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFzSjtBQUNqSDtBQUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBhZGRUb2RvVG9Qcm9qZWN0LCByZW1vdmVUb2RvRnJvbVByb2plY3QsIHVwZGF0ZVRvZG8sIGdldFRvZG9Gcm9tUHJvamVjdCwgZ2V0UHJvamVjdExpc3QgfSBmcm9tICcuL3Byb2plY3RsaXN0LmpzJztcbmltcG9ydCB7IFRvRG9JdGVtIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(id, name) {\n        this.id = id;\n        this.name = name;\n        this.todoList = [];\n    }\n\n    addTodo(todo) {\n        this.todoList.push(todo);\n    }\n\n    removeTodoById(todoId) {\n        this.todoList = this.todoList.filter(todo => todo.id !== todoId);\n    }\n\n    static fromJSON(raw) {\n        const project = new Project(raw.id, raw.name);\n        if (Array.isArray(raw.todoList)) {\n            raw.todoList.forEach(todoRaw => {\n                const todo = ToDoItem.fromJSON(todoRaw);\n                project.addTodo(todo);\n            });\n        }\n        return project;\n    }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC5qcz9mNTliIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgbmFtZSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG8pIHtcbiAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG9CeUlkKHRvZG9JZCkge1xuICAgICAgICB0aGlzLnRvZG9MaXN0ID0gdGhpcy50b2RvTGlzdC5maWx0ZXIodG9kbyA9PiB0b2RvLmlkICE9PSB0b2RvSWQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tSlNPTihyYXcpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHJhdy5pZCwgcmF3Lm5hbWUpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyYXcudG9kb0xpc3QpKSB7XG4gICAgICAgICAgICByYXcudG9kb0xpc3QuZm9yRWFjaCh0b2RvUmF3ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gVG9Eb0l0ZW0uZnJvbUpTT04odG9kb1Jhdyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/project.js\n");

/***/ }),

/***/ "./src/projectlist.js":
/*!****************************!*\
  !*** ./src/projectlist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodoToProject: () => (/* binding */ addTodoToProject),\n/* harmony export */   getProjectList: () => (/* binding */ getProjectList),\n/* harmony export */   getTodoFromProject: () => (/* binding */ getTodoFromProject),\n/* harmony export */   removeProject: () => (/* binding */ removeProject),\n/* harmony export */   removeTodoFromProject: () => (/* binding */ removeTodoFromProject),\n/* harmony export */   updateTodo: () => (/* binding */ updateTodo)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\nlet projectList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getSavedProjects)();\n\nfunction removeProject(projectId) {\n    const index = projectList.findIndex(project => project.id === projectId);\n    if (index !== -1) {\n        projectList.splice(index, 1); \n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectList);\n    }\n}\n\nfunction addProject(project) {\n    projectList.push(project);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectList);\n}\nfunction getProjectList() {\n    return projectList;\n}\n\n\nfunction addTodoToProject(projectId, todo) {\n    const index = projectList.findIndex(project => project.id === projectId);\n    if(index !== -1) {\n        projectList[index].addTodo(todo);\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectList);\n    }\n}\n\nfunction removeTodoFromProject(projectId, todoId) {\n    const index = projectList.findIndex(project => project.id === projectId);\n    if(index !== -1) {\n        projectList[index].removeTodoById(todoId);\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectList);\n    }\n}\n\nfunction updateTodo(projectId, updatedTodo) {\n    const project = projectList.find(p => p.id === projectId);\n    if (!project) return;\n\n    const todo = project.todoList.find(t => t.id === updatedTodo.id);\n    if (!todo) return;\n\n    todo.title = updatedTodo.title;\n    todo.description = updatedTodo.description;\n    todo.dueDate = updatedTodo.dueDate;\n    todo.priority = updatedTodo.priority;\n    todo.note = updatedTodo.note;\n    todo.isComplete = updatedTodo.isComplete;\n\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToStorage)(projectList);\n}\n\n\nfunction getTodoFromProject(projectId, todoId) {\n    const project = projectList.find(project => project.id === projectId);\n    if (!project) return null;\n\n    return project.todoList.find(todo => todo.id === todoId) || null;\n}\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdGxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNFO0FBQzhCOztBQUVyRSxrQkFBa0IsNkRBQWdCOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQXFCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksa0VBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQXFCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFxQjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGtFQUFxQjtBQUN6Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJOEgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0bGlzdC5qcz80OWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvRG9JdGVtIH0gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHtzYXZlUHJvamVjdHNUb1N0b3JhZ2UsIGdldFNhdmVkUHJvamVjdHN9IGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbmxldCBwcm9qZWN0TGlzdCA9IGdldFNhdmVkUHJvamVjdHMoKTtcblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RMaXN0LmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpOyBcbiAgICAgICAgc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RMaXN0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RMaXN0KTtcbn1cbmZ1bmN0aW9uIGdldFByb2plY3RMaXN0KCkge1xuICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Qcm9qZWN0KHByb2plY3RJZCwgdG9kbykge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdExpc3QuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcbiAgICBpZihpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcHJvamVjdExpc3RbaW5kZXhdLmFkZFRvZG8odG9kbyk7XG4gICAgICAgIHNhdmVQcm9qZWN0c1RvU3RvcmFnZShwcm9qZWN0TGlzdCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUb2RvRnJvbVByb2plY3QocHJvamVjdElkLCB0b2RvSWQpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RMaXN0LmZpbmRJbmRleChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHByb2plY3RMaXN0W2luZGV4XS5yZW1vdmVUb2RvQnlJZCh0b2RvSWQpO1xuICAgICAgICBzYXZlUHJvamVjdHNUb1N0b3JhZ2UocHJvamVjdExpc3QpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kbyhwcm9qZWN0SWQsIHVwZGF0ZWRUb2RvKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RMaXN0LmZpbmQocCA9PiBwLmlkID09PSBwcm9qZWN0SWQpO1xuICAgIGlmICghcHJvamVjdCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdG9kbyA9IHByb2plY3QudG9kb0xpc3QuZmluZCh0ID0+IHQuaWQgPT09IHVwZGF0ZWRUb2RvLmlkKTtcbiAgICBpZiAoIXRvZG8pIHJldHVybjtcblxuICAgIHRvZG8udGl0bGUgPSB1cGRhdGVkVG9kby50aXRsZTtcbiAgICB0b2RvLmRlc2NyaXB0aW9uID0gdXBkYXRlZFRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kby5kdWVEYXRlID0gdXBkYXRlZFRvZG8uZHVlRGF0ZTtcbiAgICB0b2RvLnByaW9yaXR5ID0gdXBkYXRlZFRvZG8ucHJpb3JpdHk7XG4gICAgdG9kby5ub3RlID0gdXBkYXRlZFRvZG8ubm90ZTtcbiAgICB0b2RvLmlzQ29tcGxldGUgPSB1cGRhdGVkVG9kby5pc0NvbXBsZXRlO1xuXG4gICAgc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RMaXN0KTtcbn1cblxuXG5mdW5jdGlvbiBnZXRUb2RvRnJvbVByb2plY3QocHJvamVjdElkLCB0b2RvSWQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdExpc3QuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgaWYgKCFwcm9qZWN0KSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiBwcm9qZWN0LnRvZG9MaXN0LmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpIHx8IG51bGw7XG59XG5cblxuXG5leHBvcnQgeyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBhZGRUb2RvVG9Qcm9qZWN0LCByZW1vdmVUb2RvRnJvbVByb2plY3QsIHVwZGF0ZVRvZG8sIGdldFRvZG9Gcm9tUHJvamVjdCwgZ2V0UHJvamVjdExpc3QgfTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/projectlist.js\n");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSavedProjects: () => (/* binding */ getSavedProjects),\n/* harmony export */   saveProjectsToStorage: () => (/* binding */ saveProjectsToStorage)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\nfunction saveProjectsToStorage(projectList) {\n    localStorage.setItem(\"projectList\", JSON.stringify(projectList));\n}\n\nfunction getSavedProjects() {\n    let savedProjects = [];\n\n    try {\n    const data = localStorage.getItem(\"projectList\");\n    if (data) {\n        const rawProjects = JSON.parse(data);\n        return rawProjects.map(_project_js__WEBPACK_IMPORTED_MODULE_0__.Project.fromJSON);\n    }\n    } catch (error) {\n    console.error(\"Error parsing projects from localStorage:\", error);\n    \n    return [new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(\"inbox\", \"Inbox\")];\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7OztBQUd2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnREFBTztBQUN0QztBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsZ0JBQWdCLGdEQUFPO0FBQ3ZCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdG9yYWdlLmpzPzQ2MGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5cblxuZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9TdG9yYWdlKHByb2plY3RMaXN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0TGlzdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xufVxuXG5mdW5jdGlvbiBnZXRTYXZlZFByb2plY3RzKCkge1xuICAgIGxldCBzYXZlZFByb2plY3RzID0gW107XG5cbiAgICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHJhd1Byb2plY3RzID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJhd1Byb2plY3RzLm1hcChQcm9qZWN0LmZyb21KU09OKTtcbiAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZTpcIiwgZXJyb3IpO1xuICAgIFxuICAgIHJldHVybiBbbmV3IFByb2plY3QoXCJpbmJveFwiLCBcIkluYm94XCIpXTtcbiAgICB9XG59XG5cbmV4cG9ydCB7c2F2ZVByb2plY3RzVG9TdG9yYWdlLCBnZXRTYXZlZFByb2plY3RzfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/storage.js\n");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToDoItem: () => (/* binding */ ToDoItem)\n/* harmony export */ });\nclass ToDoItem {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.isComplete = false;\n        this.id = crypto.randomUUID();\n    }\n\n    setNote(note) {\n        this.note = note;\n    }\n\n    changeCompleteStatus() {\n        this.isComplete = !this.isComplete;\n    }\n\n    static fromJSON(raw) {\n        const todo = new ToDoItem(raw.title, raw.description, raw.dueDate, raw.priority);\n        todo.id = raw.id;\n        todo.isComplete = raw.isComplete;\n        todo.note = raw.note || \"\";\n        return todo;\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8uanM/MjRkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9Eb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgIH1cblxuICAgIHNldE5vdGUobm90ZSkge1xuICAgICAgICB0aGlzLm5vdGUgPSBub3RlO1xuICAgIH1cblxuICAgIGNoYW5nZUNvbXBsZXRlU3RhdHVzKCkge1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSAhdGhpcy5pc0NvbXBsZXRlO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tSlNPTihyYXcpIHtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb0RvSXRlbShyYXcudGl0bGUsIHJhdy5kZXNjcmlwdGlvbiwgcmF3LmR1ZURhdGUsIHJhdy5wcmlvcml0eSk7XG4gICAgICAgIHRvZG8uaWQgPSByYXcuaWQ7XG4gICAgICAgIHRvZG8uaXNDb21wbGV0ZSA9IHJhdy5pc0NvbXBsZXRlO1xuICAgICAgICB0b2RvLm5vdGUgPSByYXcubm90ZSB8fCBcIlwiO1xuICAgICAgICByZXR1cm4gdG9kbztcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todo.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;