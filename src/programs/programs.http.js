const programsController = require('./programs.controller')

const getAll = (req, res) => {
    const data = programsController.getAllPrograms();
    res.status(200).json({items: data.length, programs: data})
}

const getById = (req, res) => {
    const id = req.params.id 
    const data = programsController.getProgramById(id)
    
    if (data){
        res.status(200).json(data)
    } res.status(404).json({message: 'el programa no existe'})

}

const create = (req, res) => {
    const data = req.body
    if (!data){
        res.status(400).json({message: 'Missing data'})
    } else if (
        data.title ||
        data.description ||
        data.seasons ||
        data.cover ||
        data.categories
    ) {return res.status(400).json({message: 'all fields must be completed',
            fields: {
                title: 'string',
                description: 'string',
                seasons: 'number',
                cover: 'img',
                categories: 'string'
            }
        })} else {
            const response = programsController.createProgram
            res.status(201).json({message: 'user created succesfully', program: response})
        }
}


const edit = (req, res) => {
    const id = req.params.id
    const data = req.body
    if (!Object.keys(data).length) {
        return res.status(400).json({ message: "Missing Data" });
      } else if (
        !data.title ||
        !data.description ||
        !data.seasons ||
        !data.cover ||
        !data.categories 
      ) {
        return res.status(400).json({
          message: "All fields must be completed",
          fields: {
            title: 'string',
            description: 'string',
            seasons: 'number',
            cover: 'img',
            categories: 'string'
          },
        });
      } else {
        const response = programsController.editProgram(id, data)
        return res.status(200).json({
          message: 'program edited succesfully',
          program: response
        })
      }
    };


    const remove = (req, res) => {
        const id = req.params.id
        const data = programsController.deleteProgram(id)

        if (data){
            return res.status(204).json({message: 'se elimino correctamente'})
        } return res.status(400).json({message: 'Invalid ID'})
    }


    module.exports = {
        getAll,
        getById,
        create,
        edit,
        remove
    }