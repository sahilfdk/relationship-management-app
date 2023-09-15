const { Meeting } = require('../models/Meeting'); // Import the Meeting model

// Simulated database or storage
const meetingsDatabase = [
  {
    id: 1,
    meetingName: 'Project Kickoff',
    title: 'Project Overview',
    description: 'Kickoff meeting for Project ABC',
    dateTime: '2023-09-15T10:00:00',
    minutes: 'Meeting minutes for Project Kickoff...',
    contactId: 1, // ID of the associated contact
  },
  {
    id: 2,
    meetingName: 'Weekly Status',
    title: 'Weekly Updates',
    description: 'Weekly status meeting',
    dateTime: '2023-09-20T14:30:00',
    minutes: 'Meeting minutes for Weekly Status...',
    contactId: 1, // ID of the associated contact
  },
  {
    id: 3,
    meetingName: 'Team Sync',
    title: 'Team Discussion',
    description: 'Team synchronization meeting',
    dateTime: '2023-09-18T09:00:00',
    minutes: 'Meeting minutes for Team Sync...',
    contactId: 2, // ID of the associated contact
  },
  // Add more dummy meetings here as needed
];


// Controller functions
function getAllMeetings(req, res) {
  res.json(meetingsDatabase);
}

function getMeetingsByContactId(req, res) {
  const contactId = parseInt(req.params.contactId);
  const meetings = meetingsDatabase.filter((meeting) => meeting.contactId === contactId);
  res.json(meetings);
}

function viewMeetingDetails(req, res) {
  const meetingId = parseInt(req.params.id);
  const meeting = meetingsDatabase.find((m) => m.id === meetingId);

  if (!meeting) {
    return res.status(404).json({ message: 'Meeting not found' });
  }

  res.json(meeting);
}

function createMeeting(req, res) {
  const newMeeting = req.body;
  newMeeting.id = meetingsDatabase.length + 1; // Simulated auto-increment
  meetingsDatabase.push(newMeeting);
  res.status(201).json(newMeeting);
}

function updateMeetingDetails(req, res) {
  const meetingId = parseInt(req.params.id);
  const updatedMeeting = req.body;
  const meetingIndex = meetingsDatabase.findIndex((m) => m.id === meetingId);

  if (meetingIndex === -1) {
    return res.status(404).json({ message: 'Meeting not found' });
  }

  meetingsDatabase[meetingIndex] = { ...meetingsDatabase[meetingIndex], ...updatedMeeting };
  res.json(meetingsDatabase[meetingIndex]);
}

function deleteMeeting(req, res) {
  const meetingId = parseInt(req.params.id);
  const meetingIndex = meetingsDatabase.findIndex((m) => m.id === meetingId);

  if (meetingIndex === -1) {
    return res.status(404).json({ message: 'Meeting not found' });
  }

  const deletedMeeting = meetingsDatabase.splice(meetingIndex, 1);
  res.json(deletedMeeting[0]);
}

module.exports = {
  getAllMeetings,
  getMeetingsByContactId,
  viewMeetingDetails,
  createMeeting,
  updateMeetingDetails,
  deleteMeeting,
};
