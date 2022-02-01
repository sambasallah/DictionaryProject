const DictionaryInstance = require('../model/DictionaryModel');


exports.get_defination = function(req, res)  {
    const word = req.query.word;
    DictionaryInstance.Get_Defination(word,(err, data) => {
        if(err) {
            return res.status(500).send({
                message: err.message || "Some error occured"
            });
        } else return res.send({result: data});
    });
}