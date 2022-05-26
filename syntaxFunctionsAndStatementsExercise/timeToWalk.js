function solve(steps,footprint,speed) {
    let distance = steps * footprint
    let breaks = Math.floor(distance/500)*60
    distance = distance
    speed = speed/3.6
    let time = (distance/speed)+breaks
    let hours = Math.floor(time/3600)
    let minutes = Math.floor(time/60)
    let seconds = Math.ceil(time % 60)
    minutes=((minutes < 10) ? '0' : '') + minutes
    seconds = ((seconds < 10) ? '0' : '') + seconds
    hours = ((hours < 10) ? '0' : '') + hours
    console.log(`${hours}:${minutes}:${seconds}`)
}
solve(4000, 0.60, 5)
solve(2564, 0.70, 5.5)