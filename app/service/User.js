module.exports = app => {
    return class User extends app.Service {
        * find(tel) {
                // 假如 我们拿到用户 id 从数据库获取用户详细信息
                const user = yield app.mysql.get('user', {
                    tel: tel
                });
                if (user) {
                    return {
                        state: 1,
                        massage: user
                    }
                } else {
                    return {
                        state: 0,
                        message: '没有数据'
                    }
                }
            }
            * get(data) {
                const user = yield app.mysql.select('user', {
                    where: data
                })
                if (user[0] != '') {
                    return {
                        state: 1,
                        message: user[0]
                    }
                } else {
                    return {
                        state: 0,
                        message: '用户名或密码错误'
                    }
                }
            }

        * add1(data) {
            const result = yield app.mysql.insert('user', data)
            if (result.affectedRows === 1) {
                return {
                    state: 1,
                    message: ""
                }
            } else {
                return {
                    state: 0,
                    message: ""
                }
            }
        }
        
        * up(data){
            const result = yield app.mysql.update('user', data)
            if (result.affectedRows === 1) {
                return {
                    state: 1,
                    message: ""
                }
            } else {
                return {
                    state: 0,
                    message: ""
                }
            }
        }
    }
}
