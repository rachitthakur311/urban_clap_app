const express = require('express')
const app = express();
const router = express.Router();


const userController = require('../controllers/userController')
const serviceControllers  = require('../controllers/serviceControllers')
const serviceRequestController = require('../controllers/serviceRequestController')
const serviceProviderControllers = require('../controllers/serviceProviderControllers') 
const serviceGiverControllers = require('../controllers/serviceGiverControllers')
const serviceBookingcontrollers = require('../models/serviceBookingSchema')


router.post('/registration', userController.userRegister)
router.post('/login', userController.userLogin)
router.get('/profile/:id', userController.getUserProfile)
router.get('/Change-Password/:userId', userController.userChangePassword)
router.post('/useraddQuote', userController.addToQuote)
router.post('/addCcountryCode', userController.countryCode)
router.get('/getCountryCodes', userController.getCountry)
router.put('/updateCountryCode/:id', userController.updateCountry)
router.delete('/deleteCountry/:id', userController.deleteCountry)



router.post('/addservice', serviceControllers.addServiceDescription)



router.post('/addServiceRequest', serviceRequestController.addServiceRequest)
router.put('/updateServiceReqest/:id',serviceRequestController.updateServiceReqest)
router.get('/ getAllServiceRequest', serviceRequestController. getAllServiceRequest)
router.delete('/deleteServiceRequest/:id', serviceRequestController.deleteServiceRequest)



router.post('/addServiceProvider', serviceProviderControllers.addServiceProvider);
router.put('/updateServiceProvider/:id', serviceProviderControllers.updateServiceProvider);
router.delete('/deleteServiceProvider/:id', serviceProviderControllers.deleteServiceProvider)
router.get('/getServiceProvider', serviceProviderControllers.getServiceProvider)



router.post('/addServiceGiver', serviceGiverControllers.addServiceGiver)
router.put('/updateServiceGiver', serviceGiverControllers.updateServiceGiver)
router.delete('/deleteServiceGiver', serviceGiverControllers.deleteServiceGiver)
router.get('/getAllServieGiver', serviceGiverControllers.getAllServiceGiver)



router.post('/BookService', serviceBookingcontrollers.BookService)
router.put ('/updateServiceStatus/:id', serviceBookingcontrollers.updateServiceStatus)
router.get('/getByServiceId', serviceBookingcontrollers.getByServiceProvider)
router.get('/getByPackageId', serviceBookingcontrollers.getByPackageId)
router.get('/ getByServiceIds', serviceBookingcontrollers. getByServiceIds)


