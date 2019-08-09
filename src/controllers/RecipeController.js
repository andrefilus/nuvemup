const Recipe = require('../models/Recipe');

class RecipeController {

    async index(req,res){
        try{
            const recipe = await Recipe.find({});
            
            return res.json(recipe);
        } catch (error){
            return res.status(500).send({error: error});
        }
    }

    async store(req, res){
        try{
            const recipe = await Recipe.create(req.body);
            
            return res.json(recipe);
        } catch (error){
            return res.status(500).send({error: error});
        }
    }

    async show(req,res){
        try{
            const recipe = await Recipe.findById(req.params.id);
            console.log(recipe);
            return res.json(recipe);
        } catch(error){
            return res.status(500).send({error: error});
        }
    }

    async update(req, res) {
        try{
            const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });

        } catch(error){
            return res.status(500).send({error: error});
        }
    }


}

module.exports = new RecipeController();