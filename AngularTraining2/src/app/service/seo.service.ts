import { Injectable } from '@angular/core';
import { ɵMetadataOverrider } from '@angular/core/testing';
import {Meta,Title} from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title:Title,private meta:Meta) {


   }

   updateTitle(title=""):void{
     this.title.setTitle(title)
   }


   updateMeta(name="",content=""):void{
    this.meta.updateTag({name,content})
  }
}
