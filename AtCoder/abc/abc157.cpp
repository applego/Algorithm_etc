#include <bits/stdc++.h>
using namespace std;

#include<stdio.h>

int main2(){
  int N;
  scanf("%d", &N);

  int num_of_page = N / 2 + N % 2;
  printf("%d\n", num_of_page);
}

/*
3*3のビンゴカード
上からi行目、左からj列目をAijとする

N個の数b1,b2,...bNが選ばれる。
選ばれた数が民後カードの中にあった場合、梵語カードのその数にしるしをつけます。
ビンゴが達成されているか（縦、横、斜めに一列並んだ3つの数の組があるか）を判定して
Yes or No
*/

#include<stdio.h>

int main3(){
  int grid[3][3];
  for(int i = 2; i >= 0; i--){
    for(int j = 0; j < 3; j++){
      // printf("%d %d\n", i, j);

      scanf("%d", &grid[i][j]);
    }
  }
  int N;
  scanf("%d", &N);
  for (int i = 0; i < N; i++){
    int b;
    scanf("%d", &b);
    for(int j = 0; j < 3; j++){
      for(int k = 0; k < 3; k++){
        if(grid[j][k] == b){
          grid[j][k] = 0;
        }
      }
    }
  }
  if(grid[0][0] == 0 && grid[0][1] == 0 && grid[0][2] == 0){
    printf("Yes\n");
    return 0;
  }
  if(grid[1][0] == 0 && grid[1][1] == 0 && grid[1][2] == 0){
    printf("Yes\n");
    return 0;
  }
  if(grid[2][0] == 0 && grid[2][1] == 0 && grid[2][2] == 0){
    printf("Yes\n");
    return 0;
  }
  if(grid[0][0] == 0 && grid[1][0] == 0 && grid[2][0] == 0){
    printf("Yes\n");
    return 0;
  }
  if(grid[0][1] == 0 && grid[1][1] == 0 && grid[2][1] == 0){
    printf("Yes\n");
    return 0;
  }
  if(grid[0][2] == 0 && grid[1][2] == 0 && grid[2][2] == 0){
    printf("Yes\n");
    return 0;
  }
  if(grid[0][0] == 0 && grid[1][1] == 0 && grid[2][2] == 0){
    printf("Yes\n");
    return 0;
  }
  if(grid[0][2] == 0 && grid[1][1] == 0 && grid[2][0] == 0){
    printf("Yes\n");
    return 0;
  }
  printf("No\n");
  return 0;
}

/*
3 3
1 7
3 2
1 7

*/
int main(){
  int N, M;
  scanf("%d %d", &N, &M);

  if(M==0){
    if(N==1){
      printf("-1\n");
      return 0;
    }
    printf("%d\n", pow(10, N - 1));
    return 0;
  }

  vector<int> num(N);
  for (int i = 0; i < M; i++){
    int s, c;
    scanf("%d %d", &s, &c);

    if(s==1 && c==0){
      printf("-1\n");
      return 0;
    }
    if(num[s - 1] != 0 && num[s - 1] != c){
      printf("-1\n");
      return 0;
    }
    num[s - 1] = c;
  }
  int ans = 0;
  for (int i = 0; i < N; i++){
    int idx_num = N - i - 1;
    ans += num[i] * pow(10, idx_num);
  }
  printf("%d\n", ans);
  return 0;
}