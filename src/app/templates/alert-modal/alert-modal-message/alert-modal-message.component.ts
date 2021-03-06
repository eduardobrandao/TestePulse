import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FieldsError } from 'src/app/service/modal-alert/fields-error';

@Component({
  selector: 'app-alert-modal-message',
  templateUrl: './alert-modal-message.component.html',
  styleUrls: ['./alert-modal-message.component.css']
})
export class AlertModalMessageComponent implements OnInit {

  @Input() type: string;
  @Input() message: string;
  @Input() fieldsErrors: FieldsError[] = [];
  @Input() canDisplayModal = false;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {

  }

  onClose() {
    this.bsModalRef.hide();
  }
s
}
