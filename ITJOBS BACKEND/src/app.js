import configViewEngine from "./config/viewEngine.config.js";

import express from "express";
import morgan from "morgan";
import route from "./routes/index.js";
import cors from "cors";
import compression from "compression";
// import helmet from "helmet";
import cookieParser from "cookie-parser";
const app = express();



app.use(cors({
  origin:['http://127.0.0.1:5173','http://localhost:3000'],
  credentials:true
}));
  
app.get('/test', (req, res) => {
	res
		.status(202)
		.cookie('Name', 'Rahul Ahire', {
			sameSite: 'strict',
			path: '/',
			expires: new Date(new Date().getTime() + 100 * 1000),
            httpOnly: true,
		}).json({sucess:true})
});
app.use(cookieParser());

// app.use(
//   compression({
//     level: 6,
//     threshold: 100 * 1000,
//   })
// );

//cấp quyền để truy cập tài nguyên

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(helmet())
app.use(morgan("combined"));
// đường dẫn của dự án
route(app);

configViewEngine(app);

export default app;
