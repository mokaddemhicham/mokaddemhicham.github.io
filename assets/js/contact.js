$('#submit').on('click', ()=>{
    let name = $("#name").val();
    let email = $("#email").val();
    let project = $("#project").val();
    let message = $("#message").val();
    if(name == '' || email == '' || project == '' || message == ''){
        $('#feedback').html("Veuillez compléter tous les champs s'il vous plaît!").css("display","block");
    }else{
        $.ajax({
            type: "POST",
            url: "http://api.bridgens.ma/contact.php",
            data: {
                name: name,
                email: email,
                project: project,
                message: message,
            },
            success: (res)=>{
                if(res === "Veuillez fournir une adresse email valide s'il vous plaît!"){
                    $('#feedback').html(res).css("display","block");
                    $("#email").val('');
                }else{
                    $('#feedback').html(res).css({"display":"block","color":"green"});
                    $("#name").val('');
                    $("#email").val('');
                    $("#project").val('');
                    $("#message").val('');
                }
            },
            error: (xhr, status, error)=>{
                console.log(error);
                console.log(status);
            }
        })
    }
});