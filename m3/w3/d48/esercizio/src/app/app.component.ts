import { Component } from '@angular/core';
import { Photo } from './class/photo';
import { PhotoService } from './service/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Counter = 0

  cards: Photo[] = [];

  constructor(private photoService: PhotoService){

  }
  ngOnInit(){
    this.photoService.getPhoto().subscribe(res =>{
      this.cards = res.slice(0, 4)
      console.log(res)
    })

    this.photoService.favSubject.subscribe(res =>{
      this.Counter = res
    })
  }
  elimina(id: number) {
    this.photoService.deletePhoto(id).subscribe(res =>{
      console.log('delete',res)
      this.cards = res.slice(0, 4)
    })
  }

  like(){
    this.photoService.addFav()
    
  }


}
