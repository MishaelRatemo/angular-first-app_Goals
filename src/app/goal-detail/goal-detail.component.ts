import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input()
  goal:any = Goal;
  @Output() isComplete = new EventEmitter<boolean>();
  

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

 constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit() {
    let id= this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id)
  }

}
