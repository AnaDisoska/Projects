function Pictures(isProfile, id){
    this.id = id;
    this.src= 'https://picsum.photos/200/300/?random' + id;
    this.isProfile = isProfile
    this.altText = 'lorem ipsum';
   
}