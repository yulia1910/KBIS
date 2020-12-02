### Angular Mission
===

Introduction
---

This task is not large but includes all the elements of Angular and is designed to test the candidate's ability to use them properly for application development. The task must be performed accurately without workarounds because the goal is to test the way and not just the result. The design capabilities are not tested in this task, so you can use auxiliary libraries such as bootstrap, material and more.
The topics examined are:

+ Correct and efficient division into components
+ Using ngrx technology for state management
+ Routing + lazy loading of modules
+ Working with forms using the Reactive Forms Module
+ Proper use of Observables
+ Understanding of component life cycle
+ Working with a backend

Mission
---

Write a task management app. On the first page, a "Load todo app" link will appear, which, when clicked, will load a module (lazy-loading) of the todo items list. Clicking on the item will appear next to the list of the item's edit screen. You can update the fields and make submit. The list should be updated. When selecting an item, the line must be painted a different color from the other lines. When selecting done a line should be drawn over the text.


Highlights
---
+ For backend simulation you will use angular-in-memory-web-api
+ Ngrx should be used to manage the state
+ Perform state loading from the backend using effects
+ The management of the todo should be put in a separate module and loaded by clicking on the "Load todo app"

Attached the example to the screens on the next page.

First page

![First page](https://github.com/okigor/angular_mission/blob/master/documentation/pic1.png "First page")

List of tasks

![List of tasks](https://github.com/okigor/angular_mission/blob/master/documentation/pic2.png "List of tasks")

Task edit

![Task edit](https://github.com/okigor/angular_mission/blob/master/documentation/pic2.png "Task edit")