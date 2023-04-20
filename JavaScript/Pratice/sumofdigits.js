function solve(num) {
    let ans = 0;

    while (num > 0) {
        ans += num % 10; // 4136 % 10 -> 6 (last digit)
        num = Math.floor(num / 10); // 4136/10 -> 412.6 -> Math.floor(413.6) -> 413

        if (num == 0 && ans > 9) {
            num = ans;
            ans = 0;
        }

    }

    return ans;
}

console.log(solve(4136));