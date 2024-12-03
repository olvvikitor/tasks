export interface IEmailProvider{
  sendMail(email:string, message?:string):Promise<void>
}