const mongoose = require('mongoose');

async function connectMongo() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("❌ MONGO_URI não foi definida nas variáveis de ambiente!");
    process.exit(1);
  }

  const maxAttempts = 8;
  let attempt = 0;
  const wait = (ms) => new Promise(res => setTimeout(res, ms));

  while (attempt < maxAttempts) {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("✔️ Conectado ao MongoDB Atlas!");
      return;
    } catch (err) {
      attempt++;
      console.warn(`⚠️ Tentativa ${attempt}/${maxAttempts} de conexão ao MongoDB falhou:`, err.message);

      if (attempt >= maxAttempts) {
        console.error("❌ Não foi possível conectar ao MongoDB após várias tentativas. Saindo...");
        process.exit(1);
      }

      await wait(1000 * attempt);
    }
  }
}

module.exports = connectMongo;
