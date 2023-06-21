const { Enquery } = require('../models')

exports.getAllenquery = async (req, res) => {
    try {
        var getAllEnquery = await Enquery.findAndCountAll({
            where: {
                isDelete: false
            },
            limit: req.body.limit,
            offset: req.body.offset
        })
        if (!getAllEnquery) {
            return res.status(404).json({
                message: "Something went wrong"
            })
        } else {
            return res.status(200).json({
                message: "Success",
                getAllEnquery

            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

exports.addEnquery = async (req, res) => {
    try {
        const { enquery } = req.body
        var create_enq = await Enquery.create(enquery)
        if (!create_enq) {
            return res.status(404).json({
                message: "failed to create"
            })
        } else {
            return res.status(200).json({
                message: "created",
                create_enq
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

exports.updateEnq = async (req, res) => {
    try {
        const { enquery } = req.body
        var update_enq = await Enquery.update(
            enquery,
            {
                where: {
                    id: enquery.id
                }
            }
        )
        return res.status(200).send({
            message: "update post",
            update_enq
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

exports.deleteEnqs = async (req, res) => {
    try {
        const enq_id = req.body.id
        const data = await Enquery.findOne({ where: { id: enq_id } })
        if (!data) {
            return res.status(404).json({
                message: "post not found"
            })
        } else {
            Enquery.update({
                isDelete: true
            }, {
                where: {
                    id: req.body.id
                }
            }).then((_) => {
                res.status(200).send({
                    message: "Delete",
                    // data
                })
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}