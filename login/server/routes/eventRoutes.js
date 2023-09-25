const express =require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');


const{event,eventUpdate,eventDelete,addEvent,getAllEvent,updateEvent,deleteEvent}=require('../controllers/eventController')

//middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

router.get('/event',event);
router.post('/eventUpdate',eventUpdate);
router.delete('/eventDelete',eventDelete);

router.post('/event', addEvent); // Handle form submission
router.get('/events', getAllEvent); // Retrieve events data
router.put('/event/:id', updateEvent); // Update event data
router.delete('/event/:id', deleteEvent); // Delete event data


router.post('/event', addEvent); // Handle form submission
router.put('/event/:id', updateEvent); // Update event data
router.delete('/event/:id', deleteEvent); // Delete event data

router.get('/event', event); // Get events
router.get('/events', getAllEvent); // Retrieve events data



module.exports=router