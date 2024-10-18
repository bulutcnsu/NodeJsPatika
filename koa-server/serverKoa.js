const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const route = new Router();

 //app.is('text/*', 'text/html'); // => 'text/html'

  app.use(ctx => {
    let req = ctx.request; //Request object
    let res = ctx.response; //Response object
    res.writeHead('200, { "Content-Type": "text/html"');
    route.get('/', () =>{
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>INDEX SAYFASINA HOSGELDİNİZ</h1>");

    });
    route.get('/about', () =>{
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>ABOUT SAYFASINA HOSGELDİNİZ</h1>");

    });
    route.get('/contact', () =>{
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>CONTACT SAYFASINA HOSGELDİNİZ</h1>");

    });

    route.get('/*', () =>{
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>ARADIGINIZ SAYFA BULUNAMADI...</h1>");

    });
    });



  app.listen(3000);