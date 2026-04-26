FROM mcr.microsoft.com/windows/servercore:ltsc2022

WORKDIR /app
COPY app.js .

RUN powershell -Command "Invoke-WebRequest https://nodejs.org/dist/v18.18.0/node-v18.18.0-win-x64.zip -OutFile node.zip; Expand-Archive node.zip -DestinationPath C:\; Rename-Item C:\node-v18.18.0-win-x64 C:\nodejs"

ENV PATH="C:\\nodejs;%PATH%"

EXPOSE 5000

CMD ["node", "app.js"]