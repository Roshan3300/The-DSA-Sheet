export interface HandbookQuestion {
  name: string;
  desc: string;
  time: string;
  space: string;
  code: string;
}

export interface HandbookCategory {
  title: string;
  questions: HandbookQuestion[];
}

export const cppHandbookData: Record<string, HandbookCategory> = {
  prime: {
    title: '1. Prime Number',
    questions: [
      {
        name: 'Check Prime',
        desc: 'Determines if a given integer N is prime using O(sqrt(N)) trial division with 6k ± 1 optimizations.',
        time: 'O(sqrt(N))',
        space: 'O(1)',
        code: `bool isPrime(long long n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (long long i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) return false;
    }
    return true;
}`,
      },
      {
        name: 'Print Prime in Range',
        desc: 'Prints all prime numbers between L and R inclusive using the Sieve of Eratosthenes.',
        time: 'O(R log log R + (R - L))',
        space: 'O(R)',
        code: `void printPrimes(int L, int R) {
    std::vector<bool> primes(R + 1, true);
    primes[0] = primes[1] = false;
    for (int p = 2; p * p <= R; ++p) {
        if (primes[p]) {
            for (int i = p * p; i <= R; i += p)
                primes[i] = false;
        }
    }
    for (int i = L; i <= R; ++i) {
        if (primes[i]) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count Primes in Range',
        desc: 'Counts the number of primes in the range [L, R] using a localized sieve.',
        time: 'O(R log log R)',
        space: 'O(R)',
        code: `int countPrimes(int L, int R) {
    std::vector<bool> primes(R + 1, true);
    primes[0] = primes[1] = false;
    for (int p = 2; p * p <= R; ++p) {
        if (primes[p]) {
            for (int i = p * p; i <= R; i += p)
                primes[i] = false;
        }
    }
    int count = 0;
    for (int i = L; i <= R; ++i) {
        if (primes[i]) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum of Primes',
        desc: 'Calculates the sum of all prime numbers in the range [L, R] avoiding integer overflow.',
        time: 'O(R log log R)',
        space: 'O(R)',
        code: `long long sumOfPrimes(int L, int R) {
    std::vector<bool> primes(R + 1, true);
    primes[0] = primes[1] = false;
    for (int p = 2; p * p <= R; ++p) {
        if (primes[p]) {
            for (int i = p * p; i <= R; i += p)
                primes[i] = false;
        }
    }
    long long sum = 0;
    for (int i = L; i <= R; ++i) {
        if (primes[i]) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Nth Prime Number',
        desc: 'Finds the N-th prime number using Sieve limit approximations based on the Prime Number Theorem.',
        time: 'O(M log log M) where M ≈ N log N',
        space: 'O(N log N)',
        code: `long long nthPrime(int n) {
    if (n < 1) return -1;
    int limit = (n < 6) ? 15 : n * log(n) + n * log(log(n));
    std::vector<bool> primes(limit + 1, true);
    primes[0] = primes[1] = false;
    for (int p = 2; p * p <= limit; ++p) {
        if (primes[p]) {
            for (int i = p * p; i <= limit; i += p)
                primes[i] = false;
        }
    }
    int count = 0;
    for (int i = 2; i <= limit; ++i) {
        if (primes[i]) {
            count++;
            if (count == n) return i;
        }
    }
    return -1;
}`,
      },
      {
        name: 'Largest Prime <= N',
        desc: 'Finds the largest prime number less than or equal to N.',
        time: 'O(N * sqrt(N)) worst case, usually much faster',
        space: 'O(1)',
        code: `long long largestPrimeLE(long long n) {
    for (long long i = n; i >= 2; --i) {
        if (isPrime(i)) return i; // Uses standard primality helper
    }
    return -1;
}`,
      },
      {
        name: 'Smallest Prime >= N',
        desc: 'Finds the smallest prime number greater than or equal to N.',
        time: 'O(K * sqrt(N)) where K is distance to next prime',
        space: 'O(1)',
        code: `long long smallestPrimeGE(long long n) {
    if (n <= 2) return 2;
    long long i = n;
    while (true) {
        if (isPrime(i)) return i;
        i++;
    }
}`,
      },
      {
        name: 'Twin Prime',
        desc: 'Finds all twin prime pairs up to N. Twin primes are prime pairs with a difference of 2.',
        time: 'O(N log log N)',
        space: 'O(N)',
        code: `std::vector<std::pair<int, int>> twinPrimes(int n) {
    std::vector<bool> is_prime(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    for (int p = 2; p * p <= n; ++p) {
        if (is_prime[p]) {
            for (int i = p * p; i <= n; i += p)
                is_prime[i] = false;
        }
    }
    std::vector<std::pair<int, int>> twins;
    for (int i = 3; i + 2 <= n; ++i) {
        if (is_prime[i] && is_prime[i + 2]) {
            twins.push_back({i, i + 2});
        }
    }
    return twins;
}`,
      },
      {
        name: 'Co-prime',
        desc: 'Checks if two numbers are co-prime (their GCD is 1).',
        time: 'O(log(min(A, B)))',
        space: 'O(1)',
        code: `#include <numeric>

bool isCoPrime(long long a, long long b) {
    return std::gcd(a, b) == 1;
}`,
      },
      {
        name: 'Sieve of Eratosthenes',
        desc: 'Classic Sieve implementation for fast prime identification up to N.',
        time: 'O(N log log N)',
        space: 'O(N)',
        code: `std::vector<int> getPrimesToN(int n) {
    std::vector<bool> is_prime(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    for (int p = 2; p * p <= n; ++p) {
        if (is_prime[p]) {
            for (int i = p * p; i <= n; i += p)
                is_prime[i] = false;
        }
    }
    std::vector<int> primes;
    for (int i = 2; i <= n; ++i) {
        if (is_prime[i]) primes.push_back(i);
    }
    return primes;
}`,
      },
    ],
  },
  palindrome: {
    title: '2. Palindrome Number',
    questions: [
      {
        name: 'Check Palindrome',
        desc: 'Checks if a numeric integer reads the same forwards and backwards without converting to a string.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `bool isPalindrome(long long n) {
    if (n < 0) return false;
    long long reversed = 0, original = n;
    while (n > 0) {
        reversed = reversed * 10 + n % 10;
        n /= 10;
    }
    return original == reversed;
}`,
      },
      {
        name: 'Print Palindrome in Range',
        desc: 'Prints all palindromic numbers within the interval [L, R].',
        time: 'O((R - L) * log10(R))',
        space: 'O(1)',
        code: `void printPalindromes(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        if (isPalindrome(i)) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count Palindromes',
        desc: 'Counts the total palindromic numbers between L and R.',
        time: 'O((R - L) * log10(R))',
        space: 'O(1)',
        code: `long long countPalindromes(long long L, long long R) {
    long long count = 0;
    for (long long i = L; i <= R; ++i) {
        if (isPalindrome(i)) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum of Palindromes',
        desc: 'Finds the sum of all palindromic numbers in a range [L, R].',
        time: 'O((R - L) * log10(R))',
        space: 'O(1)',
        code: `long long sumPalindromes(long long L, long long R) {
    long long sum = 0;
    for (long long i = L; i <= R; ++i) {
        if (isPalindrome(i)) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Palindrome',
        desc: 'Finds the smallest palindrome strictly greater than N using string manipulation.',
        time: 'O(log10(N))',
        space: 'O(log10(N))',
        code: `std::string nextPalindromeString(std::string s) {
    int n = s.length();
    std::string left = s.substr(0, (n + 1) / 2);
    std::string right = left;
    std::reverse(right.begin(), right.end());
    std::string cand = left + (n % 2 ? right.substr(1) : right);
    if (cand > s) return cand;

    for (int i = left.length() - 1; i >= 0; --i) {
        if (left[i] != '9') { left[i]++; break; }
        else left[i] = '0';
    }
    if (left[0] == '0') {
        left = "1" + left;
        std::string temp = left;
        std::reverse(temp.begin(), temp.end());
        return left + temp.substr(1);
    }
    right = left;
    std::reverse(right.begin(), right.end());
    return left + (n % 2 ? right.substr(1) : right);
}

long long nextPalindrome(long long n) {
    return std::stoll(nextPalindromeString(std::to_string(n)));
}`,
      },
      {
        name: 'Largest Palindrome < N',
        desc: 'Finds the largest palindrome number less than N.',
        time: 'O(K * log10(N)) where K is the distance',
        space: 'O(1)',
        code: `long long largestPalindromeLessThan(long long n) {
    for (long long i = n - 1; i >= 0; --i) {
        if (isPalindrome(i)) return i;
    }
    return -1;
}`,
      },
      {
        name: 'Smallest Palindrome > N',
        desc: 'Finds the smallest palindrome greater than N.',
        time: 'O(log10(N))',
        space: 'O(log10(N))',
        code: `long long smallestPalindromeGreaterThan(long long n) {
    return nextPalindrome(n); // Leverages structural string logic
}`,
      },
      {
        name: 'Reverse and Check Palindrome',
        desc: 'Reverses a string representation and compares it directly.',
        time: 'O(N)',
        space: 'O(N)',
        code: `bool reverseAndCheck(std::string s) {
    std::string rev = s;
    std::reverse(rev.begin(), rev.end());
    return rev == s;
}`,
      },
    ],
  },
  armstrong: {
    title: '3. Armstrong Number',
    questions: [
      {
        name: 'Check Armstrong',
        desc: 'Checks if a number is an Armstrong (narcissistic) number equal to the sum of its digits raised to the power of the number of digits.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `bool isArmstrong(long long n) {
    if (n < 0) return false;
    long long temp = n, sum = 0;
    int digits = std::to_string(n).length();
    while (temp > 0) {
        int d = temp % 10;
        sum += std::pow(d, digits);
        temp /= 10;
    }
    return sum == n;
}`,
      },
      {
        name: 'Armstrong in Range',
        desc: 'Finds and prints all Armstrong numbers in range [L, R].',
        time: 'O((R - L) * log10(R))',
        space: 'O(1)',
        code: `void printArmstrongs(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        if (isArmstrong(i)) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count Armstrong',
        desc: 'Counts Armstrong numbers in a given range.',
        time: 'O((R - L) * log10(R))',
        space: 'O(1)',
        code: `int countArmstrongs(long long L, long long R) {
    int count = 0;
    for (long long i = L; i <= R; ++i) {
        if (isArmstrong(i)) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum Armstrong',
        desc: 'Sums all Armstrong numbers in range [L, R].',
        time: 'O((R - L) * log10(R))',
        space: 'O(1)',
        code: `long long sumArmstrongs(long long L, long long R) {
    long long sum = 0;
    for (long long i = L; i <= R; ++i) {
        if (isArmstrong(i)) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Armstrong',
        desc: 'Generates the next Armstrong number greater than N.',
        time: 'O(K * log10(N)) where K is iteration distance',
        space: 'O(1)',
        code: `long long nextArmstrong(long long n) {
    long long i = n + 1;
    while (true) {
        if (isArmstrong(i)) return i;
        i++;
    }
}`,
      },
      {
        name: 'Largest Armstrong <= N',
        desc: 'Finds the largest Armstrong number less than or equal to N.',
        time: 'O(K * log10(N))',
        space: 'O(1)',
        code: `long long largestArmstrongLE(long long n) {
    for (long long i = n; i >= 0; --i) {
        if (isArmstrong(i)) return i;
    }
    return -1;
}`,
      },
    ],
  },
  strong: {
    title: '4. Strong Number',
    questions: [
      {
        name: 'Check Strong Number',
        desc: 'Checks if a number is a Strong number (sum of the factorials of its digits equals the number). Uses O(1) precomputed array lookup.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `const int FACT[10] = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};

bool isStrong(long long n) {
    if (n <= 0) return false;
    long long temp = n, sum = 0;
    while (temp > 0) {
        sum += FACT[temp % 10];
        temp /= 10;
    }
    return sum == n;
}`,
      },
      {
        name: 'Strong Numbers in Range',
        desc: 'Prints all Strong numbers in the range [L, R].',
        time: 'O((R-L) * log10(R))',
        space: 'O(1)',
        code: `void printStrongs(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        if (isStrong(i)) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count Strong Numbers',
        desc: 'Counts all Strong numbers in the range [L, R].',
        time: 'O((R-L) * log10(R))',
        space: 'O(1)',
        code: `int countStrongs(long long L, long long R) {
    int count = 0;
    for (long long i = L; i <= R; ++i) {
        if (isStrong(i)) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum Strong Numbers',
        desc: 'Sums all Strong numbers in a range [L, R].',
        time: 'O((R-L) * log10(R))',
        space: 'O(1)',
        code: `long long sumStrongs(long long L, long long R) {
    long long sum = 0;
    for (long long i = L; i <= R; ++i) {
        if (isStrong(i)) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Strong Number',
        desc: 'Finds the next Strong number greater than N.',
        time: 'O(K * log10(N))',
        space: 'O(1)',
        code: `long long nextStrong(long long n) {
    long long i = n + 1;
    while (true) {
        if (isStrong(i)) return i;
        i++;
    }
}`,
      },
      {
        name: 'Largest Strong Number',
        desc: 'Finds the largest Strong number less than or equal to N.',
        time: 'O(K * log10(N))',
        space: 'O(1)',
        code: `long long largestStrongLE(long long n) {
    for (long long i = n; i >= 1; --i) {
        if (isStrong(i)) return i;
    }
    return -1;
}`,
      },
    ],
  },
  perfect: {
    title: '5. Perfect Number',
    questions: [
      {
        name: 'Check Perfect Number',
        desc: 'A perfect number is equal to the sum of its proper divisors. Checked in O(sqrt(N)) space-optimized time complexity.',
        time: 'O(sqrt(N))',
        space: 'O(1)',
        code: `bool isPerfect(long long n) {
    if (n <= 1) return false;
    long long sum = 1;
    for (long long i = 2; i * i <= n; ++i) {
        if (n % i == 0) {
            if (i * i != n) sum += i + n / i;
            else sum += i;
        }
    }
    return sum == n;
}`,
      },
      {
        name: 'Perfect Numbers in Range',
        desc: 'Identifies and displays all perfect numbers in a range.',
        time: 'O((R - L) * sqrt(R))',
        space: 'O(1)',
        code: `void printPerfects(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        if (isPerfect(i)) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count Perfect Numbers',
        desc: 'Counts the occurrences of perfect numbers in range [L, R].',
        time: 'O((R - L) * sqrt(R))',
        space: 'O(1)',
        code: `int countPerfects(long long L, long long R) {
    int count = 0;
    for (long long i = L; i <= R; ++i) {
        if (isPerfect(i)) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum Perfect Numbers',
        desc: 'Sums perfect numbers found in range [L, R].',
        time: 'O((R - L) * sqrt(R))',
        space: 'O(1)',
        code: `long long sumPerfects(long long L, long long R) {
    long long sum = 0;
    for (long long i = L; i <= R; ++i) {
        if (isPerfect(i)) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Perfect Number',
        desc: 'Finds the next perfect number greater than N.',
        time: 'O(K * sqrt(N)) where K is distance to next perfect number',
        space: 'O(1)',
        code: `long long nextPerfect(long long n) {
    long long i = n + 1;
    while (true) {
        if (isPerfect(i)) return i;
        i++;
    }
}`,
      },
      {
        name: 'Largest Perfect Number',
        desc: 'Finds the largest perfect number less than or equal to N.',
        time: 'O(K * sqrt(N))',
        space: 'O(1)',
        code: `long long largestPerfectLE(long long n) {
    for (long long i = n; i >= 2; --i) {
        if (isPerfect(i)) return i;
    }
    return -1;
}`,
      },
    ],
  },
  happy: {
    title: '6. Happy Number',
    questions: [
      {
        name: 'Check Happy Number',
        desc: "Evaluates if a number is happy (sum of square of digits iteratively reaches 1) using Floyd's Tortoise and Hare cycle detection algorithm.",
        time: 'O(log(N))',
        space: 'O(1)',
        code: `long long getSquareSum(long long n) {
    long long sum = 0;
    while (n > 0) {
        long long d = n % 10;
        sum += d * d;
        n /= 10;
    }
    return sum;
}

bool isHappy(long long n) {
    long long slow = n, fast = n;
    do {
        slow = getSquareSum(slow);
        fast = getSquareSum(getSquareSum(fast));
    } while (slow != fast);
    return slow == 1;
}`,
      },
      {
        name: 'Happy Numbers in Range',
        desc: 'Outputs all happy numbers in range [L, R].',
        time: 'O((R-L) * log(R))',
        space: 'O(1)',
        code: `void printHappys(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        if (isHappy(i)) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count Happy Numbers',
        desc: 'Counts how many happy numbers are in range [L, R].',
        time: 'O((R-L) * log(R))',
        space: 'O(1)',
        code: `int countHappys(long long L, long long R) {
    int count = 0;
    for (long long i = L; i <= R; ++i) {
        if (isHappy(i)) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum Happy Numbers',
        desc: 'Calculates the sum of happy numbers in range [L, R].',
        time: 'O((R-L) * log(R))',
        space: 'O(1)',
        code: `long long sumHappys(long long L, long long R) {
    long long sum = 0;
    for (long long i = L; i <= R; ++i) {
        if (isHappy(i)) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Happy Number',
        desc: 'Identifies the next happy number strictly greater than N.',
        time: 'O(K * log(N))',
        space: 'O(1)',
        code: `long long nextHappy(long long n) {
    long long i = n + 1;
    while (true) {
        if (isHappy(i)) return i;
        i++;
    }
}`,
      },
    ],
  },
  fibonacci: {
    title: '7. Fibonacci',
    questions: [
      {
        name: 'Print Fibonacci Series',
        desc: 'Outputs the standard Fibonacci series up to N terms.',
        time: 'O(N)',
        space: 'O(1)',
        code: `void printFibonacci(int n) {
    long long a = 0, b = 1;
    for (int i = 0; i < n; ++i) {
        std::cout << a << " ";
        long long next = a + b;
        a = b;
        b = next;
    }
}`,
      },
      {
        name: 'Nth Fibonacci',
        desc: 'Computes the Nth Fibonacci number iteratively.',
        time: 'O(N)',
        space: 'O(1)',
        code: `long long nthFibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    long long a = 0, b = 1;
    for (int i = 2; i <= n; ++i) {
        long long next = a + b;
        a = b;
        b = next;
    }
    return b;
}`,
      },
      {
        name: 'Fibonacci using Recursion',
        desc: 'Recursive computation of the N-th Fibonacci number.',
        time: 'O(2^N)',
        space: 'O(N) call stack',
        code: `long long fibRecursive(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}`,
      },
      {
        name: 'Fibonacci using DP',
        desc: 'Calculates the N-th Fibonacci number using Memoization.',
        time: 'O(N)',
        space: 'O(N)',
        code: `long long fibDP(int n, std::vector<long long>& memo) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    if (memo[n] != -1) return memo[n];
    return memo[n] = fibDP(n - 1, memo) + fibDP(n - 2, memo);
}`,
      },
      {
        name: 'Fibonacci in Range',
        desc: 'Prints Fibonacci values that fall within the range [L, R].',
        time: 'O(log(R))',
        space: 'O(1)',
        code: `void printFibInRange(long long L, long long R) {
    long long a = 0, b = 1;
    while (a <= R) {
        if (a >= L) std::cout << a << " ";
        long long next = a + b;
        a = b;
        b = next;
    }
}`,
      },
      {
        name: 'Count Fibonacci',
        desc: 'Counts the number of Fibonacci values present in a range [L, R].',
        time: 'O(log(R))',
        space: 'O(1)',
        code: `int countFibInRange(long long L, long long R) {
    long long a = 0, b = 1, count = 0;
    while (a <= R) {
        if (a >= L) count++;
        long long next = a + b;
        a = b;
        b = next;
    }
    return count;
}`,
      },
      {
        name: 'Sum Fibonacci',
        desc: 'Sums Fibonacci values that fall in a range [L, R].',
        time: 'O(log(R))',
        space: 'O(1)',
        code: `long long sumFibInRange(long long L, long long R) {
    long long a = 0, b = 1, sum = 0;
    while (a <= R) {
        if (a >= L) sum += a;
        long long next = a + b;
        a = b;
        b = next;
    }
    return sum;
}`,
      },
      {
        name: 'Reverse Fibonacci',
        desc: 'Outputs Fibonacci sequence terms in reverse order starting from term N.',
        time: 'O(N)',
        space: 'O(N)',
        code: `void printReverseFib(int n) {
    std::vector<long long> fib(n);
    if (n <= 0) return;
    fib[0] = 0;
    if (n > 1) fib[1] = 1;
    for (int i = 2; i < n; ++i) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    for (int i = n - 1; i >= 0; --i) {
        std::cout << fib[i] << " ";
    }
}`,
      },
      {
        name: 'Check Fibonacci',
        desc: 'Checks if a given number is a valid Fibonacci number using the mathematical relation (5N^2 ± 4 is a perfect square).',
        time: 'O(1) excluding square root',
        space: 'O(1)',
        code: `bool isPerfectSquare(long long x) {
    long long s = std::sqrt(x);
    return (s * s == x);
}

bool isFibonacci(long long n) {
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}`,
      },
      {
        name: 'Next Fibonacci',
        desc: 'Finds the first Fibonacci number strictly greater than N.',
        time: 'O(log(N))',
        space: 'O(1)',
        code: `long long nextFibonacci(long long n) {
    long long a = 0, b = 1;
    while (a <= n) {
        long long next = a + b;
        a = b;
        b = next;
    }
    return a;
}`,
      },
    ],
  },
  factorial: {
    title: '8. Factorial',
    questions: [
      {
        name: 'Factorial',
        desc: 'Computes N! iteratively using standard scalar loops.',
        time: 'O(N)',
        space: 'O(1)',
        code: `long long factorial(int n) {
    long long res = 1;
    for (int i = 2; i <= n; ++i) res *= i;
    return res;
}`,
      },
      {
        name: 'Recursive Factorial',
        desc: 'Computes N! using recursion.',
        time: 'O(N)',
        space: 'O(N) stack',
        code: `long long factorialRecursive(int n) {
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}`,
      },
      {
        name: 'Large Factorial',
        desc: 'Calculates factorials of large values of N that overflow standard registers, using digit-array simulation.',
        time: 'O(N^2)',
        space: 'O(N)',
        code: `std::vector<int> largeFactorial(int n) {
    std::vector<int> res;
    res.push_back(1);
    for (int x = 2; x <= n; ++x) {
        int carry = 0;
        for (size_t i = 0; i < res.size(); ++i) {
            int prod = res[i] * x + carry;
            res[i] = prod % 10;
            carry = prod / 10;
        }
        while (carry) {
            res.push_back(carry % 10);
            carry /= 10;
        }
    }
    std::reverse(res.begin(), res.end());
    return res;
}`,
      },
      {
        name: 'Trailing Zeros',
        desc: "Counts trailing zeros in N! using Legendre's Formula.",
        time: 'O(log5(N))',
        space: 'O(1)',
        code: `int trailingZeros(int n) {
    int count = 0;
    for (int i = 5; n / i >= 1; i *= 5) {
        count += n / i;
    }
    return count;
}`,
      },
      {
        name: 'Count Digits in Factorial',
        desc: "Counts the exact number of digits in N! using Kamenetsky's log-approximation formula.",
        time: 'O(1)',
        space: 'O(1)',
        code: `long long countDigitsInFactorial(int n) {
    if (n < 0) return 0;
    if (n <= 1) return 1;
    double x = (n * log10(n / M_E) + log10(2 * M_PI * n) / 2.0);
    return floor(x) + 1;
}`,
      },
      {
        name: 'Sum of Digits of Factorial',
        desc: 'Sum of all digits present in N! using big-integer representation.',
        time: 'O(N^2)',
        space: 'O(N)',
        code: `int sumDigitsFactorial(int n) {
    std::vector<int> digits = largeFactorial(n);
    int sum = 0;
    for (int d : digits) sum += d;
    return sum;
}`,
      },
      {
        name: 'Check Factorial Number',
        desc: 'Determines if a given value is the exact factorial value of any positive integer.',
        time: 'O(K) where K! = N',
        space: 'O(1)',
        code: `bool isFactorialNumber(long long n) {
    long long temp = 1;
    int i = 1;
    while (temp < n) {
        i++;
        temp *= i;
    }
    return temp == n;
}`,
      },
      {
        name: 'Next Factorial Number',
        desc: 'Finds the next valid factorial number strictly greater than N.',
        time: 'O(K)',
        space: 'O(1)',
        code: `long long nextFactorialNumber(long long n) {
    long long temp = 1;
    int i = 1;
    while (temp <= n) {
        i++;
        temp *= i;
    }
    return temp;
}`,
      },
    ],
  },
  reverse: {
    title: '9. Reverse Number',
    questions: [
      {
        name: 'Reverse Number',
        desc: 'Standard numerical reversion with negative preservation.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `long long reverseMath(long long n) {
    long long rev = 0;
    bool neg = n < 0;
    if (neg) n = -n;
    while (n > 0) {
        rev = rev * 10 + n % 10;
        n /= 10;
    }
    return neg ? -rev : rev;
}`,
      },
      {
        name: 'Reverse without String',
        desc: 'Reverses number using basic numerical modular division.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `long long reverseNoString(long long n) {
    return reverseMath(n); // Reference modular algorithm
}`,
      },
      {
        name: 'Reverse using String',
        desc: 'Reverses value by converting representation to string.',
        time: 'O(log10(N))',
        space: 'O(log10(N))',
        code: `#include <string>
#include <algorithm>

long long reverseString(long long n) {
    std::string s = std::to_string(std::abs(n));
    std::reverse(s.begin(), s.end());
    long long rev = std::stoll(s);
    return n < 0 ? -rev : rev;
}`,
      },
      {
        name: 'Check Reverse Equality',
        desc: 'Checks if a number equals its reverse value.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `bool checkReverseEquality(long long n) {
    return n == reverseMath(n);
}`,
      },
      {
        name: 'Reverse in Range',
        desc: 'Reverses elements sequentially within boundaries.',
        time: 'O((R - L) * log10(R))',
        space: 'O(1)',
        code: `void reverseInRange(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        std::cout << reverseMath(i) << " ";
    }
}`,
      },
    ],
  },
  'count-digits': {
    title: '10. Count Digits',
    questions: [
      {
        name: 'Count Digits',
        desc: 'Calculates the total number of digits using logarithmic calculations.',
        time: 'O(1)',
        space: 'O(1)',
        code: `int countDigits(long long n) {
    if (n == 0) return 1;
    return std::log10(std::abs(n)) + 1;
}`,
      },
      {
        name: 'Count Even Digits',
        desc: 'Counts digits that are divisible by 2.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `int countEvenDigits(long long n) {
    n = std::abs(n);
    int count = 0;
    while (n > 0) {
        if ((n % 10) % 2 == 0) count++;
        n /= 10;
    }
    return count;
}`,
      },
      {
        name: 'Count Odd Digits',
        desc: 'Counts odd value digits.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `int countOddDigits(long long n) {
    n = std::abs(n);
    int count = 0;
    while (n > 0) {
        if ((n % 10) % 2 != 0) count++;
        n /= 10;
    }
    return count;
}`,
      },
      {
        name: 'Count Zeroes',
        desc: 'Counts the presence of zeroes in the representation.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `int countZeroes(long long n) {
    if (n == 0) return 1;
    n = std::abs(n);
    int count = 0;
    while (n > 0) {
        if (n % 10 == 0) count++;
        n /= 10;
    }
    return count;
}`,
      },
      {
        name: 'Count Specific Digit',
        desc: 'Counts instances of target digit in integer representation.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `int countSpecificDigit(long long n, int digit) {
    if (n == 0 && digit == 0) return 1;
    n = std::abs(n);
    int count = 0;
    while (n > 0) {
        if (n % 10 == digit) count++;
        n /= 10;
    }
    return count;
}`,
      },
    ],
  },
  'sum-digits': {
    title: '11. Sum of Digits',
    questions: [
      {
        name: 'Sum of Digits',
        desc: 'Sums digits.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `long long sumOfDigits(long long n) {
    n = std::abs(n);
    long long sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}`,
      },
      {
        name: 'Product of Digits',
        desc: 'Finds cumulative product of digits.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `long long productOfDigits(long long n) {
    n = std::abs(n);
    if (n == 0) return 0;
    long long prod = 1;
    while (n > 0) {
        prod *= (n % 10);
        n /= 10;
    }
    return prod;
}`,
      },
      {
        name: 'Sum Even Digits',
        desc: 'Sums up only even digits.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `long long sumEvenDigits(long long n) {
    n = std::abs(n);
    long long sum = 0;
    while (n > 0) {
        int d = n % 10;
        if (d % 2 == 0) sum += d;
        n /= 10;
    }
    return sum;
}`,
      },
      {
        name: 'Sum Odd Digits',
        desc: 'Sums up only odd digits.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `long long sumOddDigits(long long n) {
    n = std::abs(n);
    long long sum = 0;
    while (n > 0) {
        int d = n % 10;
        if (d % 2 != 0) sum += d;
        n /= 10;
    }
    return sum;
}`,
      },
      {
        name: 'Largest Digit',
        desc: 'Identifies the highest digit.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `int largestDigit(long long n) {
    if (n == 0) return 0;
    n = std::abs(n);
    int max_d = 0;
    while (n > 0) {
        max_d = std::max(max_d, (int)(n % 10));
        n /= 10;
    }
    return max_d;
}`,
      },
      {
        name: 'Smallest Digit',
        desc: 'Identifies the smallest digit.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `int smallestDigit(long long n) {
    if (n == 0) return 0;
    n = std::abs(n);
    int min_d = 9;
    while (n > 0) {
        min_d = std::min(min_d, (int)(n % 10));
        n /= 10;
    }
    return min_d;
}`,
      },
    ],
  },
  gcd: {
    title: '12. GCD / HCF',
    questions: [
      {
        name: 'Euclid Algorithm',
        desc: 'Iterative Euclid algorithm for greatest common divisor.',
        time: 'O(log(min(A, B)))',
        space: 'O(1)',
        code: `long long gcdIterative(long long a, long long b) {
    while (b != 0) {
        long long temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}`,
      },
      {
        name: 'Recursive GCD',
        desc: 'Recursive implementation of Euclidean GCD.',
        time: 'O(log(min(A, B)))',
        space: 'O(log(min(A, B))) stack',
        code: `long long gcdRecursive(long long a, long long b) {
    if (b == 0) return a;
    return gcdRecursive(b, a % b);
}`,
      },
      {
        name: 'GCD of Array',
        desc: 'Finds the collective GCD of an array of numbers.',
        time: 'O(N * log(min_element))',
        space: 'O(1)',
        code: `#include <numeric>

long long gcdArray(const std::vector<long long>& arr) {
    long long result = arr[0];
    for (size_t i = 1; i < arr.size(); ++i) {
        result = std::gcd(result, arr[i]);
    }
    return result;
}`,
      },
      {
        name: 'GCD of Three Numbers',
        desc: 'Aggregated 3-value GCD.',
        time: 'O(log(min(A, B, C)))',
        space: 'O(1)',
        code: `#include <numeric>

long long gcdThree(long long a, long long b, long long c) {
    return std::gcd(std::gcd(a, b), c);
}`,
      },
      {
        name: 'GCD in Range',
        desc: 'Computes structural subarray GCD.',
        time: 'O(R - L)',
        space: 'O(1)',
        code: `#include <numeric>

long long gcdInRange(const std::vector<long long>& arr, int L, int R) {
    long long result = arr[L];
    for (int i = L + 1; i <= R; ++i) {
        result = std::gcd(result, arr[i]);
    }
    return result;
}`,
      },
      {
        name: 'Co-prime Check',
        desc: 'Checks if two numbers share only 1 as a common factor.',
        time: 'O(log(min(A, B)))',
        space: 'O(1)',
        code: `#include <numeric>

bool isCoPrime(long long a, long long b) {
    return std::gcd(a, b) == 1;
}`,
      },
    ],
  },
  lcm: {
    title: '13. LCM',
    questions: [
      {
        name: 'LCM of Two Numbers',
        desc: 'Computes Least Common Multiple of two numbers.',
        time: 'O(log(min(A, B)))',
        space: 'O(1)',
        code: `#include <numeric>

long long lcm(long long a, long long b) {
    if (a == 0 || b == 0) return 0;
    return (a / std::gcd(a, b)) * b;
}`,
      },
      {
        name: 'LCM using GCD',
        desc: 'Standard LCM calculation via GCD.',
        time: 'O(log(min(A, B)))',
        space: 'O(1)',
        code: `long long lcmViaGCD(long long a, long long b) {
    return lcm(a, b);
}`,
      },
      {
        name: 'LCM of Three Numbers',
        desc: 'Three value LCM calculation.',
        time: 'O(log(min))',
        space: 'O(1)',
        code: `long long lcmThree(long long a, long long b, long long c) {
    return lcm(lcm(a, b), c);
}`,
      },
      {
        name: 'LCM of Array',
        desc: 'Computes array-wide LCM.',
        time: 'O(N * log(min))',
        space: 'O(1)',
        code: `long long lcmArray(const std::vector<long long>& arr) {
    long long result = arr[0];
    for (size_t i = 1; i < arr.size(); ++i) {
        result = lcm(result, arr[i]);
    }
    return result;
}`,
      },
      {
        name: 'LCM in Range',
        desc: 'Computes cumulative subarray LCM.',
        time: 'O(R - L)',
        space: 'O(1)',
        code: `long long lcmInRange(const std::vector<long long>& arr, int L, int R) {
    long long result = arr[L];
    for (int i = L + 1; i <= R; ++i) {
        result = lcm(result, arr[i]);
    }
    return result;
}`,
      },
    ],
  },
  'perfect-square': {
    title: '14. Perfect Square',
    questions: [
      {
        name: 'Check Perfect Square',
        desc: 'Checks if root calculation resolves to square.',
        time: 'O(1) sqrt',
        space: 'O(1)',
        code: `bool isPerfectSquare(long long n) {
    if (n < 0) return false;
    long long root = std::sqrt(n);
    return root * root == n;
}`,
      },
      {
        name: 'Perfect Squares in Range',
        desc: 'Prints all perfect squares within [L, R].',
        time: 'O(sqrt(R) - sqrt(L))',
        space: 'O(1)',
        code: `void printPerfectSquares(long long L, long long R) {
    long long start = std::ceil(std::sqrt(L));
    long long end = std::floor(std::sqrt(R));
    for (long long i = start; i <= end; ++i) {
        std::cout << i * i << " ";
    }
}`,
      },
      {
        name: 'Count Perfect Squares',
        desc: 'Counts perfect squares in range.',
        time: 'O(1)',
        space: 'O(1)',
        code: `long long countPerfectSquares(long long L, long long R) {
    long long start = std::ceil(std::sqrt(L));
    long long end = std::floor(std::sqrt(R));
    if (start > end) return 0;
    return end - start + 1;
}`,
      },
      {
        name: 'Sum Perfect Squares',
        desc: 'Sums up perfect squares in range.',
        time: 'O(sqrt(R) - sqrt(L))',
        space: 'O(1)',
        code: `long long sumPerfectSquares(long long L, long long R) {
    long long start = std::ceil(std::sqrt(L));
    long long end = std::floor(std::sqrt(R));
    long long sum = 0;
    for (long long i = start; i <= end; ++i) {
        sum += i * i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Perfect Square',
        desc: 'Calculates the next square value.',
        time: 'O(1)',
        space: 'O(1)',
        code: `long long nextPerfectSquare(long long n) {
    if (n < 0) return 0;
    long long root = std::floor(std::sqrt(n));
    return (root + 1) * (root + 1);
}`,
      },
    ],
  },
  'perfect-cube': {
    title: '15. Perfect Cube',
    questions: [
      {
        name: 'Check Perfect Cube',
        desc: 'Uses rounded cube root to evaluate.',
        time: 'O(1)',
        space: 'O(1)',
        code: `bool isPerfectCube(long long n) {
    long long root = std::round(std::cbrt(n));
    return root * root * root == n;
}`,
      },
      {
        name: 'Cubes in Range',
        desc: 'Outputs cubes.',
        time: 'O(cbrt(R))',
        space: 'O(1)',
        code: `void printCubes(long long L, long long R) {
    long long start = std::ceil(std::cbrt(L));
    long long end = std::floor(std::cbrt(R));
    for (long long i = start; i <= end; ++i) {
        std::cout << i * i * i << " ";
    }
}`,
      },
      {
        name: 'Count Cubes',
        desc: 'Counts cubes in range.',
        time: 'O(1)',
        space: 'O(1)',
        code: `long long countCubes(long long L, long long R) {
    long long start = std::ceil(std::cbrt(L));
    long long end = std::floor(std::cbrt(R));
    if (start > end) return 0;
    return end - start + 1;
}`,
      },
      {
        name: 'Sum Cubes',
        desc: 'Sums up cubes.',
        time: 'O(cbrt(R))',
        space: 'O(1)',
        code: `long long sumCubes(long long L, long long R) {
    long long start = std::ceil(std::cbrt(L));
    long long end = std::floor(std::cbrt(R));
    long long sum = 0;
    for (long long i = start; i <= end; ++i) {
        sum += i * i * i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Cube',
        desc: 'Calculates next larger cube.',
        time: 'O(1)',
        space: 'O(1)',
        code: `long long nextCube(long long n) {
    long long root = std::floor(std::cbrt(n));
    return (root + 1) * (root + 1) * (root + 1);
}`,
      },
    ],
  },
  automorphic: {
    title: '16. Automorphic Number',
    questions: [
      {
        name: 'Check Automorphic',
        desc: 'A number whose square ends in the same digits as the number itself.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `bool isAutomorphic(long long n) {
    if (n < 0) return false;
    long long sq = n * n;
    long long temp = n;
    while (temp > 0) {
        if (temp % 10 != sq % 10) return false;
        temp /= 10;
        sq /= 10;
    }
    return true;
}`,
      },
      {
        name: 'Range',
        desc: 'Prints all automorphics.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `void printAutomorphics(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        if (isAutomorphic(i)) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count',
        desc: 'Counts automorphics.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `int countAutomorphics(long long L, long long R) {
    int count = 0;
    for (long long i = L; i <= R; ++i) {
        if (isAutomorphic(i)) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum',
        desc: 'Sums automorphics in range.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `long long sumAutomorphics(long long L, long long R) {
    long long sum = 0;
    for (long long i = L; i <= R; ++i) {
        if (isAutomorphic(i)) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Automorphic',
        desc: 'Next automorphic value.',
        time: 'O(K * log(N))',
        space: 'O(1)',
        code: `long long nextAutomorphic(long long n) {
    long long i = n + 1;
    while (true) {
        if (isAutomorphic(i)) return i;
        i++;
    }
}`,
      },
    ],
  },
  neon: {
    title: '17. Neon Number',
    questions: [
      {
        name: 'Check Neon',
        desc: 'A neon number equals the sum of the digits of its square.',
        time: 'O(log10(N^2))',
        space: 'O(1)',
        code: `bool isNeon(long long n) {
    long long sq = n * n;
    long long sum = 0;
    while (sq > 0) {
        sum += sq % 10;
        sq /= 10;
    }
    return sum == n;
}`,
      },
      {
        name: 'Range',
        desc: 'Prints neon numbers.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `void printNeons(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        if (isNeon(i)) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count',
        desc: 'Counts neon numbers.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `int countNeons(long long L, long long R) {
    int count = 0;
    for (long long i = L; i <= R; ++i) {
        if (isNeon(i)) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum',
        desc: 'Sums neon numbers.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `long long sumNeons(long long L, long long R) {
    long long sum = 0;
    for (long long i = L; i <= R; ++i) {
        if (isNeon(i)) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Neon',
        desc: 'Finds next neon number.',
        time: 'O(K * log(N))',
        space: 'O(1)',
        code: `long long nextNeon(long long n) {
    long long i = n + 1;
    while (true) {
        if (isNeon(i)) return i;
        i++;
    }
}`,
      },
    ],
  },
  spy: {
    title: '18. Spy Number',
    questions: [
      {
        name: 'Check Spy Number',
        desc: 'Digits sum equals product.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `bool isSpy(long long n) {
    n = std::abs(n);
    long long sum = 0, prod = 1;
    while (n > 0) {
        long long d = n % 10;
        sum += d;
        prod *= d;
        n /= 10;
    }
    return sum == prod;
}`,
      },
      {
        name: 'Range',
        desc: 'Spy numbers in range.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `void printSpys(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        if (isSpy(i)) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count',
        desc: 'Counts spy numbers.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `int countSpys(long long L, long long R) {
    int count = 0;
    for (long long i = L; i <= R; ++i) {
        if (isSpy(i)) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum',
        desc: 'Sums spy numbers.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `long long sumSpys(long long L, long long R) {
    long long sum = 0;
    for (long long i = L; i <= R; ++i) {
        if (isSpy(i)) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Spy Number',
        desc: 'Next spy number.',
        time: 'O(K * log(N))',
        space: 'O(1)',
        code: `long long nextSpy(long long n) {
    long long i = n + 1;
    while (true) {
        if (isSpy(i)) return i;
        i++;
    }
}`,
      },
    ],
  },
  duck: {
    title: '19. Duck Number',
    questions: [
      {
        name: 'Check Duck Number',
        desc: 'A positive number containing zero but not starting with it.',
        time: 'O(log10(N))',
        space: 'O(log10(N))',
        code: `bool isDuck(const std::string& s) {
    if (s.empty() || s[0] == '0') return false;
    for (size_t i = 1; i < s.length(); ++i) {
        if (s[i] == '0') return true;
    }
    return false;
}

bool isDuck(long long n) {
    if (n <= 0) return false;
    return isDuck(std::to_string(n));
}`,
      },
      {
        name: 'Range',
        desc: 'Ducks in range.',
        time: 'O((R - L) * log(R))',
        space: 'O(log(R))',
        code: `void printDucks(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        if (isDuck(i)) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count',
        desc: 'Counts ducks.',
        time: 'O((R - L) * log(R))',
        space: 'O(log(R))',
        code: `int countDucks(long long L, long long R) {
    int count = 0;
    for (long long i = L; i <= R; ++i) {
        if (isDuck(i)) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum',
        desc: 'Sums duck numbers.',
        time: 'O((R - L) * log(R))',
        space: 'O(log(R))',
        code: `long long sumDucks(long long L, long long R) {
    long long sum = 0;
    for (long long i = L; i <= R; ++i) {
        if (isDuck(i)) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Duck Number',
        desc: 'Next duck number.',
        time: 'O(K * log(N))',
        space: 'O(log(N))',
        code: `long long nextDuck(long long n) {
    long long i = n + 1;
    while (true) {
        if (isDuck(i)) return i;
        i++;
    }
}`,
      },
    ],
  },
  harshad: {
    title: '20. Harshad Number',
    questions: [
      {
        name: 'Check Harshad',
        desc: 'Number is divisible by digit sum.',
        time: 'O(log10(N))',
        space: 'O(1)',
        code: `bool isHarshad(long long n) {
    if (n <= 0) return false;
    long long temp = n, sum = 0;
    while (temp > 0) {
        sum += temp % 10;
        temp /= 10;
    }
    return n % sum == 0;
}`,
      },
      {
        name: 'Range',
        desc: 'Harshad in range.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `void printHarshads(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        if (isHarshad(i)) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count',
        desc: 'Counts harshad numbers.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `int countHarshads(long long L, long long R) {
    int count = 0;
    for (long long i = L; i <= R; ++i) {
        if (isHarshad(i)) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum',
        desc: 'Sums harshad numbers.',
        time: 'O((R - L) * log(R))',
        space: 'O(1)',
        code: `long long sumHarshads(long long L, long long R) {
    long long sum = 0;
    for (long long i = L; i <= R; ++i) {
        if (isHarshad(i)) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Harshad',
        desc: 'Next harshad value.',
        time: 'O(K * log(N))',
        space: 'O(1)',
        code: `long long nextHarshad(long long n) {
    long long i = n + 1;
    while (true) {
        if (isHarshad(i)) return i;
        i++;
    }
}`,
      },
    ],
  },
  sunny: {
    title: '21. Sunny Number',
    questions: [
      {
        name: 'Check Sunny Number',
        desc: 'Checks if N + 1 is perfect square.',
        time: 'O(1) sqrt',
        space: 'O(1)',
        code: `bool isSunny(long long n) {
    if (n < -1) return false;
    long long val = n + 1;
    long long root = std::sqrt(val);
    return root * root == val;
}`,
      },
      {
        name: 'Range',
        desc: 'Sunny in range.',
        time: 'O((R - L) * sqrt(R))',
        space: 'O(1)',
        code: `void printSunnys(long long L, long long R) {
    for (long long i = L; i <= R; ++i) {
        if (isSunny(i)) std::cout << i << " ";
    }
}`,
      },
      {
        name: 'Count',
        desc: 'Counts sunny numbers.',
        time: 'O((R - L) * sqrt(R))',
        space: 'O(1)',
        code: `int countSunnys(long long L, long long R) {
    int count = 0;
    for (long long i = L; i <= R; ++i) {
        if (isSunny(i)) count++;
    }
    return count;
}`,
      },
      {
        name: 'Sum',
        desc: 'Sums sunny numbers.',
        time: 'O((R - L) * sqrt(R))',
        space: 'O(1)',
        code: `long long sumSunnys(long long L, long long R) {
    long long sum = 0;
    for (long long i = L; i <= R; ++i) {
        if (isSunny(i)) sum += i;
    }
    return sum;
}`,
      },
      {
        name: 'Next Sunny',
        desc: 'Next sunny number.',
        time: 'O(K)',
        space: 'O(1)',
        code: `long long nextSunny(long long n) {
    long long i = n + 1;
    while (true) {
        if (isSunny(i)) return i;
        i++;
    }
}`,
      },
    ],
  },
  binary: {
    title: '22. Binary & Number System',
    questions: [
      {
        name: 'Decimal to Binary',
        desc: 'Converts positive decimal to base-2 string.',
        time: 'O(log2(N))',
        space: 'O(log2(N))',
        code: `std::string decToBin(long long n) {
    if (n == 0) return "0";
    std::string s = "";
    while (n > 0) {
        s += (n % 2 == 0 ? "0" : "1");
        n /= 2;
    }
    std::reverse(s.begin(), s.end());
    return s;
}`,
      },
      {
        name: 'Binary to Decimal',
        desc: 'Parses base-2 string to base-10 value.',
        time: 'O(length of S)',
        space: 'O(1)',
        code: `long long binToDec(const std::string& s) {
    long long num = 0;
    for (char c : s) {
        num = num * 2 + (c - '0');
    }
    return num;
}`,
      },
      {
        name: 'Decimal to Octal',
        desc: 'Converts base-10 integer to base-8 stream representation.',
        time: 'O(log8(N))',
        space: 'O(log8(N))',
        code: `#include <sstream>

std::string decToOct(long long n) {
    std::stringstream ss;
    ss << std::oct << n;
    return ss.str();
}`,
      },
      {
        name: 'Octal to Decimal',
        desc: 'Parses base-8 octal representation to base-10.',
        time: 'O(length of S)',
        space: 'O(1)',
        code: `#include <sstream>

long long octToDec(const std::string& s) {
    long long x;
    std::stringstream ss;
    ss << std::oct << s;
    ss >> x;
    return x;
}`,
      },
      {
        name: 'Decimal to Hexadecimal',
        desc: 'Converts decimal to hexadecimal stream representation.',
        time: 'O(log16(N))',
        space: 'O(log16(N))',
        code: `#include <sstream>

std::string decToHex(long long n) {
    std::stringstream ss;
    ss << std::hex << n;
    return ss.str();
}`,
      },
      {
        name: 'Hexadecimal to Decimal',
        desc: 'Parses hexadecimal string to decimal.',
        time: 'O(length of S)',
        space: 'O(1)',
        code: `#include <sstream>

long long hexToDec(const std::string& s) {
    long long x;
    std::stringstream ss;
    ss << std::hex << s;
    ss >> x;
    return x;
}`,
      },
      {
        name: 'Binary Addition',
        desc: 'Adds two binary strings directly without base-10 conversions.',
        time: 'O(max(L1, L2))',
        space: 'O(max(L1, L2))',
        code: `std::string addBinary(std::string a, std::string b) {
    std::string res = "";
    int i = a.size() - 1, j = b.size() - 1, carry = 0;
    while (i >= 0 || j >= 0 || carry) {
        int sum = carry;
        if (i >= 0) sum += a[i--] - '0';
        if (j >= 0) sum += b[j--] - '0';
        res += std::to_string(sum % 2);
        carry = sum / 2;
    }
    std::reverse(res.begin(), res.end());
    return res;
}`,
      },
      {
        name: 'Binary Multiplication',
        desc: 'Multiplies two base-2 numeric strings.',
        time: 'O(L1 * L2)',
        space: 'O(L1 + L2)',
        code: `std::string multiplyBinary(std::string a, std::string b) {
    long long num1 = binToDec(a);
    long long num2 = binToDec(b);
    return decToBin(num1 * num2);
}`,
      },
      {
        name: "One's Complement",
        desc: 'Inverts binary sequence bits.',
        time: 'O(N)',
        space: 'O(1)',
        code: `std::string onesComplement(std::string bin) {
    for (char &c : bin) {
        c = (c == '0') ? '1' : '0';
    }
    return bin;
}`,
      },
      {
        name: "Two's Complement",
        desc: "Calculates standard 2's complement of binary sequence.",
        time: 'O(N)',
        space: 'O(N)',
        code: `std::string twosComplement(std::string bin) {
    std::string ones = onesComplement(bin);
    return addBinary(ones, "1");
}`,
      },
    ],
  },
  'bit-manipulation': {
    title: '23. Bit Manipulation',
    questions: [
      {
        name: 'Odd/Even',
        desc: 'Fast parity check using the LSB.',
        time: 'O(1)',
        space: 'O(1)',
        code: `bool isEven(int n) {
    return (n & 1) == 0;
}`,
      },
      {
        name: 'Power of Two',
        desc: 'Checks if a number is a power of 2 using bit clearance.',
        time: 'O(1)',
        space: 'O(1)',
        code: `bool isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}`,
      },
      {
        name: 'Count Set Bits',
        desc: 'Counts 1s in standard bit representation.',
        time: 'O(number of set bits)',
        space: 'O(1)',
        code: `int countSetBits(int n) {
    int count = 0;
    while (n > 0) {
        n &= (n - 1);
        count++;
    }
    return count;
}`,
      },
      {
        name: 'Check ith Bit',
        desc: 'Evaluates if bit at i is high.',
        time: 'O(1)',
        space: 'O(1)',
        code: `bool checkIthBit(int n, int i) {
    return (n & (1 << i)) != 0;
}`,
      },
      {
        name: 'Set ith Bit',
        desc: 'Sets target bit high.',
        time: 'O(1)',
        space: 'O(1)',
        code: `int setIthBit(int n, int i) {
    return n | (1 << i);
}`,
      },
      {
        name: 'Clear ith Bit',
        desc: 'Clears target bit.',
        time: 'O(1)',
        space: 'O(1)',
        code: `int clearIthBit(int n, int i) {
    return n & ~(1 << i);
}`,
      },
      {
        name: 'Toggle ith Bit',
        desc: 'Inverts bit state.',
        time: 'O(1)',
        space: 'O(1)',
        code: `int toggleIthBit(int n, int i) {
    return n ^ (1 << i);
}`,
      },
      {
        name: 'Swap using XOR',
        desc: 'Swaps values of variables without secondary temp assignments.',
        time: 'O(1)',
        space: 'O(1)',
        code: `void swapUsingXOR(int &a, int &b) {
    if (&a == &b) return;
    a ^= b;
    b ^= a;
    a ^= b;
}`,
      },
      {
        name: 'Find Unique Element',
        desc: 'Finds unique element in array where all other elements appear twice.',
        time: 'O(N)',
        space: 'O(1)',
        code: `int findUnique(const std::vector<int>& arr) {
    int unique = 0;
    for (int x : arr) unique ^= x;
    return unique;
}`,
      },
      {
        name: 'Missing Number',
        desc: 'Finds single missing range number.',
        time: 'O(N)',
        space: 'O(1)',
        code: `int missingNumber(const std::vector<int>& arr, int n) {
    int xor_all = 0;
    for (int i = 1; i <= n; ++i) xor_all ^= i;
    for (int x : arr) xor_all ^= x;
    return xor_all;
}`,
      },
      {
        name: 'XOR of Range',
        desc: 'Evaluates standard XOR bounds values.',
        time: 'O(1)',
        space: 'O(1)',
        code: `int computeXORSum(int n) {
    if (n % 4 == 0) return n;
    if (n % 4 == 1) return 1;
    if (n % 4 == 2) return n + 1;
    return 0;
}

int xorOfRange(int L, int R) {
    return computeXORSum(R) ^ computeXORSum(L - 1);
}`,
      },
      {
        name: 'Subsets using Bitmask',
        desc: 'Prints all powersets of elements using bit permutation counters.',
        time: 'O(N * 2^N)',
        space: 'O(1)',
        code: `void printSubsets(const std::vector<int>& arr) {
    int n = arr.size();
    int total_subsets = 1 << n;
    for (int mask = 0; mask < total_subsets; ++mask) {
        std::cout << "{ ";
        for (int i = 0; i < n; ++i) {
            if (mask & (1 << i)) {
                std::cout << arr[i] << " ";
            }
        }
        std::cout << "}\\n";
    }
}`,
      },
      {
        name: 'Rightmost Set Bit',
        desc: "Isolates lowest active bit using 2's complement negation.",
        time: 'O(1)',
        space: 'O(1)',
        code: `int rightmostSetBit(int n) {
    return n & -n;
}`,
      },
      {
        name: 'Leftmost Set Bit',
        desc: 'Isolates leftmost active bit.',
        time: 'O(log(N))',
        space: 'O(1)',
        code: `int leftmostSetBit(int n) {
    if (n <= 0) return 0;
    int pos = 0;
    while (n >>= 1) pos++;
    return 1 << pos;
}`,
      },
      {
        name: 'Brian Kernighan Algorithm',
        desc: 'Counts active bits in O(set bits) complexity.',
        time: 'O(set bits)',
        space: 'O(1)',
        code: `int brianKernighan(int n) {
    int count = 0;
    while (n) {
        n &= (n - 1);
        count++;
    }
    return count;
}`,
      },
    ],
  },
};
