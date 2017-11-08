'use strict';
module.exports = appInfo => {
    const config = {
        keys: appInfo.name + 'hgkj_1500028154934_3105',
        view: {
            defaultViewEngine: 'nunjucks',
            mapping: {
                '.html': 'nunjucks',
            },
        },
        mysql: {
            // 单数据库信息配置
            client: {
                // host
                host: 'mydb.cpv7zbplmnmp.rds.cn-north-1.amazonaws.com.cn',
                // 端口号
                port: '3306',
                // 用户名
                user: 'xidajian',
                // 密码
                password: 'hte123456',
                // 数据库名
                database: 'steatup',
            },
            // 是否加载到 app 上，默认开启
            app: true,
            // 是否加载到 agent 上，默认关闭
            agent: false,
        }
        /*    config.bodyParser: {
                jsonLimit: '1mb',
                formLimit: '1mb',
            };*/
        /*config.multipart = {
            fileExtensions: ['.foo', '.BAR'],
        };*/
    }
    return config;
};
