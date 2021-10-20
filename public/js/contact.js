(function(){
    $('#contact-btn-submit').click(function(event){
        if(event){
            event.preventDefault()
        }
        var visitor={
            name:$('#edd-user-name').val(),
            email:$('#edd-user-email').val(),
            subject:$('#edd-user-subject').val(),
            message:$('#edd-user-message').val()
        }
        console.log('form submitted!! '+JSON.stringify(visitor))
        $.ajax({
            url: '/api/subscriber',
            type: 'POST',
            data: visitor,
            success: function(response){
                console.log('Subscriber created: '+JSON.stringify(response))
            },
            error: function(response){}
        })
    })
})()