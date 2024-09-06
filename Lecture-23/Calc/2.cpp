#include <iostream>
#include <cmath>
using namespace std;

bool valid(int arr[], int start, int end)
{
    for (int i = start; i <= end; ++i)
    {
        for (int j = i + 1; j <= end; ++j)
        {
            if (abs(arr[j] - arr[i]) > 2)
            {
                return false;
            }
        }
    }
    return true;
}

int count(int arr[], int n)
{
    int count = 0;
    for (int start = 0; start < n; ++start)
    {
        for (int end = start; end < n; ++end)
        {
            if (valid(arr, start, end))
            {
                ++count;
            }
        }
    }
    return count;
}

int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    cout << count(arr, n) << endl;

    return 0;
}
