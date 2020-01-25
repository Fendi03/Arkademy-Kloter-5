const express = require('express');
const path = require('path');
const app = express();
const port = 3001;
const dbConn = require('./lib/mysql/connection.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{

    let dataCashier = [];
    dbConn.query('SELECT * FROM cashier', (err,data)=>{
        dataCashier = data
    })
    let dataCategory = [];
    dbConn.query('SELECT * FROM category', (err,data2)=>{
        dataCategory = data2
    })
    dbConn.query('SELECT * FROM product INNER JOIN cashier ON cashier.id = product.id_cashier','SELECT * FROM product INNER JOIN category ON category.id = product.id_category',(err,data, data2)=>{
        res.render('index',{dataShop: data, data2, dataCashier, dataCategory});
    })
    
})

app.get('/add', (req,res)=>{
    res.redirect('/')
})

app.post('/create',(req,res)=>{
    const {id_cashier, product, id_category, price} = req.body;
    dbConn.query('INSERT INTO product SET ?', {id_cashier, product, id_category, price}, (err)=>{
        if (err) throw err;
        res.redirect('back');
    });
})

app.get('/delete', (req, res) => {
    const {id} = req.query;
    dbConn.query('DELETE FROM product WHERE id = ?', id, (err)=>{
        if (err) throw err;
        res.redirect('/');
    }); 
});

app.post('/update',(req,res) => {
    const {id, id_cashier, product, id_category, price} = req.body;
    dbConn.query("UPDATE product SET id_cashier='"+id_cashier+"', product='"+product+"', id_category='"+id_category+"', price="+price+" WHERE id="+id+';', (err)=>{
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});