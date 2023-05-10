#include <bits/stdc++.h>
using namespace std;

int main() {
  int m1, d1, m2, d2;
    cin >> m1 >> d1 >> m2 >> d2;
    if(m1!=m2){
      cout << 1 << endl;
    }else{
        cout << 0 << endl;
    }   
}

// N円
// 8%の消費税
// N = X * 1.08（小数点以下切り捨て）
// Xは整数
// 該当するXが存在しない場合は ":(" を出力
int main(){
    int N;
    cin >> N;
    int X = N / 1.08;
    printf("%d\n", X);
    if(N==floor(X * 1.08)){
        cout << X << endl;
    }else if(N==floor((X+1)*1.08)){
        cout << X+1 << endl;
    }else{
        cout << ":(" << endl;
    }
}