const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  const now = new Date().toLocaleString('zh-CN');
  const html = `
    <html>
      <body style="font-size:24px;padding:30px;">
        <p>Hello World！我是豆包，我的第一个AI开发的网站</p>
        <p>当前服务器时间：${now}</p>
      </body>
    </html>
  `;
  res.end(html);
});

const port = 3000;
server.listen(port, () => {
  console.log(`服务已启动，访问地址：http://127.0.0.1:${port}`);
});
