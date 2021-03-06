// This is a JavaScript file

/*
    応援画面
*/
myApp.controller('hagemasCtrl',function($scope,challenger){
    "use strict";
    console.log("hagemasCtrl init!");
    this.message = "";
    this.title = challenger.currentMission.title;
    this.description = challenger.currentMission.description;
    //参加する
    this.entry = function(){
        //応援する。
        console.log("entryCtrl entry");
        challenger.MissionStart(challenger.currentMission.objectId,function(){
            myNavigator.replacePage('ganbare.html',{ animation: 'none'});
        },function(){
            myNavigator.replacePage('logout.html',{ animation: 'none'});
        });
    };

    this.cheer = function(){
        //チャレンジに参加しない
        console.log("hagemasCtrl cheer");
        challenger.ChallengeCheerUp(challenger.currentMission.objectId,this.message,function(){
          //だれかに応援メッセージを届ける
            myNavigator.popPage();
            //成功
        },function(){
            //失敗
        });
    };

    this.logout = function(){
        console.log("entryCtrl logout");
        myNavigator.replacePage('logout.html',{ animation: 'none'});
    };
});
