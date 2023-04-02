import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {



  ngOnInit(): void {
          // Modal service TODO: mover a su correspondiente componente 
    const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal--close')

    let modal = function(modalClick:any){
      modalViews[modalClick].classList.add('active-modal')
    }

    modalBtns.forEach((modalBtn, i)=>{
      modalBtn.addEventListener('click',()=>{
        modal(i)
      })
    })

    modalCloses.forEach((modalClose,i)=>{
      modalClose.addEventListener('click', ()=>{
          modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
          })
      })
    })
  }
  
}
