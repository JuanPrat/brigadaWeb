import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isSameDay, isSameMonth } from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { ProgramarModalComponent } from './programar-modal/programar-modal.component';
import { nuevaProgramacion, ScheduleService } from 'src/app/services/schedule.service';
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
  actions: CalendarEventAction[] = [
    {
      label: '<button class="btn btn-danger">Borrar</button>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.scheduleService.deleteSchedule(event.id, event.email)
      },
    },
  ];
  events = [];
  activeDayIsOpen: boolean = true;
  userDatesScheduled: nuevaProgramacion = new nuevaProgramacion();

  constructor(private user: UserService,
    private route: Router,
    private modalService: NgbModal,
    private scheduleService: ScheduleService) {
    this.color = { primary: "", secondary: "" }
    this.scheduleService.readDb()
      .subscribe(users => {
        debugger
        if (users !== undefined) {
          this.events = [];
          users.forEach(user => {
            user.dates.forEach(date => {
              debugger
              if(date.email == this.user.user.email){
              const event = {
                start: this.toDateTime(date.start.seconds),
                title: date.title,
                color: this.color,
                id: date.id,
                actions: this.actions,
                email: date.email
              }
              this.events.push(event)
            }
            else {
              debugger
              const event = {
                start: this.toDateTime(date.start.seconds),
                title: date.title,
                color: this.color,
                id: date.id,
                email: date.email
              }
              this.events.push(event)
            }
              
            })
          })
        }
      });

  }

  ngOnInit(): void {
    if (this.user.user == undefined) {
      this.route.navigate(["/login"])
    }
  }

  programarme() {
    this.modalService.open(ProgramarModalComponent, { size: 'sm' })
  }

  private toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  dayClicked({ date }: { date: Date }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        this.events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }


}



