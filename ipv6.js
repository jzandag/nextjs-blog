const isMAC = (mac) => {
    if(/^[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}:[0-9A-F]{2}$/.test(mac))
        return true
    return false
}//0[xX][0-9a-fA-F]+
const ipv6 = (ip) => {
    ip = ip.split(':').join('')
    //Insert FF:FE in the middle
    let newip = ip.substring(0, ip.length/2) + 'FFFE' + ip.substring(ip.length/2)
    let ipArr = newip.split('')
    
    //convert 7th
    let bin = parseInt(newip.charAt(1) , 16).toString(2).padStart(4, '0').split('');
    bin[2] === '0' ? bin[2] = '1' : bin[2] = '0'
    ipArr[1] = parseInt(bin.join(''), 2).toString(16)

    //insert colon
    console.log(`Transformed ip: ${ipArr.join('').match(/.{1,4}/g).join(':')}`)
}

let ip = "0090:2716:FD0F:9000:0900";

console.log(`Original ip: ${ip}`)
isMAC(ip) ? ipv6(ip) : console.log('Invalid MAC Address')
