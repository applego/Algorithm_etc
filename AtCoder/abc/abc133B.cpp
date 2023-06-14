/*
B - Good Distance  / 
実行時間制限: 2 sec / メモリ制限: 1024 MB

配点 : 
200 点

問題文
D 次元空間上に 
N 個の点があります。

i 番目の点の座標は 
(X 
i1
​
 ,X 
i2
​
 ,...,X 
iD
​
 ) です。

座標 
(y 
1
​
 ,y 
2
​
 ,...,y 
D
​
 ) の点と座標 
(z 
1
​
 ,z 
2
​
 ,...,z 
D
​
 ) の点の距離は 
(y 
1
​
 −z 
1
​
 ) 
2
 +(y 
2
​
 −z 
2
​
 ) 
2
 +...+(y 
D
​
 −z 
D
​
 ) 
2
 
​
  です。

i 番目の点と 
j 番目の点の距離が整数となるような組 
(i,j) 
(i<j) はいくつあるでしょうか。

制約
入力は全て整数である。
2≤N≤10
1≤D≤10
−20≤X 
ij
​
 ≤20
同じ座標の点は与えられない。すなわち、
i

=j ならば 
X 
ik
​
 

=X 
jk
​
  なる 
k が存在する。
*/

#include <bits/stdc++.h>
using namespace std;

int calc_jijowa(int x[],int y[],int D){
    double sum = 0;
    for(int i=0;i<D;i++){
        sum += (x[i]-y[i])*(x[i]-y[i]);
    }
    return sum;
}

int main(){
    int N,D;
    cin >> N >> D;
    int X[N][D];
    for(int i=0;i<N;i++){
        for(int j=0;j<D;j++){
            cin >> X[i][j];
        }
    }
    int ans = 0;
    for(int i=0;i<N;i++){
        for(int j=i+1;j<N;j++){
            int sum = calc_jijowa(X[i],X[j],D);
            int tmp = sqrt(sum);
            if(tmp*tmp == sum){
                ans++;
            }
        }
    }
    cout << ans << endl;
    return 0;
}

// refacotr by copilot
#include <iostream>
#include <vector>
#include <cmath>

int calc_distance(const std::vector<int>& x, const std::vector<int>& y) {
    int sum = 0;
    for (size_t i = 0; i < x.size(); i++) {
        sum += (x[i] - y[i]) * (x[i] - y[i]);
    }
    return sum;
}

int main() {
    int n, d;
    std::cin >> n >> d;

    std::vector<std::vector<int>> x(n, std::vector<int>(d));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < d; j++) {
            std::cin >> x[i][j];
        }
    }

    int ans = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int distance = calc_distance(x[i], x[j]);
            int root = std::sqrt(distance);
            if (root * root == distance) {
                ans++;
            }
        }
    }

    std::cout << ans << '\n';
    return 0;
}