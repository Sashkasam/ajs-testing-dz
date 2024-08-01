export default function cardIdentity (value) {
    const checkStr = value.substring(0,2)
    if(value.startsWith('4')) {
        return 'visa'
    }
    if(value.startsWith('2')) {
        return 'mir'
    }
    if(['51','52','53','54','55'].includes(checkStr)){
        return 'master'
    }
    if(['34','37'].includes(checkStr)){
        return 'amex'
    }
    if(['60','64','65'].includes(checkStr)){
        return 'discover'
    }
    if(['35'].includes(checkStr)){
        return 'jcb'
    }
    if(['30', '36', '54'].includes(checkStr)){
        return 'diner'
    }
    return  ''
}