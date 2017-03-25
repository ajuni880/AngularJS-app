function Announce() {
  this.id;
  this.title;
  this.price;
  this.uploadDate;
  this.urlPhoto;
  this.userId;
  this.categoryId;

  this.construct = function(id, title, price, uploadDate, urlPhoto, userId, categoryId){
      this.id=id;
      this.title=title;
      this.price=price;
      this.uploadDate=uploadDate;
      this.urlPhoto=urlPhoto;
      this.userId = userId;
      this.categoryId = categoryId;
  }
//getters
  this.getId = function() {
    return this.id;
  }

  this.getTitle = function() {
    return this.title;
  }

  this.getPrice = function() {
    return this.price;
  }

  this.getUploadDate = function() {
    return this.uploadDate;
  }

  this.getUrlPhoto = function(){
    return this.urlPhoto;
  }

  this.getUserId = function() {
    return this.userId;
  }

  this.getCategotyId = function() {
    return this.categoryId;
  }

   //setters
  this.setId = function(id) {
    this.id=id;
  }

  this.setPrice = function(price) {
    this.price;
  }

  this.setUploadDate = function(uploadDate) {
    this.uploadDate = uploadDate;
  }

  this.setUrlPhoto = function(urlPhoto){
    this.urlPhoto = urlPhoto;
  }

  this.setUserId = function(userId) {
    this.userId = userId;
  }

  this.setCategotyId = function(categoryId) {
     this.categoryId = categoryId;
  }

  //this.cookieToObj = function(productObj) {
  //   if(productObj.hasOwnProperty("id"))
  //     this.setId(productObj.id);
  //
  //   if(productObj.hasOwnProperty("idProductType"))
  //     this.setidProductType(productObj.idProductType);
  //
  //   if(productObj.hasOwnProperty("price"))
  //     this.setPrice(productObj.price);
  //
  //   if(productObj.hasOwnProperty("inOffer"))
  //     this.setInOffer(productObj.inOffer);
  //
  //   if(productObj.hasOwnProperty("description"))
  //     this.setDescription(productObj.description);
  //     if(productObj.hasOwnProperty("button"))
  //       this.setButton(productObj.button);
  //
// }
}
