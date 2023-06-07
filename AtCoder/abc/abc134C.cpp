#include <bits/stdc++.h>
using namespace std;

int main(){
    int N;
    cin >> N;
    vector<int> A(N);
    vector<int> B(N);
    for(int i=0; i<N; i++){
        cin >> A[i];
        B[i] = A[i];
    }
    sort(B.begin(), B.end());
    int max = B[N - 1];
    int second_max = B[N - 2];
    for(int i=0; i<N; i++){
        if(A[i] == max){
            cout << second_max << endl;
        }else{
            cout << max << endl;
        }
    }   
}