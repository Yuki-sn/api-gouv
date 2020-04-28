function setOverlay(){
    $('body').append(`
        <div class="overlay"><img src="img/ajax-loader.svg"></div>
    `);
}

function removeOverlay(){
    $('.overlay').remove();
}


// Quand le bouton est cliqué
$('form').submit(function(e){

    e.preventDefault();

    $('form').find('.error').remove();

    $citySearch = $('#city').val();
    
    if($citySearch.length < 1 ){

        $('.view').html('<p class="error">champ vide</p>');
        
    } else {
        $.ajax({
            type: 'GET',
            url: 'https://geo.api.gouv.fr/communes/',
            dataType: 'json',
            data : $(this).serialize(),
            success: function(data){       
                //Création du tableau HTML avec en-têtes et tbody vide
                let cityTable = $(`
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Codes Postaux</th>
                                <th>Population</th>
                                <th>Département</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>`
                );

                // Pour chaque voiture dans le tableau data (voitures reçus via la requête AJAX), on crée un nouveau <tr> dans le tableau
                data.forEach(function(city){

                    // Création de la <tr> de la voiture en cours
                    let newCity = $('<tr></tr>');

                    // Création du premier <td> contenant la version protégée (.text) de la marque de la voiture
                    let cityName = $('<td></td>');
                    cityName.text(city.nom);

                    // Création du deuxième <td> contenant la version protégée (.text) de la couleur de la voiture
                    let cityCode = $('<td></td>');
                    cityCode.text(city.code);

                    // Création du troisème <td> contenant la version protégée (.text) de l'année de la voiture
                    let cityPopu = $('<td></td>');
                    cityPopu.text(city.population);

                    // Création du quatrième <td> contenant la version protégée (.text) des kilomètres de la voiture
                    let cityDepart = $('<td></td>');
                    cityDepart.text(city.codeDepartement);

                    // Insertion des 4 <td> dans la <tr>
                    newCity.append(cityName);
                    newCity.append(cityCode);
                    newCity.append(cityPopu);
                    newCity.append(cityDepart);
                    
                    // Insertion de la <tr> dans le <tbody> du tableau
                    cityTable.find('tbody').append(newCity);

                });

                // Insertion du tableau dans la page, dans la div .view (.html écrasera les anciens contenus de la div comme les erreurs / autres tableaux)
                $('.view').html( cityTable );
            },
            error: function(){
                // Si on est ici, c'est qu'il y a eu un problème, donc on affiche un message d'erreur
                $('.view').html('<p class="error">Problème de connexion</p>');
            },
            beforeSend: function(){

                // Avant l'envoi de la requête AJAX, on met en place l'overlay avec l'icône de chargement
                setOverlay();
            },
            complete: function(){

                // Après le retour de la requête AJAX, on supprime l'overlay avec l'icône de chargement
                removeOverlay();
            }
        });
    };
});