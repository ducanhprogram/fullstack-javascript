function findSmallestMissingPositive(nums) {
    // Sắp xếp mảng
    nums.sort(function (a, b) {
        return a - b;
    });

    // Biến lưu trữ số nguyên dương nhỏ nhất cần tìm
    var missing = 1;

    // Duyệt qua mảng để tìm số đầu tiên không khớp
    for (var i = 0; i < nums.length; i++) {
        // Chỉ xét các số nguyên dương
        if (nums[i] > 0) {
            // Nếu tìm thấy số khớp với missing, tăng missing lên
            if (nums[i] == missing) {
                missing++;
            } else if (nums[i] > missing) {
                return missing;
            }
        }
    }

    // Trả về số nguyên dương nhỏ nhất không có trong mảng
    return missing;
}

// Ví dụ
console.log(findSmallestMissingPositive([1, 2, 0])); // Output: 3
console.log(findSmallestMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(findSmallestMissingPositive([7, 8, 9, 11, 12])); // Output: 1
console.log(findSmallestMissingPositive([-4, 1, 2, 4, 9, 6, 12])); // Output: 3
