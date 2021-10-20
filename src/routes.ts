import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const router = Router();

router.post('/autenthicate', new AuthenticateUserController().handle);

export { router };