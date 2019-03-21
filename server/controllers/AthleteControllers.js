let id = 1
let mens = [
    {
        id: id++,
        name: "Nick Rack",
        gender: "Male",
        event: "110m Hurdles",
        bestMark: "14.01"

    },
    {
        id: id++,
        name: "Luis Carson",
        gender: "Male",
        event: "High Jump",
        bestMark: "6"

    }
]
let womens = [
  {
    id: id++,
    name: "Lauren Irish",
    gender: "Female",
    event: "400m Hurdles",
    bestMark: "61.40"
  },
  {
    id: id++,
    name: "Claudia Cox",
    gender: "Female",
    event: "400m Hurdles",
    bestMark: "59.01"
  }
]

let athletes = [...mens, ...womens]

module.exports = {
  get: (req, res) => {
    res.send(athletes)
  },
  getSort: (req, res) => {
    let { gender } = req.params 
    if(gender === "female") {
        res.send(womens)
    } else if(gender === "male") {
        res.send(mens)
    }

  },
  createMale: (req, res) => {
    let { name, gender, event, bestMark } = req.body
    if(gender === "male") {
        let male = { 
          id: id++, 
          name, 
          gender, 
          event,
          bestMark 
        }
        mens.push(male)
        athletes.push(male)

    }

    res.send(mens)
  }, 
  createFemale: (req, res) => {
    let { name, gender, event, bestMark } = req.body
    if(gender === "female") {
        let female = { 
          id: id++, 
          name, 
          gender, 
          event,
          bestMark 
        }
        womens.push(female)
        athletes.push(female)
    }
    res.send(womens)
  },

  updateFemale: (req, res) => {
    let { name, gender, event, bestMark } = req.body
    let updatedFemale = {
        id: req.params.id, 
        name, 
        gender, 
        event,
        bestMark 
    }

    let index = womens.findIndex(woman => Number(woman.id) === Number(req.params.id))

    womens.splice(index, 1, updatedFemale)
    athletes.splice(index, 1, updatedFemale)
    res.send(womens)
  },

  updateMale: (req, res) => {
    let { name, gender, event, bestMark } = req.body

    let updatedMale = {
        id: req.params.id, 
        name, 
        gender, 
        event,
        bestMark 
    }

    let index = mens.findIndex(man => Number(man.id) === Number(req.params.id))

    mens.splice(index, 1, updatedMale)
    athletes.splice(index, 1, updatedMale)
    res.send(mens)
  }

}