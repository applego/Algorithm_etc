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





// 円の面積を求める関数
double areaOfCircle(double r) {
    return r * r * M_PI;
}

// KISS原則
// Keep It Simple, Stupid



int main() {
    // q1();
    // q2();

    printf("円の面積は%fです\n", areaOfCircle(2.0));
    return 0;
}    