// SoC: Separation of Concerns (Separação de Preocupações)
// DTO: Data Transfer Object
// Rota: Receber a Requisição, Chamar outro arquivo, Devolver resposta

import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentRouter = Router();

appointmentRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();
  return response.json(appointments);
});

appointmentRouter.post('/', async (request, response) => {
  try {
    const { provider, date } = request.body;

    const parseDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();
  
    const appointment = await createAppointment.execute({provider, date: parseDate});
  
    return response.json(appointment);
    
  } catch (err) {
    return response.status(400).json({ error: err.messege });
  }
});

export default appointmentRouter;