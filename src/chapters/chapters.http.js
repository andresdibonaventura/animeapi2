const chaptersController = require("./chapters.controllers");
const programsController = require("../programs/programs.controller");

const getAllC = (req, res) => {
  const id = req.params.id;
  const data = programsController.getProgramById(id);
  const dataC = chaptersController.getChaptersByProgram(id);
  if (data) {
    return res.status(200).json({ ...data, chapters: dataC });
  }
  res.status(404).json({ message: "el programa no existe" });
};

const getByIdC = (req, res) => {
  const chapter_id = req.params.chapter_id;
  const data = chaptersController.getChapterById(chapter_id);
  if (data) {
    res.status(200).json(data);
  }
  res.status(404).json({ message: "el capitulo no existe" });
};

const createC = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing data" });
  } else if (
     !data.program_id ||
    !data.chapter_num ||
    !data.url
  ) {
    return res.status(400).json({ message: "all fileds must be commpleted" });
  } else {
    const response = chaptersController.createChapter(data);
    
    return res.status(201)
.json({ message: "capitulo creado correctamente", chapter: response });
  }
};

const editC = (req, res) => {
  const chapter_id = req.params.chapter_id;
  const data = req.body;
  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (!data.program_id || !data.chap_number || !data.url) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        program_id: "string",
        chap_number: "number",
        url: "string",
      },
    });
  } else {
    const response = chaptersController.editChapter(chapter_id, data);
    return res.status(200).json({
      message: "chapter edited succesfully",
      chapter: response,
    });
  }
};

const deleteC = (req, res) => {
  const chapter_id = req.params.chapter_id;
  const data = chaptersController.deleteChapter(chapter_id);

  if (data) {
    res.status(204).json({ message: "se elimino correctamente" });
  } else {
    res.status(400).json({ message: "capitulo no encontrado" });
  }
};

// const postChapterVideo = (req, res)
// const chapterId = req.params.id

// const videoPath = req.hostname + ':8000' + '/api/v1/uploads' + req.file.filename

// const data = chaptersController.editChapter(chapterId, videoPath)
// res.status(200).json(data)




module.exports = {
  getAllC,
  getByIdC,
  createC,
  editC,
  deleteC,
 
};
