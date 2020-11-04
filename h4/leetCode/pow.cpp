#include<iostream>

class Solution {
public:
    double myPow(double x, int n) {
        if(x == 1) {
            return 1;
        }
        double result = 1.0;
        if(n == 0) 
        {
            return 1;
        }
        else 
        {
            int posN = abs(n);
            
            while(posN != 0){
                result *= x;
                posN--;
            }
            if(n < 0) {
                return 1 / result;
            }
            return result;
        }
   
    }
};

int main(){
    Solution obj;
    // std::cout << obj.myPow(2.1, 3) << '\n';
    std::cout << obj.myPow(2.00000, 0) << '\n';
    std::cout << obj.myPow(2.00000, -2) << '\n';
    // std::cout << obj.myPow(1, 1122) << '\n';
    return 0;
}

