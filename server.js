console.log('🚀 Demarrage du serveur...');
const express=require('express')
const ENV=require('./config');
const db = require('./config/db');
const app=express();











const PORT=ENV.PORT||3000;

const startServer = async () =>{
    try{
        await db.sync({force:false})
        console.log("✅ Database syncronisée");
        
        app.listen(PORT,() => {
            console.log(`  🚀 server running on http://localhost:${PORT}`);
            
        })
        

    }catch(error) {
        console.error('❌ Error syncing database : ',error.message);
        
    }
}
startServer();