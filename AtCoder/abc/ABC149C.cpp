// X以上の素数のうち、最小のものを求めよ

#include <bits/stdc++.h>
using namespace std;


bool is_prime(int x){
  if(x == 1){
    return false;
  }
  for (int i = 2; i*i <= x; i++){
    if(x % i == 0){
      return false;
    }
  }
  return true;
}

int main(){
  int X;
  cin >> X;
  while(!is_prime(X)){
    X++;
  }
  cout << X << endl;
}