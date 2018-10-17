
function checkUserCredential(){

    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email=="s@gmail.com" && password=="123")
    {
        localStorage.setItem("userName","Sameer Saurabh");
        return true;
    }else{
    
        return false;   
    }
}

function bookTicket(){
    window.alert("Booking Ticket");
    var selectedMovie=document.getElementById("availableMovies").value;
    var numberOfSeats=document.getElementById("numberOfTickets").value;

    window.alert("Selected Movie is : "+selectedMovie);
    window.alert("numberOfSeats choosen : "+numberOfSeats);

    if(window.confirm("Click Ok To Confirm")){
        window.alert("Ticket is Booked");
        window.print();
        return true;
    }
    return false;
}
