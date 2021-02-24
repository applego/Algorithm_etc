"use strict";
/**
ユーザ数N
操作ログ Q行（Number)
i行目 Si(文字列)
1 a b （aがbをフォロー）
2 a   (aが全フォローワーをフォロー（フォローバック）)
3 a   (フォローワーのフォローをaがフォロー)
初期状態はフォロー0
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recoverFollower = void 0;
// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');
var User = /** @class */ (function () {
    function User(id) {
        this.id = id;
        this.followings = new Array();
        this.followers = new Array();
    }
    User.prototype.follow = function (user) {
        if (this.followings.length > 0 &&
            this.followings.find(function (following) { return following.id === user.id; }))
            return;
        this.followings.push(user);
        user.followers.push(this);
    };
    User.prototype.followBack = function () {
        var _this = this;
        this.followers.forEach(function (follower) {
            _this.follow(follower);
        });
    };
    User.prototype.followFollow = function () {
        var _this = this;
        this.followings.forEach(function (following) {
            following.followings.forEach(function (following) {
                _this.follow(following);
            });
        });
    };
    return User;
}());
function recoverFollower(input) {
    var _a;
    var lines = input.trim().split('\n');
    var fline = (_a = lines.shift()) === null || _a === void 0 ? void 0 : _a.split(' ');
    if (fline === undefined)
        throw new Error('fline was undefined');
    var N = +fline[0];
    var Q = +fline[1];
    var users = {};
    for (var row = 1; row <= N; row++) {
        users[row] = new User(row);
    }
    // let users:Users[]=[];
    // for (let row = 0; row < N; row++) {
    //   users.push({ row: row, user: new User(row) });
    // }
    lines.forEach(function (log) {
        var arr = log.split(' ');
        var action = arr[0];
        switch (action) {
            case '1':
                var followuser = users[Number(arr[1])];
                var followeduser = users[Number(arr[2])];
                followuser.follow(followeduser);
                break;
            case '2':
                var followbackuser = users[Number(arr[1])];
                followbackuser.followBack();
                break;
            case '3':
                var followfollowuser = users[Number(arr[1])];
                followfollowuser.followFollow();
                break;
            default:
                throw new Error('action is not supported');
        }
    });
    // let result: string = '';
    // return;
    var result = Object.values(users)
        .map(function (user) {
        return __spread(Array(N).keys()).map(function (_) { return ++_; })
            .map(function (id) {
            return user.followings.findIndex(function (following) {
                return following.id == id;
            }) > -1
                ? 'Y'
                : 'N';
        })
            .join('');
    })
        .join('\n');
    console.log(result);
    return result;
    // Object.values(users).forEach(user => {
    //   for (let id = 1; id <= N; id++){
    //     if (user.followings.findIndex((following) => {
    //     }))
    //   }
    // })
    // return result;
}
exports.recoverFollower = recoverFollower;
// 提出用
// class User {
//   public id: number;
//   public followings: Array<User>;
//   public followers: Array<User>;
//   public constructor(id: number) {
//     this.id = id;
//     this.followings = new Array<User>();
//     this.followers = new Array<User>();
//   }
//   public follow(user: User) {
//     if (
//       this.followings.length > 0 &&
//       this.followings.find((following) => following.id === user.id)
//     )
//       return;
//     this.followings.push(user);
//     user.followers.push(this);
//   }
//   public followBack() {
//     this.followers.forEach((follower) => {
//       this.follow(follower);
//     });
//   }
//   public followFollow() {
//     this.followings.forEach((following) => {
//       following.followings.forEach((following) => {
//         this.follow(following);
//       });
//     });
//   }
// }
// function main(input: string): string {
//   const lines = input.trim().split('\n');
//   const fline = lines.shift()?.split(' ');
//   if (fline === undefined) throw new Error('fline was undefined');
//   const N = +fline[0];
//   const Q = +fline[1];
//   const users: { [row: number]: User } = {};
//   for (let row = 1; row <= N; row++) {
//     users[row] = new User(row);
//   }
//   lines.forEach((log) => {
//     const arr = log.split(' ');
//     const action = arr[0];
//     switch (action) {
//       case '1':
//         const followuser = users[Number(arr[1])];
//         const followeduser = users[Number(arr[2])];
//         followuser.follow(followeduser);
//         break;
//       case '2':
//         const followbackuser = users[Number(arr[1])];
//         followbackuser.followBack();
//         break;
//       case '3':
//         const followfollowuser = users[Number(arr[1])];
//         followfollowuser.followFollow();
//         break;
//       default:
//         throw new Error('action is not supported');
//     }
//   });
//   const result = Object.values(users)
//     .map((user) => {
//       [...Array(N).keys()]
//         .map((_) => ++_)
//         .map((id) => {
//           return user.followings.findIndex((following) => {
//             return following.id == id;
//           }) > -1
//             ? 'Y'
//             : 'N';
//         })
//         .join('');
//     })
//     .join('\n');
//   console.log(result);
// }
// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');
// main(input);
//# sourceMappingURL=第一回アルゴリズム実技検定E - SNS のログ.js.map