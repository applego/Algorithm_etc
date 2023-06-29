/*
問題文
正整数 
X が与えられます。 
X 以下の最大のべき乗数を求めてください。 ただし、べき乗数とは、ある 
1 以上の整数 
b と 
2 以上の整数 
p を使って 
b 
p
  とかける整数のことを指すこととします。

  べき乗かどうか
    
*/

#include <bits/stdc++.h>
using namespace std;

bool isPowerOf(int n, int base) {
    if (n == 1) {
        return true;
    }

    int x = base;

    while (x <= n) {
        if (x == n) {
            return true;
        }

        x *= base;
    }

    return false;
}

int main(){
    int x;
    cin >> x;

    vector<int> exponential_under1000 = {1,4,8,9,16,25,27,32,36,49,64,81,100,121,125,144,169,196,216,225,243,256,289,324,343,361,400,441,484,512,529,576,625,676,729,784,841,900,961,1000};
    int max = 0;
    for (int i = 0; i < exponential_under1000.size(); i++) {
        if (exponential_under1000[i] <= x) {
            max = exponential_under1000[i];
        }
        else {
            break;
        }
    }
    cout << max << endl;
    return 0;
}

int x, m=1,i,j;
int main2(){
    // int x, m=1,i,j;
    cin>>x;
    for(i=2;i<x;i++){
        for(j=2;pow(i,j)<=x;j++){

            // printf("i=%d, j=%d, pow(i,j)=%d  m=%d\n", i, j, (int)pow(i,j), m);

            m=max(m,(int)pow(i,j));
        }
    }
    cout<<m<<endl;
}
//243