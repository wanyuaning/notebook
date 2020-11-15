

# nginx.conf

```O
http {
    server {
        listen 8080;
        server_name localhost;
        # 允许跨域
        [ck|add_header Access-Control-Allow-Origin *;]
        [ck|add_header Access-Control-Allow-Headers DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization;]
        [ck|add_header Access-Control-Allow-Methods GET,POST,OPTIONS;]
        # 负载均衡(反向代理) 把默认location注释掉 
        location [blue b|/] {
            proxy_pass [blue alpha5|http://localhost:8001];
        }
        location [blue b|/api/] {
            proxy_pass [blue alpha5|http://localhost:8000];
            proxy_set_header Host $host;
        }
        # 静态服务
        # 动态服务
        # 负载均衡（反向代理）
        # 缓存服务
        # 对IP限速
        # 限制连接数
        
    }
}


```