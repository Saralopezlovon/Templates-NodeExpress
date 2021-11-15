const infoWeb = {

    getInfoHome: (req,res)=>{
        console.log("*******AQUI SE MUESTRA LA HOME*******");
        res.render('home', {name:"Empresa SL"});
        // console.log(req.params);
    },

    
    getInfoAbout: (req,res)=>{
        console.log("*******AQUI SE MUESTRA ABOUT************");
        res.render('about', {description:"Nos dedicamos al diseño de prendas de ropa"});
        // console.log(req.params);
    },

    getInfoLocation: (req,res)=>{
        console.log("******AQUI SE MUESTRA LOCATION*********");
        res.render('location', {direccion:"Calle Pez 13"});
        // console.log(req.params);
        
    },

    getInfoMission: (req,res)=>{
        console.log("******AQUI SE MUESTRA MISION*********");
        res.render('mission', {slogan:"Diseño personalizado"});
        // console.log(req.params);
        
    },

    getInfoContact: (req,res)=>{
        console.log("*******AQUI SE MUESTRA CONTACTO********");
        res.render('contact', {email:"empresaSL@gmail.com", tel: 915478521, street:"Calle Pez 13"});
        // console.log(req.params);
        
    }

}

module.exports = infoWeb;


