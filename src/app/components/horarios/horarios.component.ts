import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isSameDay, isSameMonth } from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { CalendarEvent } from 'angular-calendar';
import { ProgramarModalComponent } from './programar-modal/programar-modal.component';
import { ScheduleService } from 'src/app/services/schedule.service';
import { EventColor } from './../../models/eventColor';
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {

  viewDate: Date = new Date();
  event: CalendarEvent;
  color: EventColor;
  events = [];
  activeDayIsOpen: boolean = true;
  userDatesScheduled: Array<any> = new Array();

  constructor(private user: UserService,
    private route: Router,
    private modalService: NgbModal,
    private scheduleService: ScheduleService) {
    this.color = {primary: "", secondary: ""}
    // this.event = {start: new Date, title: "Ana maria - 8am-1pm", color: this.color}
    // this.events.push(this.event)
    // this.event = {start: new Date, title: "Emmanuel - 10am-5pm", color: this.color}
    // this.events.push(this.event)
  }

  ngOnInit(): void {
    if (this.user.user == undefined) {
      this.route.navigate(["/login"])
    }
    this.scheduleService.readDb()
    .subscribe(dates => this.userDatesScheduled = dates);
    this.userDatesScheduled.forEach(event => this.events.push(event))
  }

  programarme() {
    this.modalService.open(ProgramarModalComponent, { size: 'sm' })
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }


}



