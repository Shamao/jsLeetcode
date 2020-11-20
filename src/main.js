const { arrToLink, printLink, reverseLink } = require("./Utils")

const arr = [1, 2, 3, 4, 5]

const head = arrToLink(arr);

const tile = reverseLink(head)


printLink(tile)