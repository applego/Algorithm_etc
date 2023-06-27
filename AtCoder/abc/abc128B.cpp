/*
あなたは美味しいレストランを紹介する本を書くことにしました。 あなたは 
N 個のレストラン、レストラン 
1、レストラン 
2、
…、レストラン 
N を紹介しようとしています。レストラン 
i は 
S 
i
​
  市にあり、あなたは 
100 点満点中 
P 
i
​
  点と評価しています。 異なる 
2 個のレストランに同じ点数がついていることはありません。

この本では、次のような順でレストランを紹介しようとしています。

市名が辞書順で早いものから紹介していく。
同じ市に複数レストランがある場合は、点数が高いものから紹介していく。
この本で紹介される順にレストランの番号を出力してください

市の名前順と（abcd..
点数の降順

どのようなアルゴリズム、データ構造が適切ですか？
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin >> n;
    vector<pair<pair<string, int>, int>> v(n);
    for(int i = 0; i < n; i++){
        string s;
        int p;
        cin >> s >> p;
        v[i] = make_pair(make_pair(s, -p), i+1);
    }
    sort(v.begin(), v.end());
    for(int i = 0; i < n; i++){
        cout << v[i].second << endl;
    }
    return 0;
}