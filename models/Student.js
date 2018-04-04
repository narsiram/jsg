var db=require('../dbconnection'); //reference of dbconnection.js

var Student={

    getAllTasks:function(callback){

        return db.query("Select * from jsg",callback);

    },
    getTaskById:function(id,callback){

        return db.query("select * from jsg where Id=?",[id],callback);
    },
    addTask:function(Task,callback){
        return db.query("Insert into jsg values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
    },
    deleteTask:function(id,callback){
        return db.query("delete from jsg where Id=?",[id],callback);
    },
    updateTask:function(id,Task,callback){
        return db.query("update jsg set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
    }

};
module.exports=Student;