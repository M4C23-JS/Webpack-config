const ListTodoInstance = new ListTodo();

const filtrar = (filtro) => {
    ListTodoInstance.filtrarLista(filtro,lis)
    contarPendientes()
}
const filtrarCompletados = () => filtrar('completados')
const filtrarTodos = () => filtrar('todos')
const filtrarPendientes = () => filtrar('pendientes') 

const borrarCompletados = () => ListTodoInstance.borrarCompletados(lis)