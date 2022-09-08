const express = require('express')
const app = express();
const router = express.Router();


const userController = require('../controllers/userController')
const serviceControllers  = require('../controllers/serviceControllers')
const serviceRequestController = require('../controllers/serviceRequestController')



router.post('/registration',userController.userRegister)
router.post('/login',userController.userLogin)
router.get('/profile/:id', userController.getUserProfile)
router.get('/Change-Password/:userId', userController.userChangePassword)
router.post('/useraddQuote',userController.addQuote)
router.post('/addCcountryCode',userController.countryCode)
router.get('/getCountryCodes',userController.getCountry)
router.put('/updateCountryCode/:id', userController.updateCountry)
router.delete('/deleteCountry/:id', userController.deleteCountry)



router.post('/addservice', serviceControllers.addServiceDescription)



router.post('/addServiceRequest', serviceRequestController.addServiceRequest)
router.put('/updateServiceReqest/:id',serviceRequestController.updateServiceReqest)
router.get('/ getAllServiceRequest', serviceRequestController. getAllServiceRequest)
router.delete('/deleteServiceRequest/:id', serviceRequestController.deleteServiceRequest)

