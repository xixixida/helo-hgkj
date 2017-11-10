const SMSClient = require('@alicloud/sms-sdk')

module.exports = app => {
    return class Sms extends app.Service {

        * goto(tel) {
            const accessKeyId = ''
            const secretAccessKey = ''
            const code = Math.round(Math.random() * 9000 + 1000);
            let smsClient = new SMSClient({
                accessKeyId,
                secretAccessKey
            })
            //发送短信
            var a = yield smsClient.sendSMS({
                PhoneNumbers: tel,
                SignName: '哈工科教',
                TemplateCode: 'SMS_108600014',
                TemplateParam: `{"code":${code},"product":"云通信"}`
            })
            console.log(a)
            if (a.Code === 'OK') {
                return {
                    state: 1,
                    message: code
                }
            } else {
                return {
                    state:0,
                    message:'发送失败'
                }
            }

        }

    }

}
