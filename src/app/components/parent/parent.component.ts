import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  imports: [HttpClientModule, ChildComponent],
})
export class ParentComponent {
  parentMessage = 'Hola desde el padre';
  childMessage = '';

  updateChildMessage() {
    this.parentMessage = 'Mensaje actualizado desde el padre';
  }

  handleChildMessage(msg: string) {
    this.childMessage = msg;
  }
}
