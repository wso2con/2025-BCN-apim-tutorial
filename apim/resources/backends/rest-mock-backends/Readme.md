# Mock REST API Backend Server Setup  

## Prerequisites  

1. **Node.js**  
   - Ensure Node.js version 22 is installed to run the mock REST API server. To install it:  
     1. Visit the [Node.js Download Page](https://nodejs.org/en/).  
     2. Select the "LTS" version labeled **22.x.x**.  
     3. Download and follow the installation instructions provided.  

## Mock Server Installation  

Set up the mock server by running:  
```bash
npm install
```

## Starting the Server  

Launch the mock REST API server with:  
```bash
nohup node server.js &
```
By default, the server runs on port **3000**. To modify the port, update the `server.js` file.  

## Testing the Server  

Verify the server is running by executing:  
```bash
curl -X GET http://localhost:3000/system/health
```
