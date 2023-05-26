#include <bits/stdc++.h>
using namespace std;

int main(){
    int N;
    cin >> N;
    int D,X;
    cin >> D >> X;
    vector<int> A(N);
    for(int i=0; i<N; i++){
        cin >> A[i];
    }
    int cnt_eaten = 0;
    for (int i = 0; i < N;i++){
        int day = 1;
        while(day <= D){
            day += A[i];
            cnt_eaten++;
        }
    }
    cout << cnt_eaten + X << endl;
}