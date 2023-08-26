import { Component } from '@angular/core';

@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.scss']
})
export class LazyloadComponent {

}


//คำสั่งสร้าง module และ route และ สั่งให้ไป สร้าง route ที่ routing ของ app component
//ng generate module lazyload --route=lazyload --module=app.moodule

//ng generlate mosule lazyload คือคำสั่ง create module ชื่อ lazyload
//--route=lazyload คือคำสั่งสร้าง routing ชื่อ lazyload
//--module=app.module คือคำสั่งที่สั่งให้ ไปเพิ่ม routing ไปยัง routing ของ app.module แบบ auto เป็น routing แบบ lazyload
