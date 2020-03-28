function somethingTrue() {
  return true
}

function somethingFalse() {
  return false
}

function securetrue(a, c) {
  let foo = a.b
  if (!foo || somethingTrue()) {
    throw Error('error')
  }
  c(1)
}

function securefalse(a, c) {
  let foo = a.b
  if (!foo || somethingFalse()) {
    throw Error('error')
  }
  c(1)
}


function insecuretrue(a, c) {
  let foo = a.b
  if (foo && somethingTrue()) {
    throw Error('error')
  }
  c(1)
}

function insecurefalse(a, c) {
  let foo = a.b
  if (foo && somethingFalse()) {
    throw Error('error')
  }
  c(1)
}

function insecure2(a, c) {
  let foo = a.b
  if (foo || somethingFalse()) {
    throw Error('error')
  }
  c(1)
}

function insecure3(a, c) {
  let foo = a.b
  if (!foo || somethingFalse()) {
    console.log("error")
  }
  c(1)
}


function insecure4(a, c) {
  let foo = a.b
  if (!foo) {
    console.log("error")
  }
  c(1)
}

function secure4(a, c) {
  let foo = a.b
  if (!foo) {
    throw Error("error")
  }
  c(1)
}
