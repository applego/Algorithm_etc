#include <bits/stdc++.h>
using namespace std;


int main(){
  string S;
  cin >> S;

  if(S[2] == S[3] && S[4] == S[5]){
    printf("Yes\n");
  }else{
    printf("No\n");
  }
}

int main(){
  int X;
  scanf("%d", &X);

  int num_of_500 = X / 500;
  int num_of_5 = (X - num_of_500 * 500) / 5;
  int ans = num_of_500 * 1000 + num_of_5 * 5;
  printf("%d\n", ans);
}

/*
1週Kメートルの円形の湖
その周りのN軒の家がある。
i番目の家は、湖の北端から時計回りにAiメートルの位置にある。
いずれかの家から出発してN軒すべての家を尋ねるための最短移動距離を求めてください。
*/
int main(){
  int K, N;
  scanf("%d %d", &K, &N);

  int A[N];
  for(int i = 0; i < N; i++){
    scanf("%d", &A[i]);
  }

  int max_distance = 0;
  for(int i = 0; i < N - 1; i++){
    int distance = A[i + 1] - A[i];
    if(distance > max_distance){
      max_distance = distance;
    }
  }
  int distance = K - A[N - 1] + A[0];
  if(distance > max_distance){
    max_distance = distance;
  }
  int ans = K - max_distance;
  printf("%d\n", ans);
}