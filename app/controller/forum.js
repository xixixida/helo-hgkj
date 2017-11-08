'use state';

var timestamp = new Date().getTime()
module.exports = app => {
    return class ForumContorller extends app.Controller {
        * index() {
            const {
                ctx,
                service
            } = this;
            
            yield ctx.render('forum/index.html')
        }
        
        * home() {
            const {
                ctx,
                service
            } = this;
            
            yield ctx.render('forum/home.html')
        }
        
        
    }
}
