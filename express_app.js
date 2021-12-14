const express= require('express');
const mongoose= require('mongoose')
const mongo_db_url="mongodb+srv://emmanueldanso53:superman007@cluster0.chcps.mongodb.net/todo_db?retryWrites=true&w=majority";

server.get('/student', function(request, response){
    response.status(200).json('All tasks has been given');
});
server.post('/student', function(request, response){
    response.status(200).json('All are new task');
});
server.put('/student', function(request, response){
    response.status(200).json('Update task');
});
server.delete('/student', function(request, response){
    response.status(200).json('Delete a task');
}); 

server.listen(4000, function(){
    console.log('Server has started to run in express');
});