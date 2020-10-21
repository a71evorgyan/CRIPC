#include<iostream>
using namespace std;

string intToRoman(int num) 
{ 
    int numbers[] = {1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000}; 
    string symbols[] = {"I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"}; 
    int i = sizeof(numbers)/sizeof(numbers[0]) - 1; 
    string romanNum = "";  
    while(num > 0) 
    { 
        int div = num / numbers[i]; 
        num = num % numbers[i]; 
        while(div--) 
        { 
            romanNum += symbols[i];
        } 
        i--; 
    }
    return romanNum;
} 
  
int main() 
{ 
    cout << intToRoman(17); 
  
    return 0; 
} 
