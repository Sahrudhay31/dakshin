#include <stdio.h>
#include <omp.h>
#define N 10
int main()
{
    int A[N];
    int sum = 0;
    // Initialize array
    for(int i = 0; i < N; i++)
        A[i] = i + 1;
    // Parallel sum
    #pragma omp parallel for reduction(+:sum)
    for(int i = 0; i < N; i++)
    {
        sum += A[i];
        printf("Thread %d adds A[%d] = %d\n",
               omp_get_thread_num(), i, A[i]);
    }
    printf("\nTotal Sum = %d\n", sum);
    return 0;
}