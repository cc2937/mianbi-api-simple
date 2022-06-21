const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const users = [
    { id: 1, type: 2, username: '华山', name: '华晨', avatar: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h36tkf2rxrj20po0q4gp4.jpg', start: '2022-04-18', level: 3, score: 8876, badges: [] },
    { id: 2, type: 2, username: '小龙', name: '方晓龙', avatar: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h36ok2cgx6j20py0q2jsy.jpg', start: '2022-04-18', level: 6, score: 66666, badges: [] },
]

const notes = [
    { id: 1, title: '学习 Express', content: '反人性' },
    { id: 2, title: '学习 Node.js', content: '厉害的人反人性' },
]

app.get('/users', (req, res) => {
    const page = +req.query.page || 1
    const perPage = +req.query.perPage || 10
    const q = req.query.q || ''
    const sex = +req.query.sex || null

    const result = users
        .filter(user => user.username.includes(q))
        .filter(user => {
            if (sex === null) return true
            return user.sex === sex
        })
        .slice(perPage * (page - 1), perPage * page)

    res.json(result)
})

app.post('/users', (req, res) => {
    const user = {
        ...req.body,
        id: Math.max(...users.map(u => u.id)) + 1,
    }
    users.push(user)
    res.json(user)
})

app.get('/users/:id', (req, res) => {
    const id = +req.params.id
    const user = users.find(u => u.id === id)
    res.json(user)
})

app.put('/users/:id', (req, res) => {
    const id = +req.params.id
    const index = users.findIndex(u => u.id === id)
    users[index] = {
        ...req.body,
        id,
    }
    res.json(users[index])
})

app.delete('/users/:id', (req, res) => {
    const id = +req.params.id
    const index = users.findIndex(u => u.id === id)
    users.splice(index, 1)
    res.json()
})

app.get('/notes', (req, res) => {
    res.json(notes)
})

app.listen(5555)
