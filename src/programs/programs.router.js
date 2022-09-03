const router = require('express').Router()
const programServices = require('./programs.http')
const chapterServices = require('../chapters/chapters.http')
const { get } = require('../app')
const multer = require('../utils/multer')



router.route('/')
.get(programServices.getAll)
.post(programServices.create)


router.route('/:id')
.get(programServices.getById)
.put(multer.updateCover,programServices.edit)
.delete(programServices.remove)

router.route('/:id/chapters')
.get(chapterServices.getAllC)
.post(chapterServices.createC)

router.route('/:id/chapters/:chapter_id')
.get(chapterServices.getByIdC)
.put(multer.updateChapter ,chapterServices.editC)
.delete(chapterServices.deleteC)



exports.router = router