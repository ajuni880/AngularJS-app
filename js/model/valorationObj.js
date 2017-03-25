function Valolation() {
  this.valorationId;
  this.message;
  this.date;

  this.construct = function(valorationId, message, date){
      this.valorationId=valorationId;
      this.message=message;
      this.date = date;
  }
  //getters
  this.getValorationId = function(){
    return this.valorationId;
  }

  this.getMessage = function(){
    return this.message;
  }

  this.getDate = function(){
    return this.getDate;
  }
  //setters
  this.setValorationId = function(valorationId){
    this.valorationId = valorationId
  }

  this.setMessage = function(message){
    this.message = message;
  }

  this.setDate = function(date){
    this.date = date;
  }

}
