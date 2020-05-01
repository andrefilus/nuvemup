const Lote = require('../models/Lote');

class LoteController {

    async index(req,res){
        try{
            var options = {
                limit: 10,
                page: 1,
                populate: ['users']
            };
            try{
                const { page = 1 } = req.query;
                const lotes = await Lote.paginate({}, options,function(error, appointments) {
                    if (error) {
                       return console.log('ERRRRRRRRRR'.red);
                    }
                });
    
                return res.json(lotes);
            } catch(err){
                console.log(err);
            }
        } catch (error){
            return res.status(500).send({error: error});
        }
    }

    async store(req, res){
        try{
            const lote = await Lote.create(req.body);
            
            return res.json(lote);
        } catch (error){
            return res.status(500).send({error: error});
        }
    }

    async show(req,res){
        try{
            const lote = await Lote.findById(req.params.id);
            console.log(lote);
            return res.json(lote);
        } catch(error){
            return res.status(500).send({error: error});
        }
    }

    async update(req, res) {
        try{
            const lote = await Lote.findByIdAndUpdate(req.params.id, req.body, { new: true });

        } catch(error){
            return res.status(500).send({error: error});
        }
    }


}

module.exports = new LoteController();