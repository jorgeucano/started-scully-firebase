import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { ActivatedRoute } from '@angular/router';
import { take, tap, filter } from 'rxjs/operators';
import { IdleMonitorService } from '@scullyio/ng-lib';

declare global {
  interface Window {
    scullyManualIdle: boolean;
  }
}

@Component({
  selector: 'app-fireblog',
  templateUrl: './fireblog.component.html',
  styleUrls: ['./fireblog.component.css']
})
export class FireblogComponent implements OnInit {

  items: any;
  

  constructor(private firestore: AngularFirestore, 
            private route: ActivatedRoute, 
            private ims: IdleMonitorService) {
    
    this.route.paramMap.pipe(take(1)).subscribe(
      (r) => {
        const id = (<any>r).params.id;
        this.items = this.firestore.doc(`user-scully-demo/${id}`)
        .valueChanges().
        pipe(
          filter(Boolean),
          tap(v => {
            setTimeout(() => this.ims.fireManualMyAppReadyEvent(), 500);
          })
        );
      }
    );
  }

  ngOnInit(): void {
    
  }

}
