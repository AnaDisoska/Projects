function main(){
var club = new FootballClub("Real Madrid");
var stadium = new Stadium("Santiago Bernabeu");


for (var i=1; i<=30; i++){
    club.scoreGoal();
    stadium.fanShop();
    club.hooligansCosts();
    stadium.fillStadium();

if (i % 8=== 0) {
    club.generateSuperStar(1);
    
    var star = new Player("SuperStar");
    club.players.push(star);


}

club.earnings = stadium.tickets + stadium.soldShirts - club.costs;



}

console.log("Exelent season for " + club.name + " on " + stadium.name + ' with ' + club.totalGoals + ' goals.');
console.log('Earnings ' + club.earnings);
console.log('Damage from hooligans ' + club.costs);
console.log('Sold T-Shirts ' + stadium.soldShirts);
console.log('Sold tickets ' + stadium.soldTickets);


}




main();