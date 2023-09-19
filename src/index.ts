import express, { Router } from 'express'

const app = express()
const router = Router()

// Configurando o Express
app.use(express.json()) // Configurando para reber JSON
app.use(router)

// GET, POST, OUT, DELETE, PATH

router.get('/', (request, response) =>
  response.json({ ola: 'Ola mundo', nome: 'VITORZAAO O MAIS LINDO DA ESCOLA SESI CONSELHEIRO SARAIVA' }))

router.post('/formulario', (request, response) => {
  // nome, email
  const { nome, email } = request.body
  return response.json({ nome, email })
})

app.listen(3000, () => { console.log('Running port 3000') })
