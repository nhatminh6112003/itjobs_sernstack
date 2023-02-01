import userRoutes from "./user.route.js";
import authRoutes from './auth.route.js';
function route(app) {

    app.use('/api/users',userRoutes);
    app.use('/api/auth',authRoutes);

    
}
export default route