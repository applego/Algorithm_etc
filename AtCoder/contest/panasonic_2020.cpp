#include <bits/stdc++.h>
using namespace std;

// 次の長さ 32 の数列の K 番目の項を出力してください。

int main(){
    int K;
    cin >> K;

    vector<int> A = {1, 1, 1, 2, 1, 2, 1, 5, 
                     2, 2, 1, 5, 1, 2, 1, 14, 
                     1, 5, 1, 5, 2, 2, 1, 15, 
                     2, 2, 5, 4, 1, 4, 1, 51};
    cout << A[K-1] << endl;
    return 0;
}

// 縦Hマス、横Wマス
// 
#include <bits/stdc++.h>
using namespace std;


int main(){
    int h, w;
    cin >> h >> w;
    
    int ans = 1;
    int iw,ih = 0;
    stack<pair<int,int>> s;
    // 右上へ
    while(iw < w && ih < h){
        iw++;
        ih++;
        ans++;
        s.push(make_pair(iw,ih));
    }
    while(!s.empty()){
        pair<int, int> p = s.top();
        s.pop();
        iw = p.first-1;
        ih = p.second+1;
        // 左上へ
        while(iw > 0 && ih < h){
            iw--;
            ih++;
            ans++;
        }
        // 右下へ
        iw = p.first+1;
        ih = p.second-1;
        while(iw < w && ih > 0){
            iw++;
            ih--;
            ans++;
        }
    }
    cout << ans << endl;
    return 0;
}

#include <bits/stdc++.h>
using namespace std;

int main(){
    long h, w;
    cin >> h >> w;

    if(h == 1 || w == 1){
        cout << 1 << endl;
        return 0;
    }

    long long ans = ((h / 2 + h % 2) * (w / 2 + w % 2)) + (((h - 1) / 2 + (h - 1) % 2) * (w / 2));
    cout << ans << endl;
    return 0;

    // long long ans = 0;

    // // 奇数列をカウント
    // // 1列目のマス数/2
    // long num_per_1col = h/2 + h%2;
    // // printf("%d\n", num_per_1col);
    // // かける奇数列数
    // long num_odd_col = w/2 + w%2;
    // ans += num_per_1col * num_odd_col;

    // // 偶数列をカウント
    // long num_per_2col = (h-1)/2 + (h-1)%2;
    // // 2列目のマス数
    // long num_even_col = w/2;
    // // かける偶数列数
    // ans += num_per_2col * num_even_col;

    // cout << ans << endl;
    // return 0;
}


/*
sqrt(a) + sqrt(b) < sqrt(c) ならば "Yes"、そうでなければ "No" と出力してください。
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
    long a, b, c;
    cin >> a >> b >> c;
    if(sqrt(a) + sqrt(b) < sqrt(c)){
        cout << "Yes" << endl;
    }else{
        cout << "No" << endl;
    }
}
int main(){
    long a, b, c;
    cin >> a >> b >> c;

    int d = c - a - b;
    if(d > 0 && 4*a*b < d*d){
        cout << "Yes" << endl;
    }else{
        cout << "No" << endl;
    }
}