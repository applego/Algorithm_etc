#include <bits/stdc++.h>
using namespace std;

void q1(){
    // input
    int N, V;
    cin >> N >> V;

    bool flag = false;
    for (int i = 0; i < N; i++) {
        int a;
        cin >> a;
        if (a == V){
            flag = true;
        }
    }
    // output
    if(flag){
        cout << "Yes" << endl;
    }else{
        cout << "No" << endl;
    }
}

void q2(){
    // input
    int N, V;
    cin >> N >> V;

    // これから入力されるスペース区切りの数値にVがいくつ含まれるかカウントする
    int count = 0;
    for (int i = 0; i < N; i++) {
        int a;
        cin >> a;
        if (a == V){
            count++;
        }
    }
    // output
    cout << count << endl;
}

int main() {
    // q1();
    q2();
}    




