import { Event } from "../models/event.js";

export const createEvent = async (req, res, next) => {
  const eventName = req.body.eventName;
  const date = req.body.date;
  const place = req.body.place;
  const event = new Event({
    school: req.school,
    name: eventName,
    date: date,
    place: place,
  });
  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json("Server Error");
  }
};
export const getEventCount = async (req, res, next) => {
  const numberOfTotalEvent = await Event.countDocuments({
    school: req.school,
  });
  if (!numberOfTotalEvent) {
    return res.json(0);
  }
  res.json(numberOfTotalEvent);
};

export const getEvent = async (req, res, next) => {
  const page = req.query.page;
  const events = await Event.find({ school: req.school })
    .skip((page - 1) * 10)
    .limit(10)
    .sort('-createdAt');

  res.status(200).json({ events: events });
};

export const deleteEvent = async (req, res, next) => {
  const eventId = req.body.eventId;
  const event = await Event.findByIdAndDelete({
    school: req.school,
    _id: eventId,
  });
  res.json(event);
};
