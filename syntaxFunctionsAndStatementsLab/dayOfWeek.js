function slove(day) {
    let days = { 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6, 'Sunday': 7 }
    let res = days[day]
    if (res === undefined) {
        res = 'error'
    }

    console.log(res)
}
slove('aa')