import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChatPage} from "../chat/chat";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }


    chats = [

        {
            name: 'Claud',
            photo: 'avatar-01.png',
            message: 'Hi'
        },

        {
            name: 'Claud',
            photo: 'avatar-05.png',
            message: 'Iam Great'
        },

        {
            name: 'Ana',
            photo: 'avatar-07.png',
            message: 'Iam Good'
        }


    ];


    goToChat(chat) {

        this.navCtrl.push(ChatPage, {'chat': chat});

    }

}
