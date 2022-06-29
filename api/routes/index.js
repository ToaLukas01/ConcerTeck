const { Router } = require("express");
const {
  verifyToken,
  isAdmin,
  verifyIsProducer,
} = require("../middlewares/auth");

const {
  getUser,
  createUser,
  putUser,
  deleteUser,
  UpgradeRank,
} = require("../controllers/User");
const { getAllGenres, postOneGenre } = require("../controllers/Genres");
const {
  createProducer,
  getProducer,
  putProducer,
  deleteProducer,
} = require("../controllers/Producer");
const routes = Router();

const {
  loadEventsAndGetEvents,
  // getEvents,
  postEvents,
  putEvents,
  deleteEvent,
} = require("../controllers/Events");

const {
  getTicketByID,
  postTicket,
  deleteTicket,
} = require("../controllers/Tickets");

const { getVenues, postVenues } = require("../controllers/Venue");
const { getTicketStock } = require("../controllers/TicketStock");

const { LoginUser } = require("../controllers/Login");
const {
  ValidationUser,
  ValidationUsername,
  ValidationEmail,
} = require("../controllers/Validations");

routes.post("/user", createUser);
routes.get("/user", verifyToken, getUser);
routes.put("/user", verifyToken, putUser);
routes.delete("/user", verifyToken, isAdmin, deleteUser);

routes.put("/upgrade", verifyToken, isAdmin, UpgradeRank);

routes.get("/producer", verifyToken, getProducer);
routes.post("/producer", createProducer);
routes.put("/producer", verifyToken, putProducer);
routes.delete("/producer", verifyToken, isAdmin, deleteProducer);

routes.get("/events", loadEventsAndGetEvents);
routes.post("/events", verifyToken, verifyIsProducer, postEvents);
routes.put("/events", verifyToken, verifyIsProducer, putEvents);
routes.delete("/events", verifyToken, isAdmin, deleteEvent);

routes.get("/ticket", verifyToken, getTicketByID);
routes.post("/ticket", verifyToken, isAdmin, postTicket);
routes.delete("/ticket", verifyToken, isAdmin, deleteTicket);

routes.get("/genres", getAllGenres);
routes.post("/genres", verifyToken, verifyIsProducer, postOneGenre);

routes.get("/venues", verifyToken, getVenues);
routes.post("/venues", verifyToken, verifyIsProducer, postVenues);

routes.get("/ticketstock", verifyToken, getTicketStock);

routes.post("/login", LoginUser);

routes.post("/validation/login", ValidationUser);
routes.post("/validation/username", ValidationUsername);
routes.post("/validation/email", ValidationEmail);

module.exports = routes;
