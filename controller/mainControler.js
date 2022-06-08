let mainController ={

    index: function(req,res){

        setInterval(() => {
            
        }, );
        let fecha = new Date()
        let semana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
        let mes =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        let diaNuevo;
        let estado;

        if(fecha.getHours() >= 12){
            estado ="PM"
        }else{
            estado ="AM"
        }


        if (fecha.getDate()<10){
            diaNuevo = `0${fecha.getDate()}`
        }else
            diaNuevo = `${fecha.getDate()}`

        hora = fecha.toLocaleTimeString(),


        res.render('main',
        {
            diaCompleto:semana[fecha.getDay()] +" "+ diaNuevo + " "+mes[fecha.getMonth()]+ " " + "de " +fecha.getFullYear(),
            estado:estado,
            horaCompleta: hora,


        }
    )

    },
}



module.exports = mainController;


