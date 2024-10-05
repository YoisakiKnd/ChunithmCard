# ChunithmCard
 闲的没事干做的奇奇怪怪的东西，用来显示你的Chunithm交友卡片（？）

 屑作，有bug或者有建议欢迎pr或者issue

 ## 配置
 要调用这个卡片你需要在`script.js`文件中修改以下内容
 ```
 displayPlayerInfo(
    'https://chunithm.wahlap.com/mobile/img/a134ec4921a7fb69.png', // 头像图片链接
    'MikuNya♪', // 名字
    '15.02', // Rating
    'https://chunithm.wahlap.com/mobile/images/honor_bg_silver.png', // 头衔背景
    'しぐれうい' // 头衔文案
);
 ```

 ## 示例
 这是一个默认用来显示卡片的html页面示例，仅供参考
 ```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChunithmCard</title>
    <link rel="stylesheet" href="style.css"> // 导入css
</head>
<body>
    <div id="playerDisplay"></div> // 导入卡片

    <script src="script.js"></script> // 导入js
</body>
</html>
```