#include <bits/stdc++.h>
using namespace std;


// 入力文字列を最小の書き換えで「CODEFESTIVAL2016」にする
void solve_a() {
  string s;
  cin >> s;
  string ans = "CODEFESTIVAL2016";
  int count = 0;
  for (int i = 0; i < s.size(); ++i){
    if(s[i]!=ans[i]) ++count;
  }
  cout << count << endl;
}

// 予選参加者数:N
// 国内の学生 or 海外の学生 or どちらでもない
// 学生しか通過できない
// 国内の学生:通過確定参加者がA＋B人に満たなければ予選を通過
// 海外の学生:通過確定参加者がA＋B人に満たず、海外の学生の中での順位がB位以内なら予選を通過

// 入力
/*
N A B
S
*/
// 出力
/*
Yes or No
...N行分
*/
void solve_b(){
  int N, A, B;
  cin >> N >> A >> B;
  string S;
  cin >> S;
  int count = 0;
  int count_b = 0;
  for (int i = 0; i < N; ++i){
    if(S[i]=='a'){
      if(count<A+B){
        cout << "Yes" << endl;
        ++count;
      }else{
        cout << "No" << endl;
      }
    }else if(S[i]=='b'){
      if(count<A+B && count_b<B){
        cout << "Yes" << endl;
        ++count;
        ++count_b;
      }else{
        cout << "No" << endl;
      }
    }else{
      cout << "No" << endl;
    }
  }
}

int main(){
  solve_a();
}
