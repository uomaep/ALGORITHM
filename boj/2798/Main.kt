fun main() {
    val (n, m) = readLine()!!.split(' ').map { it.toInt() }
    val cards = readLine()!!.split(' ').map { it.toInt() }

    var max = 0
    var sum = 0

    for(i in 0 until n) {
        for(j in i+1 until n) {
            for(k in j+1 until n) {
                sum = cards[i] + cards[j] + cards[k]
                if(sum <= m && sum > max) max = sum
            }
        }
    }

    println(max)
}