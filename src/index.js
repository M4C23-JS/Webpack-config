import './styles.css'
import {Todo,ListTodo} from './classes/index.js';

const newTodo = document.querySelector('.new-todo');
const todoList = document.querySelector('.todo-list');
const completados = document.querySelector('.completados');
const todos = document.querySelector('.todos');
const pendientes = document.querySelector('.pendientes');
const btnBorrar = document.querySelector('.clear-completed');
const contadorPendientes = document.querySelector('.todo-count')
const lis = todoList.children
const ListTodoInstance = new ListTodo();

const contarPendientes = () => {
    contadorPendientes.innerText = ListTodoInstance.getContadorPendientes(lis) + " pendiente(s)"
}
const insertarNuevaTarea = (e) => {
    if( e.keyCode === 13 ){
        let nombreTodo = e.target.value
        let todoInstance = new Todo(nombreTodo)
       
        ListTodoInstance.NuevaTarea(todoInstance)
        //console.log(ListTodoInstance)
        //console.log(e)
        e.target.value = ""
        contarPendientes()
    }  
}
const toggleEstadoTarea = (e) => {
    if (e.target.className === "toggle"){
        let li = e.target.parentElement.parentElement
        let dataId = e.target.parentElement.parentElement.getAttribute('data-id')
        //let s = ListTodoInstance.todos.map(e => e.id == dataId )
        let arr = Array.from(ListTodoInstance.todos)
        let arr2 = arr.filter(e => e.id == dataId)
        arr2[0].estado = arr2[0].estado ? false : true
        arr2[0].estado ? li.classList.add('completed') : li.classList.remove('completed')
        
        //console.log(s)
        //console.log(dataId)
        //console.log(arr)
        //console.log(arr2[0])
        contarPendientes()
    }
}
const filtrar = (filtro) => {
    ListTodoInstance.filtrarLista(filtro,lis)
    contarPendientes()
}
const filtrarCompletados = () => filtrar('completados')
const filtrarTodos = () => filtrar('todos')
const filtrarPendientes = () => filtrar('pendientes') 

const borrarCompletados = () => ListTodoInstance.borrarCompletados(lis)

newTodo.addEventListener('keyup',insertarNuevaTarea );
todoList.addEventListener('click', toggleEstadoTarea );
completados.addEventListener('click', filtrarCompletados )
todos.addEventListener('click', filtrarTodos )
pendientes.addEventListener('click', filtrarPendientes )
btnBorrar.addEventListener('click', borrarCompletados)
