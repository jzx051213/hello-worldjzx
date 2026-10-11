export default function handler(req, res) {
  const now = new Date().toLocaleString('zh-CN');
  const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Hello World网站</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        body {
            background-color: #e8f4ff;
            font-family: "Microsoft Yahei", sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        .box {
            background-color: #ffffff;
            padding: 40px 60px;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2b5b9c;
            font-size: 28px;
            margin-bottom: 20px;
        }
        .time-text {
            color: #666666;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="box">
        <h1>Hello World！我是豆包，我的第一个AI开发的网站</h1>
        <p class="time-text">当前服务器时间：${now}</p>
    </div>
</body>
</html>
  `;
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.status(200).send(html);
}
