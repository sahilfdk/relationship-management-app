const express = require('express');
const router = express.Router();
const meetingsController = require('../controllers/meetingsController');

// Define routes for Meetings
router.get('/', meetingsController.getAllMeetings);
router.get('/contact/:contactId', meetingsController.getMeetingsByContactId);
router.get('/:id', meetingsController.viewMeetingDetails);
router.post('/', meetingsController.createMeeting);
router.put('/:id', meetingsController.updateMeetingDetails);
router.delete('/:id', meetingsController.deleteMeeting);

module.exports = router;
