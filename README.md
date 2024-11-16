# ERINO Intern Task
This is a simple contact list application that allows users to add, edit, and delete contacts. The application is built using React and Node.js.
## Installation
in client directory
create a .env file and add the following line
```bash
VITE_APP_BACKEND_URL=http://localhost:3001/api/v1
```
in server directory
create a .env file and add the following line
set your mongodb uri in MONGO_URI
```bash
PORT=3001
MONGO_URI="mongodb+srv://<username>:<password>@cluster0.mt8bp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
 
```bash

1. Clone both the repository
```bash
git clone
```
2. Install dependencies in both the client and server directories by running the following command
```bash
npm install

```
3. Start the server go to server directory and run the following command
```bash
node index.js
``` 
4. Start the client go to client directory and run the following command
```bash
npm run dev
```
5. Open the application in your browser by navigating to the following URLs
```bash
http://localhost:3000
http://localhost:3001
```
client will run at port 3000 and server will run at port 3001

