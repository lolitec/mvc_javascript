import web
import app

render = web.template.render('mvc/views/')

class Index:
    def GET(self):
        return render.index()