dpd.users.get({id: this.authorId}, function(result){
     this.userName = result.username;
});
