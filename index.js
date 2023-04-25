/*function addingEventListener() {
}*/


function addingEventListener(){
    const clickAlert = document.getElementById('button');
    clickAlert.addEventListener('click', function() {
        alert('I was clicked');
    });
}