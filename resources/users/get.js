this.newField = "newField";

dpd.access.get({userId: this.id}, function(result){
     this.access = result.map(function(access){
        return access.resourceId;
     });
});