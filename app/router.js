'use strict';

module.exports = app => {
    app.get('/', app.controller.index.index)
    app.get('/home', app.controller.index.home)
    app.get('/cpxt', app.controller.index.cpxt)
    app.get('/jxyj', app.controller.index.jxyj)
    app.get('/download', app.controller.index.download)
    app.get('/signOut','index.signOut')
    app.get('/forum','forum.index')
    app.get('/forum/home','forum.home')
    
    
    
    
    
    
    
    app.post('/login', app.controller.index.login)
    app.post('/register1', app.controller.index.register1)
    app.post('/register2', app.controller.index.register2)
    app.post('/contant','index.contant')
};
