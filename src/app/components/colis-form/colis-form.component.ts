import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';


@Component({
  selector: 'app-colis-form',
  templateUrl: './colis-form.component.html',
  styleUrls: ['./colis-form.component.scss']
})
export class ColisFormComponent implements OnInit {
  colisForm!: FormGroup;
  constructor(private api : ApiService, private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {

    this.colisForm = this.formBuilder.group({
      intitule: ['', Validators.required],
      description: ['', Validators.required],
      quantite: ['', Validators.required],
      poidsColis: ['', Validators.required],
      valeurColis: ['', Validators.required]
    });
  }

  addColis(){
    if(this.colisForm.valid){
      console.log(this.colisForm.value);
      
      this.api.postColis({...this.colisForm.value , id: 1})
    }
  }

}
