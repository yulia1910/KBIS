import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { TodoItemsForView } from 'src/app/model';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit{ 
 @Output() updateList = new EventEmitter();
 editForm = new FormGroup({
  task: new FormControl('', Validators.required),
  dueDate: new FormControl('', Validators.required),
  done: new FormControl(''),
});

  item:TodoItemsForView; 

  @Input() set ftask(val: TodoItemsForView){
    this.item = val;
    this.editForm.setValue({
      task: val.text,
      dueDate: val.dueDate,
      done: val.done
    });

  }

  constructor() { }

  ngOnInit(): void {}
  
  onSubmit(){
    this.item.text = this.editForm.get('task').value;
    this.item.dueDate = this.editForm.get('dueDate').value;
    this.item.done = this.editForm.get('done').value;
    this.updateList.emit(this.item);
  }
}
