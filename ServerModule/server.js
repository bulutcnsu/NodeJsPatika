const http = require('node:http');
const port = 5000;

const server = http.createServer((req, res) =>{
    const url = req.url;


    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2> INDEX SAYFASI </h2>");

      } else if (url === "/hakkimda") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>HAKKIMDA SAYFASI</h2>");
      }
       else if (url === "/iletisim") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>ILETISIM SAYFASI</h2>");
      
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h2>404 SAYFA BULUNAMADI</h2>");
      }
    res.end();

 });

server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});
