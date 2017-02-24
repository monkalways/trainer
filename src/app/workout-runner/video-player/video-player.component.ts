import { Component, OnChanges, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnChanges {

  private youtubeUrlPrefix = '//www.youtube.com/embed/';

  @Input() videos: string[];
  safeVideoUrls: SafeResourceUrl[];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    this.safeVideoUrls = this.videos ? 
      this.videos.map(v => this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + v)) : 
      this.videos;
  }

}
