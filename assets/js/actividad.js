
const tagInsertar = document.getElementById("insertarPropiedades")
const total = document.getElementById("total")

const insertarpropiedades = ()=>{
    let contador = 0;
    let dataPropiedad = ''
    for(propiedad of propiedadesJSON){
        dataPropiedad += `<div class="propiedad">
        <div class="img" style="background-image: url('${propiedad.src}')"></div>
        <section>
        <h5>${propiedad.name}</h5>
        <div class="d-flex justify-content-between">
        <p>Cuartos: ${propiedad.rooms}</p>
        <p>Metros: ${propiedad.m}</p>
        </div>
        <p class="my-3">${propiedad.description}</p>
        <button class="btn btn-info ">Ver más</button>
        </section>
        </div> `
        contador++;
    }
    tagInsertar.innerHTML = dataPropiedad; 
    if (contador == 0){
        total.innerHTML = "TOTAL: 0"   
    }else{
        total.innerHTML = "TOTAL: "+contador
    }
    }

insertarpropiedades()

const buscar = () =>{

    const metrosDesde = document.getElementById("mdesde").value;
    const metrosHasta = document.getElementById("mhasta").value;
    const cDeCuartos  = document.getElementById("cdecuartos").value;

    if(metrosDesde && metrosHasta && cDeCuartos){
        let contador = 0;
        let dataPropiedad2 = ''
        for(propiedad2 of propiedadesJSON){
            
            if((propiedad2.m >= metrosDesde) && (propiedad2.m <= metrosHasta) && (propiedad2.rooms == cDeCuartos)){
                console.log("hola")
            dataPropiedad2 +=`<div class="propiedad">
                <div class="img" style="background-image: url('${propiedad2.src}')"></div>
                <section>
                <h5>${propiedad2.name}</h5>
                <div class="d-flex justify-content-between">
                <p>Cuartos: ${propiedad2.rooms}</p>
                <p>Metros: ${propiedad2.m}</p>
                </div>
                <p class="my-3">${propiedad2.description}</p>
                <button class="btn btn-info ">Ver más</button>
                </section>
                </div> `
                
                contador++;
            }
        }
        tagInsertar.innerHTML = dataPropiedad2;
        if (contador == 0){
            total.innerHTML =  "NO HAY COINCIDENCIAS"  
        }else{
            total.innerHTML = "TOTAL: "+contador
        }
    }else{
            alert("falta información")
    }

}