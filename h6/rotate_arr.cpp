#include <iostream>
#include <cstring>

char* rotate_array(char* arr, int r_number) {
    char temp;
    int j;
    int size = strlen(arr);

    for(int i = 0; i < r_number; i++) {
        temp = arr[size - 1];
        for(j = size - 2; j >= 0; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

void print(char* arr) {
    int size = strlen(arr);
	for(int i = 0; i < size; i++) {
		std::cout << arr[i] << " ";
	}
    std::cout << std::endl;
}

int main() {
    char arr[4] = {'a', 'b', 'c', 'd'};
    char *p = rotate_array(arr, 2);
    print(p);
}
