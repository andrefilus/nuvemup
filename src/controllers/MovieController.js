const Movie = require('../models/Movie');

class MovieController {

    async index(req,res){
        try{
            const movie = await Movie.find({});
            
            return res.json(movie);
        } catch (error){
            return res.status(500).send({error: error});
        }
    }

    async store(req, res){
        try{
            const movie = await Movie.create(req.body);
            
            return res.json(movie);
        } catch (error){
            return res.status(500).send({error: error});
        }
    }

    async show(req,res){
        try{
            const movie = await Movie.findById(req.params.id);
            console.log(movie);
            return res.json(movie);
        } catch(error){
            return res.status(500).send({error: error});
        }
    }

    async update(req, res) {
        try{
            const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });

        } catch(error){
            return res.status(500).send({error: error});
        }
    }


}

module.exports = new MovieController();