
/*1. Vamos a capturar los datos que nos están enviando por la web */

fetch('https://jsonplaceholder.typicode.com/users')
.then((Response)=>{
    if(!Response.ok){
        throw new Error('la solicitud no fué exitosa');
    }
    return Response.json();
})
.then((data)=>{
    //console.log(data) //Verificamos que obtenemos la respuesta correcta
    //console.log(data[0].email) //Verificamos que podemos acceder a los datos
    //Hora de ponerse manos a la obra
    main(data); //Llamo a mi main que donde voy a trabajar con los datos.
})


/*IMPORTANTE: Fetch hace un refresh cuando actualizamos la página, por tanto fetch no extrae los datos constantemente */

/*Creamos una función para agrega una edad aleatoria a cada usuario.*/
function yearRandom(){
    return Math.floor(Math.random()*(55-10)+10);//Podemos usar Math.floor(Math.random()*(edadMaxima - edadMínima)+edadMínima) Creamos una variable aleatoria que llegue hasta 55 (65-10) la edad y que no sea inferior de 10
}

/*Creo una función para diseñar el index.html */
/*Hay que obtener:
    -Nombre
    -Edad
    -Username
    -Telefono
    -Email
    aparte
    -Compañia
    -Dirección
    */

//Voy a diseñar el index.htlm
function diseño(dat_modif){
    const personas=document.getElementById("listaUsuarios");
    console.log(dat_modif);
    let i=1;
    dat_modif.forEach(persona => { 
        personas.innerHTML += //Vamos a sacar todas las personas de dat_modif
        ` 
        <section class="capsula">
        <article class="personImange">
        <div class="persona">
            <p class="Nombre">Nombre: ${persona.name}</p> 
            <p class="Edad">Edad: ${persona.year}</p>
            <p class="User">Username: ${persona.username}</p>
            <p class="Telefono">Telefono: ${persona.phone}</p>
            <p class="Email">Email: ${persona.email}</p>
        </div>
        <div class="Image">
            <img src="assets/img/${i}.jpeg">
        </div>
        </article>
        <div class="company">
            <p class="Company">Compañia: ${persona.company.name}</p>
            <p class="Direction">Dirección: ${persona.address.street}, ${persona.address.suite}, ${persona.address.city}</p>
        </div>
        </section>
        `
        i++;
    })
}



/*Creo un Main donde voy a trabajar los datos*/
function main(data){
    const user=[...data];//Copio mis datos a user para manejarlos
    for (const i in user){ //Bucle para agregar los años
        user[i]={...user[i],year:yearRandom()}; //Añadimos a user el año aleatorio
    }
    //console.log (user);
    diseño(user);

}
    

