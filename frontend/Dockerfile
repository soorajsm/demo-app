FROM mcr.microsoft.com/windows/node:ltsc2022

WORKDIR /app
COPY . .

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]