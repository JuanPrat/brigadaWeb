import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {isSameDay, isSameMonth} from 'date-fns';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {

  viewDate: Date = new Date();
  date = new Date();
  event: CalendarEvent;
  color: EventColor;
  events = [];
  activeDayIsOpen: boolean = true;

  constructor(private user: UserService, private route: Router, private modalService: NgbModal) {
    this.color = {primary: "", secondary: ""}
    this.event = {start: new Date, title: "Ana maria - 8am-1pm", color: this.color}
    this.events.push(this.event)
    this.event = {start: new Date, title: "Emmanuel - 10am-5pm", color: this.color}
    this.events.push(this.event)
   }

  ngOnInit(): void {
    if (this.user.user == undefined) {
      this.route.navigate(["/login"])
    }
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

  programarme(){
    this.modalService.open('<p>hola</p>')
  }
}



export interface CalendarEvent<MetaType = any> {
  start: Date;
  end?: Date;
  title: string;
  color: EventColor;
  actions?: EventAction[];
  allDay?: boolean;
  cssClass?: string;
  resizable?: {
    beforeStart?: boolean;
    afterEnd?: boolean;
  };
  draggable?: boolean;
  meta?: MetaType;
}

export interface EventColor {
  primary: string;
  secondary: string;
}

export interface EventAction {
  label: string;
  cssClass?: string;
  onClick({event}: {event: CalendarEvent}): any;
}



