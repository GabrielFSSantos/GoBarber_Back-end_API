/**
 * Recebimento de informações
 * Tratativa de erros e excessões
 * Acesso ao repositório
 * 
 * (SOLID)
 * S -> Single Responsability Principle
 * O -> 
 * L ->
 * I ->
 * D -> Dependency Inversion
 */

import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {

  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: Request): Appointment {

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(date);

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;