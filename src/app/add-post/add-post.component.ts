import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
uid=""
id=""
title=""
body=""

readValues=()=>
{
  let data:any={"uid":this.uid,
                "id":this.id,
                "title":this.title,
                "body":this.body}
    console.log(data)            
}

}
