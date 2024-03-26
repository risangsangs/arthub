const User = require('../models/User')
const Event = require('../models/Event')

module.exports = {
    getListEvent: async (req, res) => {
        try {
            const event = await Event.find().sort({ date: 'asc' });

            const simplifiedData = event.map(event => ({
                id: event._id,
                title: event.title,
                cetegory: event.category,
                date: event.date,
                price: event.price
            }));

            if (event.length > 0) {
                return res.status(200).json({
                    status: 200,
                    data: simplifiedData,
                    method: req.method,
                    url: req.url
                });
            }
            return res.status(404).json({
                status: 404,
                message: "Data is not found"
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            });
        };
    },
    getListEventTrend: async (req, res) => {
        try {
            const event = await Event.find().sort({ view: 'desc' });
            const user = await User.findById(event.idUser);

            const simplifiedData = event.map(event => ({
                id: event._id,
                title: event.title,
                cetegory: event.category,
                author: user.username,
                date: event.date
            }));

            if (event.length > 0) {
                return res.status(200).json({
                    status: 200,
                    data: simplifiedData,
                    method: req.method,
                    url: req.url
                });
            }
            return res.status(404).json({
                status: 404,
                message: "Data is not found"
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            });
        };
    },
    getById: async (req, res) => {
        const id = req.params.id

        try {
            const event = await Event.findById(id)

            const simplifiedData = event.map(event => ({
                title: event.title,
                lokasi: event.lokasi,
                date: event.date,
                desc: event.desc,
                price: event.price,
            }));

            if (event) {
                return res.status(200).json({
                    status: true,
                    data: simplifiedData,
                    method: req.method,
                    url: req.url,
                    message: "get event by id is successfully"
                })
            }
            return res.status(404).json({
                status: 404,
                message: "Event is not found"
            })
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            })
        }
    },
    getCategory: async (req, res) => {
        const category = req.params.category;

        try {
            const events = await Event.find({ category: category });

            if (events.length > 0) {
                const simplifiedData = events.map(event => ({
                    id: event._id,
                    title: event.title,
                    cetegory: event.category,
                    date: event.date,
                    price: event.price
                }));

                return res.status(200).json({
                    status: true,
                    data: simplifiedData,
                    method: req.method,
                    url: req.url,
                    message: "Get events by category is successful"
                });
            }
            return res.status(404).json({
                status: 404,
                message: "No events found with the specified category"
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            })
        }
    },
    postEvent: async (req, res) => {
        const payload = req.body

        try {
            const event = await Event.create(payload)

            const simplifiedData = {
                id: event._id,
                title: event.title,
                cetegory: event.category,
                date: event.date,
                price: event.price
            };

            res.status(200).json({
                status: true,
                data: simplifiedData,
                method: req.method,
                url: req.url,
                message: "post event is successfully"
            })
        } catch (error) {
            res.status(400).json({
                status: 400,
                message: error.message
            })
        }
    },
    updateEvent: async (req, res) => {
        const id = req.params.id
        const payload = req.body

        try {
            const isEvent = await Event.findById(id)
            if (isEvent) {
                const event = await Event.findOneAndUpdate({ _id: id }, // Filter berdasarkan ID
                    payload,
                    {
                        new: true,
                        runValidators: true
                    })

                return res.status(200).json({
                    status: true,
                    data: event,
                    method: req.method,
                    url: req.url,
                    message: "put data is successfully"
                })
            }
            return res.status(404).json({
                status: 404,
                message: 'Event is not found'
            })
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            })
        }
    },
    buyTicket: async (req, res) => {
        const eventId = req.params.eventId;

        try{
            const event = await Event.findById(eventId);

            if(!event) {
                return res.status(404).json({
                    success : false,
                    message: error.message
                });
            };

            event.buying ++

            await event.save();

            return res.status(200).json({ 
                success: true, 
                message: 'Ticket(s) purchased successfully' 
            });
        }catch(error){
            return res.status(200).json({ 
                success: true, 
                message: error.message 
            });
        }
    },
    deleteEvent: async (req, res) => {
        const id = req.params.id

        try {
            const isEvent = await Event.findById(id)
            if (isEvent) {
                await Event.findByIdAndDelete(id)

                return res.json({
                    status: 200,
                    message: "delete data is successfully",
                    method: req.method,
                    url: req.url,
                });
            }
            return res.status(404).json({
                status: 404,
                message: "Student is not found"
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            });
        }
    },
}