let a = [5, 1, 7, 2]
console.log(a[2])

a.push(412)

a.push(192)

console.log(`O vetor tem ${a.length} valores`)
console.log(a)

for(let c = 0; c < a.length; c++){
    console.log(a[c])
}

console.log('_________________________')
a.sort()

for(let pos in a){
    console.log(a[pos])
}
console.log('_________________________')

let an = a.indexOf(192)
console.log(an)