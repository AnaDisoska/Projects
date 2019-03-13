function AboutMe(){
    this.header = 'This is a header';
    this.paragraph = 'This is a text';

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
     }
     
     randomDate(new Date(2012, 0, 1), new Date())
    // this.date = new Date();
   
}