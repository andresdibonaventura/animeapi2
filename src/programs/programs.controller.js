const uuid = require('uuid')


const programsDB = [
  {
    id: "88ebed0b-8095-4190-adde-d1165ca48815",
    title: "Boku no hero academia",
    description:
      "Las personas no nacen igual. El protagonista de esta historia es uno de esos casos raros que nacen sin superpoderes, pero esto no le impedirá perseguir su sueño: ser un gran héroe como el legendario All-Might. Para convertirse en el héroe que quiere ser, se apuntará a una de las academias de héroes más prestigiosas del país: Yueiko. Con la ayuda de su ídolo, All-Might, ¿podrá convertirse en un verdadero héroe?",
    seasons: 4,
    cover: "localhost:8000/uploads/animes/bnha-cover.jpg",
    categories: ["Accion", "Comedia", "Escolares", "Shounen", "Superpoderes"],
    chapters:  
    
    
    [{
      id: "07b7031f-8345-46e9-b352-bd51611b3921",
      program_id: "88ebed0b-8095-4190-adde-d1165ca48815",
      chap_number: 1,
      url: 'a'
    }, {
      id: "b25406c8-ed3b-48ba-8e18-7a70c5cf81ab",
      program_id: "88ebed0b-8095-4190-adde-d1165ca48815",
      chap_number: 2,
      url: 'a'
    }, {
      id: "cada8bc1-c559-48ec-901f-6e3a090d8e42",
      program_id: "88ebed0b-8095-4190-adde-d1165ca48815",
      chap_number: 3,
      url: 'a'
    }, {
      id: "5574c369-de45-477a-8652-dfe69d250341",
      program_id: "88ebed0b-8095-4190-adde-d1165ca48815",
      chap_number: 4,
      url: 'a'
    }]
  },
  {
    id: "1",
    title: "Hola",
    description:
      "Las personas no nacen igual. El protagonista de esta historia es uno de esos casos raros que nacen sin superpoderes, pero esto no le impedirá perseguir su sueño: ser un gran héroe como el legendario All-Might. Para convertirse en el héroe que quiere ser, se apuntará a una de las academias de héroes más prestigiosas del país: Yueiko. Con la ayuda de su ídolo, All-Might, ¿podrá convertirse en un verdadero héroe?",
    seasons: 4,
    cover: "localhost:8000/uploads/animes/bnha-cover.jpg",
    categories: ["Accion", "Comedia", "Escolares", "Shounen", "Superpoderes"],
    chapters:  
    
    
    [{
      id: "07b7031f-8345-46e9-b352-bd51611b3921",
      program_id: "88ebed0b-8095-4190-adde-d1165ca48815",
      chap_number: 1,
      url: 'a'
    }, {
      id: "b25406c8-ed3b-48ba-8e18-7a70c5cf81ab",
      program_id: "88ebed0b-8095-4190-adde-d1165ca48815",
      chap_number: 2,
      url: 'a'
    }, {
      id: "cada8bc1-c559-48ec-901f-6e3a090d8e42",
      program_id: "88ebed0b-8095-4190-adde-d1165ca48815",
      chap_number: 3,
      url: 'a'
    }, {
      id: "5574c369-de45-477a-8652-dfe69d250341",
      program_id: "88ebed0b-8095-4190-adde-d1165ca48815",
      chap_number: 4,
      url: 'a'
    }]
  }
];


const getAllPrograms = () => {
  return programsDB;
};

const getProgramById = (id) => {
  const data = programsDB.filter((program) => program.id === id);
  return data[0];
};

const createProgram = (data, program_id) => {
  const newProgram = {
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    seasons: data.seasons,
    cover: data.cover,
    categories: data.categories,
  };
  programsDB.push(newProgram);
  return newProgram;
};

const deleteProgram = (id) => {
  const index = programsDB.findIndex((program) => program.id === id);
  if (index !== -1) {
    programsDB.slice(index, 1);
    return true;
  }
  return false;
};

const editProgram = (id, data) => {
  const index = programsDB.findIndex((program) => program.id === id);
  const editedProgram = {
    id: id,
    title: data.title ? data.title : programsDB[index].title,
    description: data.description ? data.description : programsDB[index].description,
    seasons: data.seasons ? data.seasons : programsDB[index].seasons,
    cover: data.cover ? data.cover : programsDB[index].cover,
    categories: data.categories ? data.categories : programsDB[index].categories,
  };
  if (index !== -1) {
    programsDB[index] = editedProgram;
    return programsDB[index];
  }
  return false;
};

const getChaptersByProgram = (programID) => {
  const data = programsDB.chapters.filter((chapter) => chapter.program_id === programID);
  return data;
};


const getChapterById = (id) => {
  const data = programsDB.chapters.filter(item => item.id === id)
  return data.legth ? data[0] : null
}

const createChapter = () => {
  const newChapter = {
    id: uuid.v4(),
    program_id: data.program_id,
    chapters: data.chapters,
    url: data.url
  }
  programsDB.chapters.push(newChapter)
  return newChapter
}

const deleteChapter = (id) => {
  const index = programsDB.chapters.findIndex((chapter) => chapter.id === id);
  if (index !== -1) {
    programsDB.chapters.slice(index, 1);
    return true;
  }
  return false;
}

const editChapter = (id, data) => {
  const index = programsDB.chapters.findIndex((chapter) => chapter.id === id);
  const editedChapter = {
    id: id,
    program_id: data.program_id ? data.program_id : programsDB.chapters[index].program_id,
    chapter: data.chapter ? data.chapter : programsDB.chapters[index].chapter,
    url: data.url ? data.url : programsDB.chapters[index].url
  
  };
  if (index !== -1) {
    programsDB.chapters[index] = editedChapter;
    return programsDB.chapters[index];
  }
  return false;
}

module.exports = {
  getAllPrograms,
  getProgramById,
  editProgram,
  createProgram,
  deleteProgram,
  getChaptersByProgram,
  getChapterById,
  editChapter,
  deleteChapter,
  createChapter
}