import { Component, Input, OnInit } from '@angular/core';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-detail-label',
  templateUrl: './detail-label.component.html',
  styleUrls: ['./detail-label.component.css']
})
export class DetailLabelComponent implements OnInit {
  @Input() number: String = ""
  @Input() label: String = ""
  @Input() faIcon = faSquare
  @Input() color = "bg-info" 
  constructor() { }

  ngOnInit(): void {
  }

}
