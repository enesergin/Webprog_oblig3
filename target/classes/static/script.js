function sjekkInput(){
    let input="";
    let tekst= "Skriv noe inn i feltet";

    $("#filmInput").html(input);
    $("#antallInput").html(input);
    $("#fornavnInput").html(input);
    $("#etternavnInput").html(input);
    $("#telefonInput").html(input);
    $("#emailInput").html(input);

    if ($("#film").val() === "Velg film" || $("#antall").val() === "" ||$("#fornavn").val() === "" || $("#etternavn").val() === "" || $("#telefon").val() === "" || $("#email").val() === "") {
        if ($("#film").val() === "Velg film") {
            $("#filmInput").html(tekst);
        }
        if ($("#antall").val() === "") {
            $("#antallInput").html(tekst);
        }
        if ($("#fornavn").val() === "") {
            $("#fornavnInput").html(tekst);
        }
        if ($("#etternavn").val() === "") {
            $("#etternavnInput").html(tekst);
        }
        if ($("#telefon").val() === "") {
            $("#telefonInput").html(tekst);
        }
        if ($("#email").val() === "") {
            $("#emailInput").html(tekst);
        }
    }
    else {
        const kunde = {
            film: $("#film").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefon: $("#telefon").val(),
            mail: $("#email").val()
        };


        $.post("/kunde", kunde, function () {
            $.get("/hentBilletter", function (data) {
                lagTabell(data);
            })
        });

        $("#film").val("");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefon").val("");
        $("#email").val("");
    }
}

function slettBilletter() {
    $.get("/slettBilletter",function (){
        let ut="";
        $("#visKunder").html(ut);
        $("#filmInput").html(ut);
        $("#antallInput").html(ut);
        $("#fornavnInput").html(ut);
        $("#etternavnInput").html(ut);
        $("#telefonInput").html(ut);
        $("#emailInput").html(ut);
    })
}

function lagTabell(billetter) {
    let ut = "<table class='table table-bordered table-striped'><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Mail</th></tr>";
    for (let billett of billetter) {
        ut += "<tr><td>" + billett.film + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td>" +
            "<td>" + billett.etternavn + "</td><td>" + billett.telefon + "</td><td>" + billett.mail + "</td></tr>";
    }
    ut+= "</table>";
    $("#visKunder").html(ut);
}