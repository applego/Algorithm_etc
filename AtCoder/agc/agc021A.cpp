/*
N 以下の正の整数の 
10 進法での各桁の和の最大値を求めてください。
*/

#include <bits/stdc++.h>
using namespace std;

long long digit_sum(long long n){
    long long sum = 0;
    while(n > 0){
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

int main(){
    long long n;
    cin >> n;

    long long max_of_digit_sum = digit_sum(n);

    while(n > 0){
        // if (n % 10 == 9) {
        //     n /= 10;
        // }
        // else {
        //     n--;
        // }
        n--;
        max_of_digit_sum = max(max_of_digit_sum, digit_sum(n));
        printf("n=%lld max_of_digit_sum=%lld\n", n, max_of_digit_sum);
    }
    // long long ans = digit_sum(max_of_digit_sum);
    cout << max_of_digit_sum << endl;
    return 0;
}

#include <bits/stdc++.h>
using namespace std;

int main(){
    long long n;
    cin >> n;

    if(n < 10) {
        cout << n << endl;
        return 0;
    }

    // nが何桁か
    int digit = 0;
    long long tmp = n;
    while(tmp > 0){
        tmp /= 10;
        digit++;
    }
    // nの各桁の和
    long long sum = 0;
    int first_digit = 0;
    tmp = n;
    for (int i = 0; i < digit; i++) {
        if(i==digit-1) first_digit = tmp % 10;
        sum += tmp % 10;
        tmp /= 10;
    }

    // printf("digit=%d sum=%lld first_digit=%d\n", digit, sum, first_digit);

    if(sum == 9 * digit){
        cout << sum << endl;
        return 0;
    }
    if(first_digit == 1 && sum - first_digit != 9 * (digit - 1)){
        cout << 9 * (digit - 1) << endl;
        return 0;
    }
    if(sum-first_digit == 9 * (digit - 1)){
        cout << first_digit + 9 * (digit - 1) << endl;
        return 0;
    }
    cout << first_digit -1 + 9 * (digit - 1) << endl;
    return 0;
}