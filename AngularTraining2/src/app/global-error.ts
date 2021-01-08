import { Injectable,ErrorHandler } from '@angular/core'

 @Injectable()


export class GlobalError implements ErrorHandler{

constructor() {}

  handleError(error: any): void {
    console.error("Error Created");
    console.error("url hata "+error.url)
    console.error("status hata "+error.status)
    console.error("name  hata "+error.name)
    console.error("message hata "+error.message)
  }

}
