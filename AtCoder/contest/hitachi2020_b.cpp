#include <bits/stdc++.h>
using namespace std;

int main(){
    int A,B,M;
    cin >> A >> B >> M;
    vector<int> a(A);
    vector<int> b(B);
    int min_a = 1000000000;
    int min_b = 1000000000;
    for(int i=0; i<A; i++){
        cin >> a[i];
        if(a[i] < min_a){
            min_a = a[i];
        }
    }
    for(int i=0; i<B; i++){
        cin >> b[i];
        if(b[i] < min_b){
            min_b = b[i];
        }
    }
    // int min_a = *min_element(a.begin(), a.end());
    // int min_b = *min_element(b.begin(), b.end());
    int ans = min_a + min_b;
    for (int i = 0; i < M;i++){
        int x,y,c;
        cin >> x >> y >> c;
        int price = a[x - 1] + b[y - 1] - c;
        if(price < ans){
            ans = price;
        }
    }
    cout << ans << endl;
    
}