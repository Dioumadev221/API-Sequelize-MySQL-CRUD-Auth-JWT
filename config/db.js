const Sequelize=require('sequelize');
const ENV=require('./index')
console.log("🔄️ Initialisation de la connection à MySQL...");

const db = new Sequelize(ENV.DATABASE,ENV.USER,ENV.PASSWORD,{
    host:ENV.HOST,
    dialect:ENV.DIALECT,
    login:false
})

const connection = async () => {
    try{
        console.log("🔄️ Tentative de connection...");
        await db.authenticate();
        console.log('✅ Connection réussie à MySQL');
        

    }catch(error) {
        console.log('❌ Erreur de connection : ',error.message);
        
    }
}
connection();
module.exports=db;
