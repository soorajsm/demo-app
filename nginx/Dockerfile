FROM mcr.microsoft.com/windows/servercore:ltsc2022

WORKDIR C:/nginx

ADD https://nginx.org/download/nginx-1.25.3.zip nginx.zip

RUN powershell -Command "Expand-Archive nginx.zip -DestinationPath ."

WORKDIR C:/nginx/nginx-1.25.3

RUN powershell -Command "mkdir logs; mkdir temp; mkdir temp/client_body_temp; mkdir temp/proxy_temp; mkdir temp/fastcgi_temp; mkdir temp/uwsgi_temp; mkdir temp/scgi_temp"

COPY nginx.conf conf/nginx.conf

EXPOSE 80

CMD ["nginx.exe", "-g", "daemon off;"]