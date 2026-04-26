FROM mcr.microsoft.com/windows/servercore:ltsc2022

WORKDIR /app
COPY app.js .

RUN powershell -Command "Invoke-WebRequest https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi -OutFile node.msi; Start-Process msiexec.exe -ArgumentList '/i node.msi /quiet /norestart' -Wait"

EXPOSE 5000

CMD ["node", "app.js"]