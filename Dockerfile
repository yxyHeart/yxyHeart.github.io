# 基础镜像
FROM nginx:latest

# 将当前目录下的文件复制到镜像中的 `/usr/share/nginx/html/` 目录下
COPY dist /usr/share/nginx/html

# 使用 80 端口
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]
