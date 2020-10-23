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
      label: '<p>Borrar</p>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        debugger
        this.scheduleService.deleteSchedule(event.id)
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
      .subscribe(dates => {
        debugger
          this.userDatesScheduled = dates;
          if (this.userDatesScheduled.dates !== undefined) {
          this.events = [];
          this.userDatesScheduled.dates.forEach(eve => {
            const event = {
              start: this.toDateTime(eve.start.seconds),
              title: eve.title,
              color: this.color,
              id: eve.id,
              actions: this.actions
            }
            this.events.push(event)
          })
        }
      });
    // this.
    // this.events.push(this.event)
    // this.event = {start: new Date, title: "Emmanuel - 10am-5pm", color: this.color}
    // this.events.push(this.event)
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



