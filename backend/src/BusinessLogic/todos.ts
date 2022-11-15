import { ToDoAccess } from './todosAccess'
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
// import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
import { TodoUpdate } from '../models/TodoUpdate'

// import * as createError from 'http-errors'

const todosAcess = new ToDoAccess()
// const mybucket = process.env.ATTACHMENT_S3_BUCKET

// TODO: Implement businessLogic
export async function createTodo(
    createTodoRequest:CreateTodoRequest, 
    userId:string) :Promise<TodoItem> {
    const todoId = uuid.v4()
    
    return todosAcess.createToDo({
        todoId:todoId,
        userId: userId,
        name: createTodoRequest.name,
        dueDate: createTodoRequest.dueDate,
        // attachmentUrl: `http://${mybucket}.s3.amazonaws.com/${todoId}`,
        done: false,
        createdAt: new Date().toISOString()  
    })
}

export async function getTodosForUser(
    userId: string) {

    return todosAcess.getTodosForUser(userId)    
}

export async function deleteTodo(
    userId: string, 
    todoId: string){

    return todosAcess.deleteToDo(userId, todoId)
}
export async function createAttachmentPresignedUrl(
    todoItem: TodoItem) {
    return todosAcess.createAttachmentPresignedUrl(todoItem)    
}
export async function updateTodo (
    updateTodoRequest: UpdateTodoRequest, 
    todoId: string, userId: string) {

    const todoUpdate:TodoUpdate = {
        ...updateTodoRequest
    }
    
    return todosAcess.updateToDo(todoUpdate, todoId, userId)   
}

export async function generateUploadUrl(todoId: string) {
    return generateUploadUrl(todoId)    
}

export async function getTodoById(todoId: string) {
    return todosAcess.getTodosForUser(todoId)    
}