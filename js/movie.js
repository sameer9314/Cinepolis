var selectedMovie="none";
function getMovieDetail(){
   
    return "1. "+movie1.name+"  2. "+movie2.name+"  3. "+movie3.name+"  4. "+movie4.name;
}
function selectMovie(choosenMovie){

    selectedMovie=choosenMovie;
}
function printSelectedMovieDetails(){
   
    switch(selectedMovie){
        case "MI4" : return movie1.name+" "+movie1.numberOfSeats+" "+movie1.price ;
        break;

        case "Fast & Furious" : return movie2.name+" "+movie2.numberOfSeats+" "+movie2.price ;
        break;

        case "Tears Of The Sun" : return movie3.name+" "+movie3.numberOfSeats+" "+movie3.price ;
        break;

        case "Black Hawk Down" : return movie4.name+" "+movie4.numberOfSeats+" "+movie4.price ;
        break;
    }
}
function getTotalPrice(numberOfTickets){
    
    switch(selectedMovie){
        case "MI4" : return movie1.price*numberOfTickets;
        break;

        case "Fast & Furious" : return movie2.price*numberOfTickets;
        break;

        case "Tears Of The Sun" : return movie3.price*numberOfTickets;
        break;

        case "Black Hawk Down" : return movie4.price*numberOfTickets;
        break;
    }
}

function printReport(numberOfTickets){
    
     return "Move Name : "+selectedMovie+"<div /> "+
     "Seat Selected : "+numberOfTickets+"<div />"+
     "Total price : "+getTotalPrice(numberOfTickets); 
}

function checkTicketAvailaibiliy(numberOfTickets){

    switch(selectedMovie){

        case "MI4" : 
                     
                     if(movie1.numberOfSeats>=numberOfTickets){ 
                        return true;
                     }
                     return false;

        case "Fast & Furious" : 
        
                    if(movie2.numberOfSeats>=numberOfTickets){ 
                         return true;
                     }
                     return false;

        case "Tears Of The Sun" : 
                    
                    if(movie3.numberOfSeats>=numberOfTickets){ 
                         return true;
                    }
                    return false;

        case "Black Hawk Down" :
        
                    if(movie4.numberOfSeats>=numberOfTickets){ 
                         return true;
                    }
                    return false;
    }
}


var movie1={
    name:"MI4",
    numberOfSeats:100,
    price:200
};
var movie2={
    name:"Fast & Furious",
    numberOfSeats:100,
    price:150
};

var movie3={
    name:"Tears Of The Sun",
    numberOfSeats:100,
    price:180
};

var movie4={
    name:"Black Hawk Down",
    numberOfSeats:100,
    price:250
};