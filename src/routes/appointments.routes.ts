// SoC: Separation of Concerns (Separação de Preocupações)
// DTO: Data Transfer Object
// Rota: Receber a Requisição, Chamar outro arquivo, Devolver resposta

import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();
  return response.json(appointments);
});

appointmentRouter.post('/', (request, response) => {
  //try {

    const { provider, date } = request.body;

    const parseDate = parseISO(date);
  
    const createAppointment = new CreateAppointmentService(appointmentsRepository);
  
    const appointment = createAppointment.execute({provider, date: parseDate});
  
    return response.json(appointment);
    
  //} catch (err) {
    return response.status(400).json({ error: err.messege });
  //}
});

export default appointmentRouter;