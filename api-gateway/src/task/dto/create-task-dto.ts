export class CreateTaskDto{
  name:string
  details:string
  created_at = new Date()
  deadline:Date
  designated:string[]
}