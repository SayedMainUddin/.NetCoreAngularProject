import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})

export class PersonComponent {

  public PersonList: Person[];
  public Http: HttpClient;
  public BaseUrl: string;
  public Person: Person;


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.Http = http;
    this.BaseUrl = baseUrl + 'api/People';

    this.Person = new Person();

    this.LoadList();
  }

  public LoadList() {

    this.Http.get<Person[]>(this.BaseUrl)
      .subscribe(result => {
        this.PersonList = result;
      }, error => console.error(error));

  }

  public SubmitPerson() {

    if (this.Person.id == 0) {
      this.Http.post(this.BaseUrl, this.Person)
        .subscribe(result => {
          this.LoadList();
          $('#personModal').modal('hide');
        }, error => console.error(error));
    }
    else {
      this.Http.put(this.BaseUrl + '/' + this.Person.id, this.Person)
        .subscribe(result => {
          this.LoadList();
          $('#personModal').modal('hide');
        }, error => console.error(error));
    }

  }

  public GetPerson(id: number) {

    this.Http.get<Person>(this.BaseUrl + '/' + id)
      .subscribe(result => {
        this.Person = result;
        $('#personModal').modal('show');
      }, error => console.error(error));

  }
}

class Person {

  constructor() {

    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.fullName = '';
    this.address = '';

  }



  public id: number;
  public firstName: string;
  public lastName: string;
  public fullName: string;
  public address: string;
}
