import app from "./app.js"
import db from "./database/connection.js"

const PORT = process.env.PORT || 3000

// 🔥 TESTE DE CONEXÃO COM MYSQL
db.getConnection()
    .then(conn => {
        console.log("✅ MySQL conectado")
        conn.release()
    })
    .catch(err => {
        console.error("❌ Erro MySQL:", err)
    })

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
})