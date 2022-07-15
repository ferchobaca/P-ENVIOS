const route = require ('express').Router();
const conecction = require('../config/conecctionBD')
const express = require("express");

route.get('/h', (req, res) =>{
    res.send('Ruta principal');
});

route.get('/login', (req, res) => {
    res.send('Ruta loggin');
});



route.get('/bd',(req, res) => {
    let query = "select * from paquete";

    conecction.query(query,(error1,rows) => {
        if (error1)
            console.error(error1);
        else
            res.send(rows);
    })
});

route.get('/bd/:id',(req, res) => {
    const {id} = req.params;
    let query = "select * from paquete where idpaquete =?";
    conecction.query(query,[id],(error2,rows) => {
        if (error2)
            console.error(error2);
        else
            res.send(rows);
    });
});
/*route.delete('/bd/:id',(req, res) => {
    const {id} = req.params;
    let query = "DELETE from paquetes where idpaquete =?";
    conecction.query(query,[id],(error2,rows) => {
        if (error2)
            console.error(error2);
        else
            res.send("ok");
    });
});*/
route.post('/bd/a',(req, res) => {
    const {fechaRegistro, remitente, destinatario, direccion, municipio, colonia, estado, latitud, longitud, peso, dimensionX, dimensionY, dimensionZ, correoNotif} = req.body;
    let query = "INSERT INTO paquete(fechaRegistro, remitente, destinatario, direccion, municipio, colonia, estado, latitud, longitud, peso, dimensionX, dimensionY, dimensionZ, correoNotif) VALUES('"+fechaRegistro+"','"+remitente+"','"+destinatario+"','"+direccion+"','"+municipio+"','"+colonia+"','"+estado+"',"+latitud+","+longitud+","+peso+","+dimensionX+","+dimensionY+","+dimensionZ+",'"+correoNotif+"')";
    conecction.query(query,(error2,rows) => {
        if (error2)
        {
            console.log(query);
            console.error(error2);
        }

        else
        {
            res.send("Se ha agregado el dato");

        }

    });
});
route.put('/bd/c',(req, res) => {
    const {idPaqueteDetalle, reportadoPor,estado, notificado} = req.body;
    let query = "UPDATE paqueteDetalle SET notificado = '"+notificado+"' , estado = '"+estado+"' , reportadoPor = '"+reportadoPor+"' where idpaqueteDetalle ="+idPaqueteDetalle+"";
    conecction.query(query,(error2,rows) => {
        if (error2)
            console.error(error2);
        else
            res.send("Se actualizo correctamente");
    });
});


module.exports = route;