To use local GraphQL-Server, follow the following steps:

1. Open powershell/cmd
2. Execute "npm i express graphql express-graphql --save"
3. Execute "npm i json-server axios --save"
4. Execute "npm i node-fetch@2.6.1 --save"
5. Start JSON- and GraphQL-Server script with "npm run gql-services:server"

optional:
7. If you want to see detailed log about the JSON-Server and GraphQL-Server in seperate windows, execute...
    7a. npm run dev:server (for GraphQL-Server)
    7b. npm run json:server (for JSON-Server)