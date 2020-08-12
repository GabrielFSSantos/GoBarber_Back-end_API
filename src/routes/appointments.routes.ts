import { Router} from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentRouter = Router();
const appointmentsRepository =  new AppointmentsRepository();

appointmentRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));
  
  const findAppointmentInSameDate = appointmentsRepository.findByDate(parseDate);

  if(findAppointmentInSameDate) {
    return response.status(400).json({message: 'This appointment is already booked'});
  }

  const appointment = appointmentsRepository.create(provider, parseDate);

  return response.json(appointment);
});

export default appointmentRouter;