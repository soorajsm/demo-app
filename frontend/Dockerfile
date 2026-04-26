FROM mcr.microsoft.com/windows/servercore:ltsc2022

WORKDIR /app
COPY index.html .
COPY server.js .

RUN powershell -Command "Invoke-WebRequest https://nodejs.org/dist/v18.18.0/node-v18.18.0-win-x64.zip -OutFile node.zip; Expand-Archive node.zip -DestinationPath C:\node; Remove-Item node.zip"

ENV PATH="C:\\node\\node-v18.18.0-win-x64;%PATH%"

EXPOSE 3000

CMD ["node", "server.js"]