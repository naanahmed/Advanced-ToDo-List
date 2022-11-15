import 'source-map-support/register'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { getUserId } from '../utils';
import {APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda'
import {CreateTodoRequest} from '../../requests/CreateTodoRequest';
import {createTodo} from "../../BusinessLogic/todos";

export const handler = middy(
    async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
      const newTodo: CreateTodoRequest = JSON.parse(event.body)
      // TODO: Implement creating a new TODO item
  
      const createdItem = await createTodo(newTodo, getUserId(event))
      
      return {
        statusCode: 201,
        body:JSON.stringify({
          'item': createdItem
        })
      }
      
    }
  )
  
  handler.use(
    cors({
      credentials: true
    })
  )