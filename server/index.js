const express = require('express')
const app = express()

const path = require('path')
const PORT = process.env.PORT || 3000

const fs = require('fs')
const indexPath = path.resolve(__dirname, '..', 'build', 'index.html')

const datas = {
    'home': {
        title: 'GG Klen',
        meta_og_title: 'Yasalam',
        meta_og_description: 'Yasalam Sa ae lau',
        meta_og_image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
        meta_description: 'Smilikitiw'
    },
    'one': {
        title: 'GG Klen 2',
        meta_og_title: 'Yasalam 2',
        meta_og_description: 'Yasalam Sa ae lau 2',
        meta_og_image: 'https://images.unsplash.com/photo-1625034712314-7bd692b60ecb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        meta_description: 'Smilikitiw'
    },
    'two': {
        title: 'GG Klen 3',
        meta_og_title: 'Yasalam 3',
        meta_og_description: 'Yasalam Sa ae lau 3',
        meta_og_image: 'https://images.unsplash.com/photo-1625034892070-6a3cc12edb42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80',
        meta_description: 'Smilikitiw'
    }
}

app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' }
))

app.get('/*', (req, res, next) => {
    const urlPath = req.params[0].split("/")[0] || "home"
    console.log(">>>>", urlPath)
    fs.readFile(indexPath, 'utf-8', (err, html) => {
        if (err) {
            console.log('Error reading html file:', err)
            return res.status(404).end()
        }

        if (datas[urlPath]) {            
            html = html.replace("<title>__TITLE__</title>", `<title>${datas[urlPath].title}</title>`)
                .replace('__META_DESCRIPTION__', datas[urlPath].meta_description)
                .replace('__META_OG_TITLE__', datas[urlPath].meta_og_title)
                .replace('__META_OG_DESCRIPTION__', datas[urlPath].meta_og_description)
                .replace('__META_OG_IMAGE__', datas[urlPath].meta_og_image)
        }

        res.send(html)
    })
})

app.listen(PORT, (err) => {
    if (err) {
        return console.log('Error running express server: ', err)
    }
    console.log(`Listening on port ${PORT}`)
})