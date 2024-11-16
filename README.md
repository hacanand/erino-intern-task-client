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
```

1. Clone both the repository by running the following command
```bash
git clone <repository-url>
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


![Screenshot from 2024-11-16 22-54-00](https://github.com/user-attachments/assets/7088610e-6a99-46d3-a65a-ca5b763ef9c9)

![Screenshot from 2024-11-16 22-54-11](https://github.com/user-attachments/assets/e8b0ce0e-7e4e-43ff-a3c9-90dfd96f9f7b)

![Screenshot from 2024-11-16 22-54-20](https://github.com/user-attachments/assets/04e989d3-7057-4455-b206-bd00bf30095e)


