const infoWeb = {

    getInfoHome: (req,res)=>{
        console.log("*******AQUI SE MUESTRA LA HOME*******");
        res.render('home', {name:"Sara", number: 3});
        // console.log(req.params);
    },

    
    getInfoAbout: (req,res)=>{
        console.log("*******AQUI SE MUESTRA ABOUT************");
        // console.log(req.params);
    },

    getInfoLocation: (req,res)=>{
        console.log("******AQUI SE MUESTRA LOCATION*********");
        // console.log(req.params);
        
    },

    getInfoMission: (req,res)=>{
        console.log("******AQUI SE MUESTRA MISION*********");
        // console.log(req.params);
        
    },

    getInfoContact: (req,res)=>{
        console.log("*******AQUI SE MUESTRA CONTACTO********");
        // console.log(req.params);
        
    }

}

module.exports = infoWeb;


