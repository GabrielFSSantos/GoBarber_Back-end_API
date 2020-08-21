import 'reflect-metadata';
import express, {Request, Response, NextFunction} from 'express';
import routes from './routes';
import './database/index';
import uploadConfig from './config/upload';

const app = express();
app.use(express.json());

app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

})

app.listen(3333, () => {
  console.log('Server is running!!');
});
