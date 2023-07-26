import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core'
import { Role } from 'src/app/enums/role';
import { User } from 'src/app/models/user';


const mediaConstraint = {
  audio: true,
  video: { width: 720, height: 540 }
};


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})


export class ChatComponent implements AfterViewInit {

  @Input() participant: User;

  private stream: MediaStream;
  role = Role;
  @ViewChild('video') video: ElementRef;

  ngAfterViewInit(): void {
    this.requestMediaDevices();
  }

  private async requestMediaDevices(): Promise<void> {
    this.stream = await navigator.mediaDevices.getUserMedia(mediaConstraint);
    this.video.nativeElement.srcObject = this.stream;
  }
  mute(){}

}
