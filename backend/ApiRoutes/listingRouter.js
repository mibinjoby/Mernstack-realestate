import express from 'express';
import { createListing } from '../Controllers/Listing.controller.js';
import { VerifyToken } from '../utils/Verifyuser.js';

const listingRouter = express.Router();

 listingRouter.post('/create', VerifyToken, createListing )

export default listingRouter;