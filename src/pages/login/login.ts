import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import 'rxjs/Rx';
import { Http ,Headers,RequestOptions} from '@angular/http';
import { AuthenticationServiceProvider } from '../../providers/authentication-service/authentication-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public backgroundImage = 'assets/imgs/background-1.jpg';

  constructor(public navCtrl: NavController,public http : Http, public navParams: NavParams,public authService : AuthenticationServiceProvider) {


  //   this.authService.userLogin.then(data => {
  //     console.log(data);
  // });

  // this.authService.userLogin();

  let datajson = JSON.stringify(
    {userName:'nitin@gmail.com',
    password:'nitin',
   });

  // this.http.post("http://192.168.0.103:8200/loginserver/login/user",datajson).subscribe(data => {alert("sagdhjgsdx")});



  var headers = new Headers();
  headers.append('Access-Control-Allow-Origin' , '*');
  headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  headers.append('Accept','application/json');
  headers.append('content-type','application/json');
  let options = new RequestOptions({ headers:headers,withCredentials: true,body:datajson,method:'POST'});
  this.http.post('http://192.168.0.103:8200/loginserver/login/user',
    datajson,
   options)
    .map(res  => res.json())
    .subscribe((res) => console.log("res", res));

}


  // let headers = new Headers();
  //     headers.append('Content-Type', 'application/json');
  //     headers.append('Accept', 'application/json');

  // let options = new RequestOptions({method:"POST",headers:headers})
    
  

  // this.http.post('', data, options).then(data => {
  //       console.log(data.data);
  //     }).catch(error => {
  //       console.log(error.status);
  //     });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login():void{
    this.navCtrl.push(TabsPage);
  }

}
