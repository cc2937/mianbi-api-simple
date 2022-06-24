const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const users = [
    { id: 1, type: 2, username: '华山', password: '123', name: '华晨', avatar: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h36tkf2rxrj20po0q4gp4.jpg', start: '2022-04-18', level: 3, score: 8876, badges: [] },
    { id: 2, type: 2, username: '小龙', password: '123', name: '方晓龙', avatar: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h36ok2cgx6j20py0q2jsy.jpg', start: '2022-04-18', level: 6, score: 66666, badges: [] },
]

const notes = [
    { id: 1, title: '学习 Express', content: '<p>反人性</p>', isPublic: true },
    { id: 2, title: '学习 Node.js', content: '</p>厉害的人反人性</p>', isPublic: false },
]

app.post('/auth/login', (req, res) => {
    const { username, password } = req.body
    const index = users.findIndex(u => u.username === username && u.password === password)
    if (index === -1) {
        res
            .status(400)
            .json({
                message: '用户名或密码错误',
            })
    } else {
        const token = String(Math.random()).slice(2)
        users[index].token = token
        res.json({ token })
    }
})

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
    const q = req.query.q || ''
    const isPublic = req.query.isPublic ? Boolean(+req.query.isPublic) : null
    const page = +req.query.page || 1
    const perPage = +req.query.perPage || 10

    const result = notes
        .filter(n => n.title.includes(q) || n.content.includes(q))
        .filter(n => {
            if (isPublic === null) return true
            return n.isPublic === isPublic
        })

    res.json({
        total: result.length,
        data: result.slice(perPage * (page - 1), perPage * page),
    })
})

app.get('/notes/:id', (req, res) => {
    const id = +req.params.id
    const note = notes.find(n => n.id === id)
    res.json(note)
})

app.put('/notes/:id', (req, res) => {
    const id = +req.params.id
    const index = notes.findIndex(n => n.id === id)
    notes[index] = {
        ...req.body,
        id,
    }
    res.json(notes[index])
})

app.delete('/notes/:id', (req, res) => {
    const id = +req.params.id
    const index = notes.findIndex(n => n.id === id)
    notes.splice(index, 1)
    res.json()
})

app.listen(5555)
