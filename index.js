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

const banners = [
    { id: 1, url: 'https://tva1.sinaimg.cn/large/e6c9d24ely1h3o4w6hnk9j21te0oq0zi.jpg' },
    { id: 2, url: 'https://tva1.sinaimg.cn/large/e6c9d24ely1h3o4w9ijvxj21sw0okte0.jpg' },
    { id: 3, url: 'https://tva1.sinaimg.cn/large/e6c9d24ely1h3o4wc2rvbj21ga0lkjup.jpg' },
]

const courses = [
    { id: 1, title: '面壁计划 1', pic: 'https://img2.doubanio.com/view/subject/l/public/s34214722.jpg' },
    { id: 2, title: '面壁计划 2', pic: 'https://img1.doubanio.com/view/subject/l/public/s34196508.jpg' },
    { id: 3, title: '面壁计划 3', pic: 'https://img1.doubanio.com/view/subject/l/public/s34215218.jpg' },
    { id: 4, title: '面壁计划 4', pic: 'https://img3.doubanio.com/view/subject/l/public/s34212130.jpg' },
    { id: 5, title: '面壁计划 5', pic: 'https://img1.doubanio.com/view/subject/l/public/s34187887.jpg' },
    { id: 6, title: '面壁计划 6', pic: 'https://img1.doubanio.com/view/subject/l/public/s33956867.jpg' },
    { id: 7, title: '面壁计划 7', pic: 'https://img2.doubanio.com/view/subject/l/public/s33944153.jpg' },
    { id: 8, title: '面壁计划 8', pic: 'https://img2.doubanio.com/view/subject/l/public/s34072342.jpg' },
    { id: 9, title: '面壁计划 9', pic: 'https://img9.doubanio.com/view/subject/l/public/s34008354.jpg' },
]

const punches = [
    {
        id: 1,
        user: {
            id: 10,
            nick: '小猫',
            avatar: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h36ok2cgx6j20py0q2jsy.jpg',
            status: '今天不学习，明天就哭了',
        },
        content: '今天的收获是：只看不做是学不会的，看 100 遍都学不会，只有做，不断做，不断思考，不断找老师提问交流得到反馈，才能学会！刘思毅，加油加油加油！！！',
        pics: [
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
        ],
        createdAt: '2022-06-30T20:00:00.012+0800',
        likes: [
            { id: 1, nick: '华晨' },
            { id: 2, nick: '小龙龙' },
        ],
        reviews: [
            {
                id: 1,
                user: { id: 3, nick: '大龙' },
                content: '小龙，加油！',
            },
            {
                id: 2,
                user: { id: 3, nick: '龙王' },
                content: '小龙，加油！！',
            },
        ],
    },
    {
        id: 2,
        user: {
            id: 10,
            nick: '老猫',
            avatar: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h36ok2cgx6j20py0q2jsy.jpg',
            status: '',
        },
        content: '今日是今日毕',
        pics: [
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
        ],
        createdAt: '2022-06-30T16:00:00.012+0800',
        likes: [],
        reviews: [
            {
                id: 3,
                user: { id: 3, nick: '大龙' },
                content: '小龙，加油！',
            },
            {
                id: 4,
                user: { id: 3, nick: '龙王' },
                content: '小龙，加油！！',
            },
        ],
    },
    {
        id: 3,
        user: {
            id: 10,
            nick: '小猫',
            avatar: 'https://tva1.sinaimg.cn/large/e6c9d24egy1h36ok2cgx6j20py0q2jsy.jpg',
            status: '今天不学习，明天就哭了',
        },
        content: '今天的收获是：只看不做是学不会的，看 100 遍都学不会，只有做，不断做，不断思考，不断找老师提问交流得到反馈，才能学会！刘思毅，加油加油加油！！！',
        pics: [
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
            'https://tva1.sinaimg.cn/large/e6c9d24ely1h3qa6yhzw8j21410u0wgy.jpg',
        ],
        createdAt: '2022-06-30T06:00:00.012+0800',
        likes: [
            { id: 1, nick: '华晨' },
            { id: 2, nick: '小龙龙' },
        ],
        reviews: [],
    },
]

app.get('/punches', (req, res) => {
    const page = +req.query.page || 1
    const perPage = +req.query.perPage || 2

    const result = punches
        .slice(perPage * (page - 1), perPage * page)

    res.json({
        total: punches.length,
        data: result,
    })
})

app.get('/courses', (req, res) => {
    const page = +req.query.page || 1
    const perPage = +req.query.perPage || 4

    const result = courses
        .slice(perPage * (page - 1), perPage * page)

    res.json({
        total: courses.length,
        data: result,
    })
})

app.get('/banners', (req, res) => {
    res.json(banners)
})

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
    const token = (req.headers.authorization || '').slice(7) // 'Bearer xxx'

    const index = users.findIndex(u => u.token === token)
    if (index === -1) {
        return res.status(401).json({
            message: '请登录',
        })
    }

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
