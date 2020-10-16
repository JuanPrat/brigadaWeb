import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleService } from './../../../services/schedule.service'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';
import { Observable } from 'rxjs';
import { Programacion } from './../../../models/programacion';

@Component({
  selector: 'app-programar-modal',
  templateUrl: './programar-modal.component.html',
  styleUrls: ['./programar-modal.component.scss']
})
export class ProgramarModalComponent implements OnInit {

  model: NgbDateStruct;
  date: { year: number, month: number };
  displayMonths = 1;
  timeStart: any;
  timeEnd: any;
  meridian = true;
  datesScheduled: Array<Programacion> = [];

  constructor(private calendar: NgbCalendar, private scheduleService: ScheduleService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.scheduleService.readDb().subscribe(dates => {
      if (dates !== undefined) {
        dates.array.forEach(date => {
          this.datesScheduled.push(date)
        })
      }
    });
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  programarDia() {
    let hourBegin = this.lessThanNine(this.timeStart.hour) + ":" + this.lessThanNine(this.timeStart.minute)
    let hourEnd = this.lessThanNine(this.timeEnd.hour) + ":" + this.lessThanNine(this.timeEnd.minute)
    let hours = hourBegin + " - " + hourEnd;
    this.scheduleService.scheduleDay(new Date(this.model.year, this.model.month, this.model.day), hours, this.datesScheduled)
  }

  lessThanNine(number) {
    let newNumber: number = number;
    return newNumber > 9 ? number : "0".concat(number)
  }

  close() {
    this.modalService.dismissAll()
  }
}
