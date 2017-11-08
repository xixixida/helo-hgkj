'use state';

const md5 = require('md5');
var timestamp = new Date().getTime()
module.exports = app => {
    class IndexContorller extends app.Controller {
        * index(ctx) {
            let data = {
                pic: ctx.session.pic,
                id: ctx.session.id,
                name: ctx.session.name
            }
            yield ctx.render('index/index.html', data)
        }

        * home(ctx) {
            let data = {
                pic: ctx.session.pic,
                id: ctx.session.id,
                name: ctx.session.name
            }
            const id = ctx.query.id;
            let url = `peojects/h${id}.html`;
            console.log(url)

            yield ctx.render('index/home.html', data)
        }

        async cpxt(ctx) {
            let data = {
                pic: ctx.session.pic,
                id: ctx.session.id,
                name: ctx.session.name
            }
            await ctx.render('index/cpxt.html', data)
        }

        async jxyj(ctx) {
            let data = {
                pic: ctx.session.pic,
                id: ctx.session.id,
                name: ctx.session.name
            }
            await ctx.render('index/jxyj.html', data)
        }

        async download(ctx) {
            let data = {
                pic: ctx.session.pic,
                id: ctx.session.id,
                name: ctx.session.name
            }
            await ctx.render('index/download.html', data)
        }

        * login() {

            console.log(timestamp)
            const {
                ctx,
                service
            } = this;
            const tel = ctx.request.body.tel;
            const pwd = ctx.request.body.pwd;
            let msg = {
                tel: tel,
                pwd: md5(pwd)
            }
            const data = yield ctx.service.user.get(msg)
            if (data.state == 1) {
                yield ctx.service.user.up({id:data.message.id,update_time:this.app.mysql.literals.now,ip:ctx.ip})
                ctx.session.pic = data.message.pic
                ctx.session.name = data.message.name
                ctx.session.id = data.message.id
                ctx.body = {
                    state: 1,
                    message: ctx.session
                }
            } else {
                ctx.body = data
            }
        }

        * signOut() {
            const {
                ctx
            } = this
            ctx.session = null
            if (ctx.session == null) {
                ctx.body = {
                    state: 1,
                    message: '退出成功'
                }
            } else {
                ctx.body = {
                    state: 0,
                    message: '退出失败'
                }
            }
        }

        * register1() {
            const {
                ctx,
                service
            } = this;
            const tel = ctx.request.body.tel;
            const name = yield ctx.service.user.find(tel);
            if (name.state == 1) {
                ctx.body = {
                    state: 0,
                    message: '用户已注册'
                }
            } else {
                const data = yield ctx.service.sms.goto(tel)
                ctx.body = data
            }
        }

        * register2() {
            const {
                ctx,
                service
            } = this;
            const tel = ctx.request.body.tel;
            const pwd = ctx.request.body.pwd;
            const name = yield ctx.service.user.find(tel);
            if (tel.state === 1) {
                ctx.body = {
                    state: 0,
                    message: '用户已注册'
                }
            }
            let msg = {
                tel: tel,
                pwd: md5(pwd),
                ip:ctx.ip,
                create_time:this.app.mysql.literals.now
            }
            const data = yield ctx.service.user.add1(msg)
            ctx.body = data
        }

        * contant() {
            const {
                ctx,
                service
            } = this;
            const data = ctx.require.body;
            const req = yield ctx.service.contant.add(data)
            if(req.state == 1){
                yield ctx.render('contant/index.html');
            }
        }
    }
    return IndexContorller;
}
