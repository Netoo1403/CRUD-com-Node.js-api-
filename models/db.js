const Sequelize = require("sequelize");

const sequelize = new Sequelize('celke', "root", "123456789", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
    console.log("deu bom a conexão!");
}).catch(function(){
    console.log("deu ruim a conexão!")
})
module.exports = sequelize;