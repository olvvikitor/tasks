export interface IEmailProvider{
  sendConfirmationCreateAccount(data:{email:string, idUser:string, token:string}):Promise<void>
}