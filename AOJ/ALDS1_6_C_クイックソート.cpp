/*
1 quicksort(A, p, r)
2   if p < r
3     q = partition(A, p, r)
4     quickSort(A, p, q-1)
5     quickSort(A, q+1, r)

Stable or Not stable
を出力する

入力例
6
D 3
H 2
D 1
S 3
D 2
C 1

ここでは、同じ数字を持つカードが複数ある場合、それらが入力で与えられた順序であらわれる出力を「安定な出力」とします。
*/

#include <bits/stdc++.h>
using namespace std;

struct Card_and_Index
{
    int i, no;
    char c;
};

int partition(Card_and_Index *A, int p, int r){
    Card_and_Index x = A[r];
    int i = p-1;
    for(int j=p; j<r; j++){
        if(A[j].no <= x.no){
            i++;
            swap(A[i], A[j]);
        }
    }
    swap(A[i+1], A[r]);
    return i+1;
}

void quicksort(Card_and_Index *A, int p, int r){
    if(p < r){
        int q = partition(A, p, r);
        quicksort(A, p, q-1);
        quicksort(A, q+1, r);
    }
}

int main(){
    int n;
    scanf("%d", &n);
    Card_and_Index A[n];
    
    for(int i=0; i<n; i++){
        scanf(" %c %d", &A[i].c, &A[i].no);
        A[i].i = i;
    }

    quicksort(A, 0, n-1);

    bool stable = true;
    for(int i=0; i<n-1; i++){
        if(A[i].no == A[i+1].no && A[i].i > A[i+1].i){
            stable = false;
            break;
        }
    }
    if(stable) printf("Stable\n");
    else printf("Not stable\n");
    for(int i=0; i<n; i++){
        printf("%c %d\n", A[i].c, A[i].no);
    }
    return 0;
}