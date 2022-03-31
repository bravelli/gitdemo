# HTTP

## 什么是 IP(internet protocal)

主要约定了两件事：1、如何定位一台设备。2、如何封装数据以跟其他设备交流。

1. 路由器被电信运营商分配一个[外网 IP]，手机和电脑的 IP 地址是[内网 IP]。其中路由器自己是既有外网 IP，也有内网 IP。所以路由也叫[网关]
2. 几个特殊的 IP。
   - 127.0.0.1 表示自己
   - localhost = 127.0.0.1 localhost 就是一个设置好的一个字符串。在 C:/windows/system32/drivers/etc/host 里面进行更改。
3. 一台服务器可以提供很多服务。那端口(port)就是每一个服务的窗口。一共可以提供 65535 个端口。其中 0-1023（2 的 10 次方减 1）端口是留给系统使用的。其他端口才是留给用户使用的。我怎么知道应该用什么端口。（维基百科写了，谷歌搜 tcp 端口）
   - httt 服务 80 端口
   - https 服务 443 端口
   - ftp 服务 21 端口
     http-server . -c-1 -p 1234，在 1234 端口下启动要给 http 服务。

## 什么是域名

域名就是 IP 的一个字符地址。使用`ping baidu.com`可以查到域名对应的 IP 是多少。一个域名可以对应多个服务器 IP。为了负载均衡。一个 IP 也可能同时存在多个域名。为了省钱，叫共享 IP。
域名和 IP 联系起来的是 DNS 域名系统。使用`nslookup`命令可以查到某个域名对应的 IP。

## 什么是 URL

统一资源定位符
http://www.baidu.com/s?wd=hello#3
协议+域名+(端口)+路径+查询参数+锚点

用 curl 命令来发起 http 请求
curl -v https://xiedaimala.com (全部显示内容)
curl -s -v https://xiedaimala.com (显示更复杂的内容)

发生的具体过程：

1. url 会被 curl 重写，先请求 DNS 获取 IP。
2. 在进行 TCP 链接，开始发送 http 请求。
3. 请求内容
4. 响应内容
5. 相应结束，关闭 TCP 链接（看不出来）。

## HTTP 请求与响应

### 请求与响应的模型

1. 如何发请求
   - 用 chrome 浏览器在地址栏输入地址
   - 用 curl -v 域名
     帮你发请求的工具叫做[用户代理]，user agent
2. 如何做出一个响应

3. 后缀没什么乱用，只有 content-type 才是决定文件类型的关键。

### 系统学习 HTTP

1. 请求与响应的格式
2. 用代码来实现请求
   curl -v http://localhost:8888/
   不用 GET，用 POST
   curl -v -x POST http://localhost:8888/
   不访问'/'，换其他路径并加查询参数
   curl -v http://localhost:8888/xxx?wd=hi /_(这里是 word='hi')_/
3. 锚点不会显示在访问里的。
4. 设置请求头
   curl -v -H 'Frank:Good' http://localhost:8888/
   ```
   请求头内容会显示：
   Accept:*/*
   Frank:Good
   ```
5. 设置请求体
   curl -v -X POST H 'Content-Type: text/plain;charset-utf-8' -d '请求体内容' http://localhost:8888/
   ```
   请求体内容虽然不显示，但是会提示上传了多少字节内容。
   >Content-Typer:text/plain;charset:utf-8
   >Content-Length:10
   >
   * upload completely sent off: 10 out of 10 bytes
   ```

### 如何用 node.js 获取请求内容

1. 获取请求动词 request.method
2. 读取路径 request.url 路径，带查询参数。 request.path 纯路径 request.query 只有查询参数
3. 读取请求头 request.headers['Accept'] 或者读取全部请求头 request.getheaders
4. 更改响应状态码 responds.statusCode = 308(写你要改的任意数字)
5. 设置响应头 responds.setHeaders("Content-Type","text/html;charset=utf-8") 或者是 responds.setHeaders("Frank","Good")
6. 设置响应体 seponds.write('内容') 并且 write 是可以追加的。

curl 可以完成基本上所有浏览器的功能，他就相当于在地址栏输入。它也可以后面接一个图片地址，就直接下载了。
`curl jpg地址 > 1.jpg`就会下载好。

7. 状态码如果是 404，也是可以有内容的。你追加响应体内容就好。chrome 反馈的 404 页面是它自己做好的。
