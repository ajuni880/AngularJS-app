function Category(){
  this.id;
  this.name;

  this.construct = function(id, name){
      this.id=id;
      this.name=name;
  }

  this.getId = function(){
    return this.id;
  }
  this.getName = function(){
    return this.name;
  }

  this.setId = function(id){
    this.id=id;
  }

  this.setName = function(name){
    this.name=name;
  }

}
