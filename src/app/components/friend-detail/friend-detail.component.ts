import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Friend } from '../../friend';
import { FriendService } from '../../friend.service';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: [ './friend-detail.component.css' ]
})
export class FriendDetailComponent implements OnInit{
 friend: Friend | undefined;

  constructor(
    private route: ActivatedRoute,
    private friendService: FriendService
  ) {}

  ngOnInit(): void {
    this.getFriend();
  }

  getFriend(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!,10);
    this.friendService.getFriend(id)
      .subscribe(friend => this.friend = friend);
  }
}
