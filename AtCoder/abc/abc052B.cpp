#include <bits/stdc++.h>
using namespace std;

int main(){
    int N;
    cin >> N;
    string S;
    cin >> S;
    int ans = 0;
    int current = 0;
    for(int i= 0;i<N;++i){
      if(S[i]== 'I'){
        ++current;
    }
    else{
      --current;
    }
    ans = max(ans, current);
    }
    cout << ans << endl;
}

