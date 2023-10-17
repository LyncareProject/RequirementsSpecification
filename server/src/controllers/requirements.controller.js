exports.requirementsCompleted = async (req, res) => {
  try {
    console.log(req.body)
  } catch(error){
    res.json(error)
  }
}