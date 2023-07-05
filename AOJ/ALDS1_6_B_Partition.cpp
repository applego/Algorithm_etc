/*
1 partition(A, p, r)
2   x = A[r]
3   i = p-1
4   for j = p to r-1
4     if A[j] <= x
5       i = i+1
6       A[i] と A[j] を交換
7   A[i+1] と A[r] を交換
8   return i+1
*/

#include <bits/stdc++.h>
using namespace std;

int partition(int A[], int p, int r){
    int x = A[r];
    int i = p-1;
    for(int j=p; j<r; j++){
        if(A[j] <= x){
            i++;
            swap(A[i], A[j]);
        }
    }
    swap(A[i+1], A[r]);
    return i+1;
}

int main(){
    int n;
    cin >> n;
    int A[n];
    for(int i=0; i<n; i++){
        cin >> A[i];
    }
    int q = partition(A, 0, n-1);
    for(int i=0; i<n; i++){
        if(i) cout << " ";
        if(i == q) cout << "[";
        cout << A[i];
        if(i == q) cout << "]";
    }
    cout << endl;
    return 0;
}