import userRoutes from "./userRoutes.js";

function route(app) {

    app.use('/api/users',userRoutes);
    
}
export default route