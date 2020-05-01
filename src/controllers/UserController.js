const User = require('../models/User');

class UserController {

    async index(req,res){
        try{
            const user = await User.find({});
            
            return res.json(user);
        } catch (error){
            return res.status(500).send({error: error});
        }
    }

    async store(req, res){
        try{
            const user = await User.create(req.body);
            
            return res.json(user);
        } catch (error){
            return res.status(500).send({error: error});
        }
    }

    async show(req,res){
        try{
            const user = await User.findById(req.params.id);
            console.log(user);
            return res.json(user);
        } catch(error){
            return res.status(500).send({error: error});
        }
    }

    async update(req, res) {
        try{
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        } catch(error){
            return res.status(500).send({error: error});
        }
    }


}

module.exports = new UserController();