/*
B - Shiritori  / 
実行時間制限: 2 sec / メモリ制限: 1024 MB

配点 : 
200 点

問題文
高橋くんは今日も 
1 人でしりとりの練習をしています。

しりとりとは以下のルールで遊ばれるゲームです。

はじめ、好きな単語を発言する
以降、次の条件を満たす単語を発言することを繰り返す
その単語はまだ発言していない単語である
その単語の先頭の文字は直前に発言した単語の末尾の文字と一致する
高橋くんは、
10 秒間にできるだけ多くの単語を発言する練習をしています。

高橋くんが発言した単語の個数 
N と 
i 番目に発言した単語 
W 
i
​
  が与えられるので、どの発言もしりとりのルールを守っていたかを判定してください。

制約
N は 
2≤N≤100 を満たす整数である
W 
i
​
  は英小文字からなる長さ 
1 以上 
10 以下の文字列である
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    int N;
    cin >> N;
    // 英小文字の辞書を作成
    // key:a-z,value:words(vector)
    map<char, vector<string>> dict;
    for(char c='a'; c<='z'; c++){
        dict[c] = vector<string>();
    }
    // 出たwordをvectorで保持
    vector<string> words;

    for (int i=0; i<N; i++){
        string w;
        cin >> w;
        if(words.size() == 0){
            words.push_back(w);
            dict[w[0]].push_back(w);
            continue;
        }
        if(words[words.size()-1][words[words.size()-1].size()-1] != w[0]){
            cout << "No" << endl;
            return 0;
        }
        // すでに同じwordが登録されていたらNoを出力して終了
        if (find(dict[w[0]].begin(), dict[w[0]].end(), w) != dict[w[0]].end()){
            cout << "No" << endl;
            return 0;
        }
        words.push_back(w);
        dict[w[0]].push_back(w);
    }
    cout << "Yes" << endl;
    return 0;
}

#include <iostream>
#include <string>
#include <unordered_set>

int main() {
    int n;
    std::cin >> n;

    std::unordered_set<std::string> words;
    char last_char = '\0';

    for (int i = 0; i < n; i++) {
        std::string word;
        std::cin >> word;

        if (last_char != '\0' && last_char != word[0]) {
            std::cout << "No\n";
            return 0;
        }

        if (words.count(word) > 0) {
            std::cout << "No\n";
            return 0;
        }

        words.insert(word);
        last_char = word.back();
    }

    std::cout << "Yes\n";
    return 0;
}