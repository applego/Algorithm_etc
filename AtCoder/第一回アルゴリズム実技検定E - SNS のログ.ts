/**
ユーザ数N
操作ログ Q行（Number)
i行目 Si(文字列)
1 a b （aがbをフォロー）
2 a   (aが全フォローワーをフォロー（フォローバック）)
3 a   (フォローワーのフォローをaがフォロー)
初期状態はフォロー0
 */

// import * as fs from 'fs';
// const input = fs.readFileSync('/dev/stdin', 'utf8');

class User {
  public id: number;
  public followings: Array<User>;
  public followers: Array<User>;
  public constructor(id: number) {
    this.id = id;
    this.followings = new Array<User>();
    this.followers = new Array<User>();
  }
  public follow(user: User) {
    if (this.id === user.id) return;
    if (
      this.followings.length > 0 &&
      this.followings.find((following) => following.id === user.id)
    )
      return;
    this.followings.push(user);
    user.followers.push(this);
  }
  public followBack() {
    this.followers.forEach((follower) => {
      this.follow(follower);
    });
  }
  public followFollow() {
    this.followings.forEach((following) => {
      following.followings.forEach((following) => {
        this.follow(following);
      });
    });
  }
}

export function recoverFollower(input: string): string {
  const lines = input.trim().split('\n');
  const fline = lines.shift()?.split(' ');
  if (fline === undefined) throw new Error('fline was undefined');
  const N = +fline[0];
  const Q = +fline[1];

  const users: { [row: number]: User } = {};
  for (let row = 1; row <= N; row++) {
    users[row] = new User(row);
  }

  // let users:Users[]=[];
  // for (let row = 0; row < N; row++) {
  //   users.push({ row: row, user: new User(row) });
  // }

  lines.forEach((log) => {
    const arr = log.split(' ');
    const action = arr[0];
    switch (action) {
      case '1':
        const followuser = users[Number(arr[1])];
        const followeduser = users[Number(arr[2])];
        followuser.follow(followeduser);
        break;
      case '2':
        const followbackuser = users[Number(arr[1])];
        followbackuser.followBack();
        break;
      case '3':
        const followfollowuser = users[Number(arr[1])];
        followfollowuser.followFollow();
        break;
      default:
        throw new Error('action is not supported');
    }
  });
  // let result: string = '';
  // return;
  let result = Object.values(users)
    .map((user) => {
      return [...Array(N).keys()]
        .map((_) => ++_)
        .map((id) => {
          return user.followings.findIndex((following) => {
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
