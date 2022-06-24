import { MailAdapter, SendMailData } from "../mailadapter";
import  nodemailer  from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ed02f19882c968",
      pass: "046cae5f37edff"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({body, subject}: SendMailData) {
            await transport.sendMail({
                    from: 'Equipe SolveProblems <solveproblmsti@mail.com',
                    to: 'Gabriel Souza <gabrielgsouza95@gmail.com>',
                    subject,  
                     html: body,
       })
    }
}