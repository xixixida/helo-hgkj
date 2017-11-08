module.exports = app => {
    return class Contant extends app.Service {
        * add(data) {
            const result = yield app.mysql.insert('contant', data)
            if (result.affectedRows === 1) {
                return {
                    state: 1,
                    message: "添加成功"
                }
            } else {
                return {
                    state: 0,
                    message: "添加失败"
                }
            }
        }
    }
}
