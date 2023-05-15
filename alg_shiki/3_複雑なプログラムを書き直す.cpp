#include <bits/stdc++.h>
using namespace std;

// 整数 3, −1, 0, 1, −13 に対して、それぞれ次の処理をするプログラムを作成してください。ただし、各出力は改行で区切ってください。
// 0より大きければ、positive
// 0ならば、zero
// 0より小さければ、negative
int main() {
    int arr[] = {3, -1, 0, 1, -13};

    for (int i = 0; i < 5; i++){
        if (arr[i] > 0){
            cout << "positive" << endl;
        }else if (arr[i] == 0){
            cout << "zero" << endl;
        }else{
            cout << "negative" << endl;
        }
    }
}