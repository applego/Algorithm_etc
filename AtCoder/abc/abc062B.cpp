/*
縦Hピクセル、横Wピクセルの画像がある
書くピクセルは英小文字で表される
上からi番目,左からj番目のピクセルはaijである
この画像の周囲1ピクセルを#で囲んだものを出力せよ


*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int H, W;
    cin >> H >> W;
    string a[101];
    for(int i=0; i<H; i++){
        cin >> a[i];
    }
    for(int i=0; i<W+2; i++){
        cout << "#";
    }
    cout << endl;
    for(int i=0; i<H; i++){
        cout << "#" << a[i] << "#" << endl;
    }
    for(int i=0; i<W+2; i++){
        cout << "#";
    }
    cout << endl;
    return 0;
}