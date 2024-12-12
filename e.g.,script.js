


    
    window.onload = function() {
        
        setTimeout(function() {
            document.querySelector('.preloader').style.display = 'none';
        }, 3000); 
    
    };


function initAOS() {
            AOS.init();
        }

        
        setTimeout(initAOS, 3500);
   

 
        
  function showSwalAlert() {
  Swal.fire({
    title: 'Hello Carleen',
    html: `
        <i class="fab fa-linux fa-5x"></i><br>
        <p>This post contains content related to Linux, and a huge thanks goes to <a href='https://www.sololearn.com/profile/28867911/?ref=app'>Raymarc 반테</a>&nbsp;</p>
    `,
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    }
});

}




setTimeout(showSwalAlert, 5000);
        