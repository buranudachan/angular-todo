import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';

@Component({ templateUrl: 'users.html' })
export class Users implements OnInit {
    userDetails: any = []
    displayedColumns: string[] = ['First Name'];
    dataSource: any = [];
    constructor(private _userService: UserService
    ) {
    }

    ngOnInit() {
        this.getUserList();
    }

    getUserList() {

        this._userService.getUserDetail().subscribe(
            response => {
                const data: any = response;
                this.dataSource = data.data;
                console.log(this.dataSource)
            },
            error => { throw error })
    }
}
