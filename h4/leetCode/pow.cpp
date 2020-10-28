#include<iostream>

class Solution {
public:
    double myPow(double x, int n) {
        double result = 1.0;
        while(n != 0){
            result *= x;
            n--;
        }
        return result;
    }
};


int main(){
    Solution obj;
    std::cout << obj.myPow(2.1, 3) << '\n';
    std::cout << obj.myPow(2.00000, 4) << '\n';
    return 0;
}