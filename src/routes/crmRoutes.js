import { addnewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/crmControllers';
const routes = (app) => {
    app.route('/contact')
        .get((req,res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)
        
        // POST endpoint
        .post(addnewContact);

    app.route('/contact/:contactID')
        // GET a specific contact 
        .get(getContactWithID)
        // updateding a contact
        .put(updateContact)
        // delete sspecific contact 
        .delete((req,res) =>
        res.send('DELETE request successful!'));
}

export default routes;
