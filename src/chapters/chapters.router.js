const router = require('express').Router
const { route } = require('../app')
const chapterServices = require('./chapters.http')

router.route('/:id/chapters')
.get(chapterServices.getAllC)
.post(chapterServices.createC)

router.route('/:id/chapters/:id')
.get(chapterServices.getByIdC)
.put(chapterServices.editC)
.delete(chapterServices.deleteC)


exports.router = router